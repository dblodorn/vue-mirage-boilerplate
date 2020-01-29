require('dotenv').config()

const htmlOptions = {
  title: process.env.APP_TITLE,
  inject: true
}

module.exports = {
  htmlOptions
}