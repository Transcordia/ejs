---
layout: post
title:  "Enterprise JavaScript Hello World"
date:   2014-02-13 17:41:28
categories: ejs
---

In the last post, we selected our Enterprise JavaScript toolset. However, this example is so simple we will use only the following technologies:

* Maven
* Ringo/Stick

> All of the code examples for this blog can be accessed on GitHub. This example is in the branch named `hello-world`. Here are the shell commands you can execute to clone, checkout and execute the source. If git is not your thing, you can download and extract this zip archive and run the `mvn jetty:run` command.

{% gist 8964227 run.sh %}

The first time Maven builds the project on your computer may take a while as it downloads dependencies, but after that it should run fairly quickly. In order to create a WAR file that can be deployed to any Java application server use the `mvn package` command.

When the web server is running the application, access the root of the application to execute the JavaScript handler.

{% highlight bash %}
$ curl http://localhost:8080/
Hello, World
{% endhighlight %}


### pom.xml

The Maven build script is encapsulated in the following pom file. The build is very basic for Maven and includes dependencies on the Ringo and Stick projects. We use the Maven packaging type to indicate that we will be generating a WAR file. Adding the `jetty-maven-plugin` in the build section allows us to spin up the Jetty server to locally test and develop our application.

Ringo's support for CommonJS modules provides for the loading of CommonJS-compliant jar files available on the classpath. By simply including the Stick dependency in our project, the Stick module is discovered and made available to our project. 

{% gist 8964227 pom.xml %}

### web.xml

This Servlet 3.0 compliant web descriptor associates all incoming requests with a servlet that Ringo provides that bootstraps a Rhino JavaScript engine on top of the standard Servlet specification. Standard HTTP requests will be routed to Ringo's `connector.js::handleRequest()` function, and just like that, your web application is executing JavaScript.

{% gist 8964227 web.xml %}

### main.js

The `require` function is a global function in Ringo and is defined in the [CommonJS Modules 1.1.1](http://wiki.commonjs.org/wiki/Modules/1.1.1) specification. It provides a means of loading other JS files (modules) from relative or absolute paths. This is a code organizational concept that is similar to the use of packages in Java. 

Lines 1 & 2 demonstrate how `require` can be used in two different ways. The first line uses a [destructuring assignment](http://wiki.ecmascript.org/doku.php?id=harmony:destructuring) which is a very useful JS language feature. It is a convenient shorthand notation for the following:

{% highlight javascript %}
var Application = require( 'stick' ).Application;
{% endhighlight %}

When `require()` is invoked, the script is loaded, parsed, and any functions assigned to the `exports` object are exposed. In line 4 below you will notice that this `main.js` file is also exporting an instance of the `Application` object using the property `app` on the `exports` object.

The `app` property forms a series of middleware components that passes the initial HTTP request along until it is completely handled. In this simple example, we configure a single middleware component named `route` which tells Stick to load a file named `route.js` and add it to the chain of middleware. The `route` middleware binds a set of convenience functions to the `app` instance that correspond with the standard HTTP verbs GET, POST, PUT, DELETE, and OPTIONS. 

You can see our use of one of the functions added by the route middleware on the next line. `app.get(url, function)` gives us a convenient way of handling incoming GET requests. In response to the incoming request, we output an HTML response.

{% gist 8964227 main.js %}

### URL Matching

The route middleware provides a convenient URL matching and handler bindings for us. URL mappings can be more complex as well, and  can include named parameters.

{% highlight javascript linenos %}
app.get( '/:name', function ( req, name ) {
	return response.html( 'Hello, ' + name );
} );
{% endhighlight %}

When we call this endpoint by passing in a property, you will see how simple it is to access url parameters in your handler function.

{% highlight bash %}
$ curl http://localhost:8080/Fred
Hello, Fred
{% endhighlight %}


### It's all Middleware

The elegance of Stick comes from its architectural design. Our `app` instance defines a series of middleware components and the function we create to handle the request is simply the last piece of middleware on the chain. There may be a middleware component that modifies the request before it reaches our handler, or perhaps a piece of security middleware prevents the request from ever reaching our handler. 

	REQUEST  --> connector.js --> route.js --> main.js --
	                                                    |
	RESPONSE <-- connector.js <-- route.js  <------------

It is equally important to realize that the response generated by our handler passes _back through_ each piece of middleware after we return our result. This allows any of the middleware components to modify our response, add cookies or headers, or completely replace our response. 

The Stick web site contains a full list of all the available [middleware components](http://ringo.github.io/stick/) that come standard with the module.

## Processing Parameters

We wouldn't have much of an example if we can't process HTTP request parameters, so let's add a new piece of middleware to our workflow.

{% highlight javascript %}
app.configure( 'params', 'route' );

app.get( '/', function ( req ) {
	var name = req.params.name || 'World';
	return response.html( 'Hello, ' + name );
} );
{% endhighlight %}

Before the request reaches our handler, the params middleware adds a `params` property to the request object which contains a map of all the POST parameters and query parameters from the HTTP request. If the request's content type is `application/json`, the attached JSON will be automatically parsed and available as `req.postParams`.
