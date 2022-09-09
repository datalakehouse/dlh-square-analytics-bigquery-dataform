module.exports = (params) => {
  return publish("W_SQR_CURRENCY_D", {
  type: "table",
  schema: params.target_schema,
  tags: ["staging", "daily"],
  snowflake: { 
     transient: false 
  }, 


      description: "This is the currency dimension table",
  columns: {
 
    K_CURRENCY_DLHK: "DataLakeHouse key of the currency",
  },
  assertions: {
    uniqueKey: ["K_CURRENCY_DLHK"],
    nonNull: ["K_CURRENCY_DLHK"]

  },
...params.defaultConfig
}).query(ctx => `

SELECT
  *
FROM
  ${ctx.ref("V_SQR_CURRENCY_STG")} AS C
  
`)
}