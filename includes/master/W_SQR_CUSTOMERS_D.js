module.exports = (params) => {
  return publish("W_SQR_CUSTOMERS_D", {
  type: "table",
  schema: params.target_schema,
  tags: ["staging", "daily"],
  snowflake: { 
     transient: false 
  }, 


      description: "This is the customers dimension table",
  columns: {
 
    K_POS_CUSTOMER_DLHK: "DataLakeHouse key of the customer",
  },
  assertions: {
    uniqueKey: ["K_POS_CUSTOMER_DLHK"],
    nonNull: ["K_POS_CUSTOMER_DLHK"]

  },
...params.defaultConfig
}).query(ctx => `

SELECT
  *
FROM
  ${ctx.ref("V_SQR_CUSTOMER_STG")} AS C

  `)
}