const H_INVOCATION_ID = require("./includes/H_INVOCATION_ID.js");
const V_SQR_CUSTOMER_STG = require("./includes/staging/CUSTOMERS/V_SQR_CUSTOMER_STG.js");
const V_SQR_MERCHANT_LOCATION_STG = require("./includes/staging/LOCATION/V_SQR_MERCHANT_LOCATION_STG.js");
const V_SQR_PAYMENT_STG = require("./includes/staging/PAYMENT/V_SQR_PAYMENT_STG.js");
const V_SQR_CATALOG_ITEM_VARIATION_STG = require("./includes/staging/CATALOG/V_SQR_CATALOG_ITEM_VARIATION_STG.js");
const V_SQR_CATALOG_ITEM_MODIFIER_STG = require("./includes/staging/CATALOG/V_SQR_CATALOG_ITEM_MODIFIER_STG.js");
const V_SQR_CATALOG_CATEGORY_STG = require("./includes/staging/CATALOG/V_SQR_CATALOG_CATEGORY_STG.js");
const V_SQR_CATALOG_DISCOUNT_STG = require("./includes/staging/CATALOG/V_SQR_CATALOG_DISCOUNT_STG.js");
const V_SQR_CATALOG_TAX_STG = require("./includes/staging/CATALOG/V_SQR_CATALOG_TAX_STG.js");
const V_SQR_ORDER_LINE_ITEM_MODIFIER_STG = require("./includes/staging/ORDERS/V_SQR_ORDER_LINE_ITEM_MODIFIER_STG.js");
const V_SQR_ORDER_HEADER_STG = require("./includes/staging/ORDERS/V_SQR_ORDER_HEADER_STG.js");
const V_SQR_ORDER_LINE_ITEM_STG = require("./includes/staging/ORDERS/V_SQR_ORDER_LINE_ITEM_STG.js");
const V_SQR_CURRENCY_STG = require("./includes/staging/CURRENCY/V_SQR_CURRENCY_STG.js");
const W_SQR_ORDERS_F = require("./includes/master/W_SQR_ORDERS_F.js");
const W_SQR_CATALOG_ITEM_D = require("./includes/master/W_SQR_CATALOG_ITEM_D.js");
const W_SQR_CUSTOMERS_D = require("./includes/master/W_SQR_CUSTOMERS_D.js");
const W_SQR_PAYMENTS_F = require("./includes/master/W_SQR_PAYMENTS_F.js");
const W_SQR_MERCHANT_LOCATION_D = require("./includes/master/W_SQR_MERCHANT_LOCATION_D.js");
const W_SQR_CURRENCY_D = require("./includes/master/W_SQR_CURRENCY_D.js");


module.exports = (params) => {
  params = {
    source_database: 'stg-datalakehouse',
    source_schema: 'DEMO_SQUARE_ALT13',
    target_schema: 'SQUARE',
    ...params
  };
  const {
    source_database,
    source_schema,
    target_schema
} = params;

const CUSTOMER = declare({
  database: source_database,
  schema: source_schema,
  name: "CUSTOMER"
});
const ORDER_DISCOUNT = declare({
  database: source_database,
  schema: source_schema,
  name: "ORDER_DISCOUNT"
});
const ORDER_LINE_ITEM = declare({
  database: source_database,
  schema: source_schema,
  name: "ORDER_LINE_ITEM"
});
const ORDER = declare({
  database: source_database,
  schema: source_schema,
  name: "ORDER"
});
const PAYMENT = declare({
  database: source_database,
  schema: source_schema,
  name: "PAYMENT"
});
const CATALOG_ITEM = declare({
  database: source_database,
  schema: source_schema,
  name: "CATALOG_ITEM"
});
const CATALOG_ITEM_VARIATION = declare({
  database: source_database,
  schema: source_schema,
  name: "CATALOG_ITEM_VARIATION"
});
const CATALOG_CATEGORY = declare({
  database: source_database,
  schema: source_schema,
  name: "CATALOG_CATEGORY"
});
const CATALOG_MODIFIER = declare({
  database: source_database,
  schema: source_schema,
  name: "CATALOG_MODIFIER"
});
const CATALOG_TAX = declare({
  database: source_database,
  schema: source_schema,
  name: "CATALOG_TAX"
});
const CATALOG_DISCOUNT = declare({
  database: source_database,
  schema: source_schema,
  name: "CATALOG_DISCOUNT"
});
const ORDER_LINE_ITEM_MODIFIER = declare({
  database: source_database,
  schema: source_schema,
  name: "ORDER_LINE_ITEM_MODIFIER"
});
const LOCATION = declare({
  database: source_database,
  schema: source_schema,
  name: "LOCATION"
});
  return {
    CUSTOMER,
    ORDER_DISCOUNT,
    ORDER_LINE_ITEM,
    ORDER,
    PAYMENT,
    CATALOG_ITEM,
    CATALOG_ITEM_VARIATION,
    CATALOG_CATEGORY,
    CATALOG_MODIFIER,
    CATALOG_TAX,
    CATALOG_DISCOUNT,
    ORDER_LINE_ITEM_MODIFIER,
    LOCATION,
    H_INVOCATION_ID: H_INVOCATION_ID(params),
    V_SQR_CUSTOMER_STG: V_SQR_CUSTOMER_STG(params),
    V_SQR_MERCHANT_LOCATION_STG: V_SQR_MERCHANT_LOCATION_STG(params),
    V_SQR_PAYMENT_STG: V_SQR_PAYMENT_STG(params),
    V_SQR_CATALOG_ITEM_VARIATION_STG: V_SQR_CATALOG_ITEM_VARIATION_STG(params),
    V_SQR_CATALOG_ITEM_MODIFIER_STG: V_SQR_CATALOG_ITEM_MODIFIER_STG(params),
    V_SQR_CATALOG_CATEGORY_STG: V_SQR_CATALOG_CATEGORY_STG(params),
    V_SQR_CATALOG_DISCOUNT_STG: V_SQR_CATALOG_DISCOUNT_STG(params),
    V_SQR_CATALOG_TAX_STG: V_SQR_CATALOG_TAX_STG(params),    
    V_SQR_ORDER_LINE_ITEM_MODIFIER_STG: V_SQR_ORDER_LINE_ITEM_MODIFIER_STG(params),
    V_SQR_ORDER_HEADER_STG: V_SQR_ORDER_HEADER_STG(params),
    V_SQR_ORDER_LINE_ITEM_STG: V_SQR_ORDER_LINE_ITEM_STG(params),
    V_SQR_CURRENCY_STG: V_SQR_CURRENCY_STG(params),
    W_SQR_ORDERS_F: W_SQR_ORDERS_F(params),
    W_SQR_CATALOG_ITEM_D: W_SQR_CATALOG_ITEM_D(params),
    W_SQR_CUSTOMERS_D: W_SQR_CUSTOMERS_D(params),    
    W_SQR_PAYMENTS_F: W_SQR_PAYMENTS_F(params),
    W_SQR_MERCHANT_LOCATION_D: W_SQR_MERCHANT_LOCATION_D(params),
    W_SQR_CURRENCY_D: W_SQR_CURRENCY_D(params),

  }
}