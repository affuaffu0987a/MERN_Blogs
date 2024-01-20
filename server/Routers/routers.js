const express = require('express')
const Authcontoller = require('../Controllers/auth-contoller')
const routers = express.Router()

routers.route('/blogs').post(Authcontoller.userBlogs)
routers.route('/getblogs').get(Authcontoller.getBlogsData)
routers.route('/delete/:id').delete(Authcontoller.RemovedBlog)
routers.route('/getupdatedata/:id').get(Authcontoller.GetSingleData)
routers.route('/updated/:id').patch(Authcontoller.BlogsUpdated)

module.exports = routers