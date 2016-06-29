var connect  = require('connect')
var serve = require('serve-static')
var livereload = require('livereload')

var PUBLIC_DIR = './public'

var server = connect()
server.use(serve(PUBLIC_DIR))
server.listen(3000)
console.log('Listening on port 3000...')

livereload.createServer().watch(PUBLIC_DIR)
