const express = require('express');

module.exports = function(server){
    // API Router
    const router = express.Router();
    server.use('/api', router);

    //TODO Routers
    const todoService = require('../api/todo/service');
    todoService.register(router, '/todos');

}