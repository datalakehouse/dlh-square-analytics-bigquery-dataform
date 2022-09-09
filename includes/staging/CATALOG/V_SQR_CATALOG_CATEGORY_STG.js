module.exports = (params) => {
  return publish("V_SQR_CATALOG_CATEGORY_STG", {
    snowflake: { 
     transient: false 
  }, 

    type: "view",
    schema: params.target_schema,
    tags: ["staging", "daily"],
     
    ...params.defaultConfig
}).query(ctx => `
 

WITH source AS (
  SELECT * FROM  ${ctx.ref(params.source_schema,"CATALOG_CATEGORY")}
),

rename as (


SELECT
       --MD5 KEYS
        TO_HEX(SHA256( ID )) AS K_POS_CATALOG_CATEGORY_DLHK        
        --BUSINESS KEYS
        ,ID AS K_POS_CATALOG_CATEGORY_BK        
        --DESCRIPTION
        ,NAME AS A_POS_PRODUCT_CATEGORY        
        --metadata (MD)
        , CURRENT_TIMESTAMP AS MD_LOAD_DTS        
        , (SELECT invocation_id FROM ${ctx.ref("H_INVOCATION_ID")}) AS MD_INTGR_ID
FROM
    source
)

SELECT * FROM rename

`)
}