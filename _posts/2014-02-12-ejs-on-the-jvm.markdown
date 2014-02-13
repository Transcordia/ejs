---
layout: post
title:  "Enterprise JavaScript on the JVM"
date:   2014-02-12 17:41:28
categories: ejs
---

At some point when developing an architecture, you have to choose some technologies, and this is where some opinions begin to creep into the discussion. Ultimately, every organization will have different toolsets and deployment environments, but here are a list of compatibility points I want in my architecture:

## Build Tools - Maven

> Build tools are critical to every organization. They not only provide a common language for compiling and packaging an application, they also dictate how application dependencies are resolved, control SDLC environments, execute test harnesses, and deploy programming units to application servers. There are a lot of new kids on the block in this regard, but in many ways they are just simply lipstick on Maven. It has taken me many years to appreciate Maven, but it is still probably the de facto standard in most enterprises.

## JEE Framework - Spring

> JEE support for most enterprises typically means choosing between a single vendor's stack or combining best of breed technologies using an abstraction framework. In 2003, the Spring Framework ushered in a lighter, simpler approach to using Sun's full J2EE specification and provided a means of working with some highly advanced open source technologies that were emerging in the ecosystem. Today, I think Spring is the most widely used framework for developing enterprise applications and has many projects that continue to enhance enterprise development beyond the JEE specification such as Spring Data, Spring Security and Spring Integration.

## Deployment Environment - Tomcat/WAR

> Application servers come in commercial flavors (Websphere, Weblogic) and open source (Wildfly, Glassfish) and all fatefully support the full JEE specification. But one application server that does not support the full JEE specification is, by far, the most widely used in enterprise development. The Tomcat web server is the reference implementation of the Java servlet specification, and through the use of enterprise frameworks like Spring have become the de facto enterprise application server.

> Deployment strategies in the enterprise space generally separate responsibilities between the developers of applications from the deployers of these applications. There have been many interesting packaging (OSGI, Spring Boot) and deployment runtime (Docker, Node.js, Vert.x) technologies being used in today's environments, but the most widely used deployment package is the web application archive (WAR) specified by the JEE specification. A WAR file can be deployed by any Java application server and is also supported by most cloud providers such as Amazon using their Elastic Beanstalk APIs.

As we move forward in this discussion, the playing field is set. We will be using Maven as our build tool along with its ability to manage application dependencies. Our JEE support will come via abstractions allowed using the Spring Framework. While we won't be using Spring MVC to develop our application, the entire Spring ecosystem will be available to us. Our final application deployable unit will be a self-contained WAR file which can be deployed to any Java application server in use today. We chose Tomcat because it is the most widely used.

## Web Development with JavaScript

Javascript is right at home on the web. You have probably been using it for years in the development of your client applications. Most likely you have made AJAX calls to a server to retrieve data fragments that you render using DOM manipulation.

Using the Java Spring MVC framework, the following might happen on the server when it receives your HTTP request. A servlet is invoked and parses your request parameters. A controller validates the request and issues JDBC queries against an enterprise database. The result set is marshalled into Java objects by a data layer, and the web application marshalls these Java objects into XML or JSON in the HTTP response.

Our web development stack will consist of two open source technologies that provide a means of writing web controller logic using JavaScript.

### Ringo

Ringo (or RingoJS) emerged from the codebase of a technology called Helma. Helma is a JavaScript web application framework that was developed as early as 1998. in 2008, the framework was modified to be a CommonJS runtime environment not solely dedicated to web development and renamed Ringo. You can indeed write shell scripts and launch client-side GUIs using Ringo. Ringo creates a runtime engine powered by Mozilla's Rhino JavaScript library.

To support web development, Ringo includes a Java Servlet that can launch the Ringo engine to power traditional JEE web application development. While Ringo has support for basic Servlet interactions such as HTTPRequest and HTTPResponse it does not contain a functional web stack. That is the domain of another JavaScript framework from Hannes Wallnöfer.

### Stick

Stick is a set of web utility functions and a series of JavaScript middleware components designed to provide full web controller development. The architecture and API for Stick has been influenced by Sinatra, and it is very simple and understandable.

> ### Maven Support

> Like most of the newer web development frameworks, they are developed without too much concern for the enterprise. For example both Ringo and Node are often run from the command line, not an application server. Maven is not a tool the developers of Ringo have historically relied upon, and Ringo, Stick and even the latest version of Rhino, which is a dependency of both, have not been pushed into the Maven Central repository. For this reason, I am hosting the library dependencies at Transcordia's Maven repository. I hope that this series of articles will begin to show the Ringo team the importance of supporting an enterprise ecosystem.

## Summary

I tried to represent a toolset which would resound with most enterprise developers using the JVM and have an interest in using JavaScript for server-side code. The technology choices are opinionated to be sure, and I generalized quite a bit so please keep an open mind moving forward if I didn't pick your personal favorites.

In the next post we will examine the simplest EJS web application we can develop.