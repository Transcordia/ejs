var {Application} = require( 'stick' );
var response = require('ringo/jsgi/response');

var app = exports.app = new Application();
app.configure( 'route' );

app.get( '/', function ( req, name ) {
    return response.html('Hello, World');
} );



