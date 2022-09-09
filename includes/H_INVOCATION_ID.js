 module.exports = (params) => {
  return publish("H_INVOCATION_ID",
 {  type: "table",
...params.defaultConfig
}).query(ctx => ` SELECT GENERATE_UUID() as invocation_id
`)
}