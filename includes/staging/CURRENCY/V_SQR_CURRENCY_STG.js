module.exports = (params) => {
    return publish("V_SQR_CURRENCY_STG", {
    type: "view",
    schema: params.target_schema,
    tags: ["staging", "daily"],
  
      ...params.defaultConfig
  }).query(ctx => `

with rename as (

SELECT
    'USD' as K_CURRENCY_BK
    , TO_HEX(SHA256('USD')) AS K_CURRENCY_DLHK
    , 'USD' AS K_CURRENCY_CODE
    , 'USD' AS A_CURRENCY_NAME
    , 'United States Dollars' as A_CURRENCY_NAME_FULL
    ,'' AS MD_HASH_COL
    , (SELECT invocation_id FROM ${ctx.ref("H_INVOCATION_ID")}) AS MD_INTGR_ID

UNION ALL

SELECT
    'EUR' as K_CURRENCY_BK
    , TO_HEX(SHA256('EUR')) AS K_CURRENCY_DLHK
    , 'EUR' AS K_CURRENCY_CODE
    , 'EUR' AS A_CURRENCY_NAME
    , 'Euros' as A_CURRENCY_NAME_FULL
    ,'' AS MD_HASH_COL
    , (SELECT invocation_id FROM ${ctx.ref("H_INVOCATION_ID")}) AS MD_INTGR_ID

)

select * from rename 
`)
}