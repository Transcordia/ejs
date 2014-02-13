var {Application} = require( 'stick' );
var response = require( 'ringo/jsgi/response' );

var app = exports.app = new Application();
app.configure( 'params', 'route' );

app.get( '/', function ( req ) {
    var name = req.params.name || 'World';
    return response.html( 'Hello, ' + name );
} );

app.get( '/:name', function ( req, name ) {
    return response.html( 'Hello, ' + name );
} );



