require('dotenv/config')

const apiLink: any = {
    dev: "http://localhost:3000",
    production: process.env.VUE_APP_API,
}

export default {
    uri: apiLink[process.env.VUE_APP_ENV]
}
 