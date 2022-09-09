module.exports = (params) => {
  return publish("W_SQR_MERCHANT_LOCATION_D", {
  type: "table",
  schema: params.target_schema,
  tags: ["staging", "daily"],
  snowflake: { 
     transient: false 
  }, 


      description: "This is the merchant location dimension table",
  columns: {
 
    K_MERCH_LOC_DLHK: "DataLakeHouse key of the currency",
  },
  assertions: {
    uniqueKey: ["K_MERCH_LOC_DLHK"],
    nonNull: ["K_MERCH_LOC_DLHK"]

  },
...params.defaultConfig
}).query(ctx => `


SELECT
  *
FROM
  ${ctx.ref("V_SQR_MERCHANT_LOCATION_STG")} AS M

  `)
}