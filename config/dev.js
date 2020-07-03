const HOST='"https://miniapp.you.163.com"'
const HOST_M='"https://m.you.163.com"'
const isH5=process.env.CLIENT_ENV==='h5'
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST:isH5?'"/api"':HOST,
    HOST_M:isH5?'"/api-m"':HOST_M
  },
  weapp:{},
  mini: {},
  h5: {}
}
