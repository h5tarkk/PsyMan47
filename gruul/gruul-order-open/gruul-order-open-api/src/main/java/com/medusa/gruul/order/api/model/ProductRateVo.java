package com.medusa.gruul.order.api.model;

import lombok.Data;

/**
 * ProductRateVo.java
 *
 * @author alan
 * @date 2020/2/7 20:22
 */
@Data
public class ProductRateVo {
    /**
     * åæ°
     */
    private Double rate;
    /**
     * ååID
     */
    private Long productId;
}
