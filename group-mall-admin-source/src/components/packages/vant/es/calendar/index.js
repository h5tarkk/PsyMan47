// Utils
import { isDate } from '../utils/validate/date';
import { getScrollTop } from '../utils/dom/scroll';
import { t, bem, copyDates, getNextDay, compareDay, ROW_HEIGHT, calcDateNum, compareMonth, createComponent, getDayByOffset } from './utils'; // Components

import Popup from '../popup';
import Button from '../button';
import Toast from '../toast';
import Month from './components/Month';
import Header from './components/Header';
export default createComponent({
  props: {
    title: String,
    color: String,
    value: Boolean,
    formatter: Function,
    confirmText: String,
    rangePrompt: String,
    defaultDate: [Date, Array],
    getContainer: [String, Function],
    allowSameDay: Boolean,
    closeOnPopstate: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      default: 'single'
    },
    minDate: {
      type: Date,
      validator: isDate,
      default: function _default() {
        return new Date();
      }
    },
    maxDate: {
      type: Date,
      validator: isDate,
      default: function _default() {
        var now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      }
    },
    position: {
      type: String,
      default: 'bottom'
    },
    rowHeight: {
      type: [Number, String],
      default: ROW_HEIGHT
    },
    round: {
      type: Boolean,
      default: true
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showMark: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    showSubtitle: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    maxRange: {
      type: [Number, String],
      default: null
    }
  },
  data: function data() {
    return {
      subtitle: '',
      currentDate: this.getInitialDate()
    };
  },
  computed: {
    months: function months() {
      var months = [];
      var cursor = new Date(this.minDate);
      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, this.maxDate) !== 1);

      return months;
    },
    buttonDisabled: function buttonDisabled() {
      var type = this.type,
          currentDate = this.currentDate;

      if (type === 'range') {
        return !currentDate[0] || !currentDate[1];
      }

      if (type === 'multiple') {
        return !currentDate.length;
      }

      return !currentDate;
    }
  },
  watch: {
    type: 'reset',
    value: 'init',
    defaultDate: function defaultDate(val) {
      this.currentDate = val;
      this.scrollIntoView();
    }
  },
  mounted: function mounted() {
    this.init();
  },

  /* istanbul ignore next */
  activated: function activated() {
    this.init();
  },
  methods: {
    // @exposed-api
    reset: function reset() {
      this.currentDate = this.getInitialDate();
      this.scrollIntoView();
    },
    init: function init() {
      var _this = this;

      if (this.poppable && !this.value) {
        return;
      }

      this.$nextTick(function () {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        _this.bodyHeight = Math.floor(_this.$refs.body.getBoundingClientRect().height);

        _this.onScroll();
      });
      this.scrollIntoView();
    },
    // scroll to current month
    scrollIntoView: function scrollIntoView() {
      var _this2 = this;

      this.$nextTick(function () {
        var currentDate = _this2.currentDate;
        var targetDate = _this2.type === 'single' ? currentDate : currentDate[0];
        var displayed = _this2.value || !_this2.poppable;
        /* istanbul ignore if */

        if (!targetDate || !displayed) {
          return;
        }

        _this2.months.some(function (month, index) {
          if (compareMonth(month, targetDate) === 0) {
            _this2.$refs.months[index].scrollIntoView();

            return true;
          }

          return false;
        });
      });
    },
    getInitialDate: function getInitialDate() {
      var type = this.type,
          minDate = this.minDate,
          maxDate = this.maxDate,
          defaultDate = this.defaultDate;
      var defaultVal = new Date();

      if (compareDay(defaultVal, minDate) === -1) {
        defaultVal = minDate;
      } else if (compareDay(defaultVal, maxDate) === 1) {
        defaultVal = maxDate;
      }

      if (type === 'range') {
        var _ref = defaultDate || [],
            startDay = _ref[0],
            endDay = _ref[1];

        return [startDay || defaultVal, endDay || getNextDay(defaultVal)];
      }

      if (type === 'multiple') {
        return defaultDate || [defaultVal];
      }

      return defaultDate || defaultVal;
    },
    // calculate the position of the elements
    // and find the elements that needs to be rendered
    onScroll: function onScroll() {
      var _this$$refs = this.$refs,
          body = _this$$refs.body,
          months = _this$$refs.months;
      var top = getScrollTop(body);
      var bottom = top + this.bodyHeight;
      var heights = months.map(function (item) {
        return item.height;
      });
      var heightSum = heights.reduce(function (a, b) {
        return a + b;
      }, 0); // iOS scroll bounce may exceed the range

      /* istanbul ignore next */

      if (top < 0 || bottom > heightSum && top > 0) {
        return;
      }

      var height = 0;
      var currentMonth;

      for (var i = 0; i < months.length; i++) {
        var visible = height <= bottom && height + heights[i] >= top;

        if (visible && !currentMonth) {
          currentMonth = months[i];
        }

        months[i].visible = visible;
        height += heights[i];
      }
      /* istanbul ignore else */


      if (currentMonth) {
        this.subtitle = currentMonth.title;
      }
    },
    onClickDay: function onClickDay(item) {
      var date = item.date;
      var type = this.type,
          currentDate = this.currentDate;

      if (type === 'range') {
        var startDay = currentDate[0],
            endDay = currentDate[1];

        if (startDay && !endDay) {
          var compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          } else if (this.allowSameDay) {
            this.select([date, date]);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === 'multiple') {
        var selectedIndex;
        var selected = this.currentDate.some(function (dateItem, index) {
          var equal = compareDay(dateItem, date) === 0;

          if (equal) {
            selectedIndex = index;
          }

          return equal;
        });

        if (selected) {
          currentDate.splice(selectedIndex, 1);
        } else {
          this.select([].concat(currentDate, [date]));
        }
      } else {
        this.select(date, true);
      }
    },
    togglePopup: function togglePopup(val) {
      this.$emit('input', val);
    },
    select: function select(date, complete) {
      var _this3 = this;

      var emit = function emit(date) {
        _this3.currentDate = date;

        _this3.$emit('select', copyDates(_this3.currentDate));
      };

      if (complete && this.type === 'range') {
        var valid = this.checkRange(date);

        if (!valid) {
          // auto selected to max range if showConfirm
          if (this.showConfirm) {
            emit([date[0], getDayByOffset(date[0], this.maxRange - 1)]);
          } else {
            emit(date);
          }

          return;
        }
      }

      emit(date);

      if (complete && !this.showConfirm) {
        this.onConfirm();
      }
    },
    checkRange: function checkRange(date) {
      var maxRange = this.maxRange,
          rangePrompt = this.rangePrompt;

      if (maxRange && calcDateNum(date) > maxRange) {
        Toast(rangePrompt || t('rangePrompt', maxRange));
        return false;
      }

      return true;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', copyDates(this.currentDate));
    },
    genMonth: function genMonth(date, index) {
      var h = this.$createElement;
      var showMonthTitle = index !== 0 || !this.showSubtitle;
      return h(Month, {
        "ref": "months",
        "refInFor": true,
        "attrs": {
          "date": date,
          "type": this.type,
          "color": this.color,
          "minDate": this.minDate,
          "maxDate": this.maxDate,
          "showMark": this.showMark,
          "formatter": this.formatter,
          "rowHeight": this.rowHeight,
          "currentDate": this.currentDate,
          "showSubtitle": this.showSubtitle,
          "allowSameDay": this.allowSameDay,
          "showMonthTitle": showMonthTitle
        },
        "on": {
          "click": this.onClickDay
        }
      });
    },
    genFooterContent: function genFooterContent() {
      var h = this.$createElement;
      var slot = this.slots('footer');

      if (slot) {
        return slot;
      }

      if (this.showConfirm) {
        var text = this.buttonDisabled ? this.confirmDisabledText : this.confirmText;
        return h(Button, {
          "attrs": {
            "round": true,
            "block": true,
            "type": "danger",
            "color": this.color,
            "disabled": this.buttonDisabled,
            "nativeType": "button"
          },
          "class": bem('confirm'),
          "on": {
            "click": this.onConfirm
          }
        }, [text || t('confirm')]);
      }
    },
    genFooter: function genFooter() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('footer', {
          unfit: !this.safeAreaInsetBottom
        })
      }, [this.genFooterContent()]);
    },
    genCalendar: function genCalendar() {
      var _this4 = this;

      var h = this.$createElement;
      return h("div", {
        "class": bem()
      }, [h(Header, {
        "attrs": {
          "title": this.title,
          "showTitle": this.showTitle,
          "subtitle": this.subtitle,
          "showSubtitle": this.showSubtitle
        },
        "scopedSlots": {
          title: function title() {
            return _this4.slots('title');
          }
        }
      }), h("div", {
        "ref": "body",
        "class": bem('body'),
        "on": {
          "scroll": this.onScroll
        }
      }, [this.months.map(this.genMonth)]), this.genFooter()]);
    }
  },
  render: function render() {
    var _this5 = this;

    var h = arguments[0];

    if (this.poppable) {
      var _attrs;

      var createListener = function createListener(name) {
        return function () {
          return _this5.$emit(name);
        };
      };

      return h(Popup, {
        "attrs": (_attrs = {
          "round": true,
          "value": this.value
        }, _attrs["round"] = this.round, _attrs["position"] = this.position, _attrs["closeable"] = this.showTitle || this.showSubtitle, _attrs["getContainer"] = this.getContainer, _attrs["closeOnPopstate"] = this.closeOnPopstate, _attrs["closeOnClickOverlay"] = this.closeOnClickOverlay, _attrs),
        "class": bem('popup'),
        "on": {
          "input": this.togglePopup,
          "open": createListener('open'),
          "opened": createListener('opened'),
          "close": createListener('close'),
          "closed": createListener('closed')
        }
      }, [this.genCalendar()]);
    }

    return this.genCalendar();
  }
});