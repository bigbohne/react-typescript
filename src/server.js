'use strict'

/**
 *  Simple HTTP Server that serves static files from the '../site' directory.
 *  Note: React Router does not work when using the filesystem.
 */

const fastify = require('fastify');
const fastifystatic = require('fastify-static');
const path = require('path')

const server = fastify({logger: {level: 'info'}});

server.register(fastifystatic,
    {
        root: path.join(__dirname, "../site"),
        prefix: '/'
    })

server.listen(8080);