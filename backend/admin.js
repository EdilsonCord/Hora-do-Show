const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require("mongoose");

AdminBro.registerAdapter(AdminBroMongoose)

const express = require('express')
const app = express()

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
})

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro)