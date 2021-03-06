function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

// sort children instances by vnodes order
export function sortChildren(children, parent) {
  // null on SSR
  if (!parent._vnode) {
    return;
  }

  var vnodes = flattenVNodes(parent._vnode.children);
  children.sort(function (a, b) {
    return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
  });
}