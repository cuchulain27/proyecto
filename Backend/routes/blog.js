/* 
ruta: api/blog
*/

'use strict'
const express = require('express');
const BlogController = require('../controllers/blog.controller');

const api = express.Router();

api.post('/new_entry', BlogController.new_blog_entry);
api.get('/resumed', BlogController.get_resumed_blogs);
api.get('/:blogId', BlogController.get_blog_page);

module.exports = api;