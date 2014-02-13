---
layout: default
title: Enterprise JavaScript
---
<div class="jumbotron">

# Enterprise JavaScript
      
The JavaScript language is one of the [fastest growing](http://adambard.com/blog/top-github-languages-for-2013-so-far/) programming languages in recent years. It's real power comes to light when it is used on the server-side as part of a next generation web stack. On this site, we will dispell some myths about the readiness of JavaScript as part of a full-stack enterprise solution. 

</div>

<div class="row">  
<div class="col-md-8">

# What is Enterprise JavaScript?

Enterprise development generates software which serves the purpose of an organization as opposed to an individual. It is generally an integral part of the organization's overall Information Systems and as such it must integrate well with these other systems. A change in one system may affect one or more other enterprise systems. Enterprise development can be a very fragile world, so we place constraints on the development process. We adopt standard ways of architecting, developing, testing and deploying applications. We document systems and appoint architects to ensure that the system is resilient to failure and performant to the business needs.

In 2014, enterprise development falls mainly into two camps, .NET and Java. There is certainly a lot of competition out there and some very cool frameworks for building server-side technology, but if you are building applications that are considered enterprise applications, you are most likely using either .Net or Java. I began using Java when the first alpha releases of 1.0 were posted in 1995, so I'm not going to talk about .NET strategies.

## Java Enterprise Development

Although Java was released in 1996, it wasn't until the codification of several enterprise specs in 1999 that ushered in the era of the application server. Almost overnight, the mainframe and 4GL gave way to the application server. J2EE gave us a standard API and a (somewhat) vendor-agnostic runtime environment ushering in the Enterprise Java era. Sun got many of these APIs right (JDBC, Servlets, JSP, JTA) and faltered on other APIs (EJB). Over the decade, Sun would continue to incrementally improve the impaired APIs and add new ones as enterprises adapted to the incremental change.

During this period of slow, incremental improvement, developers in the trenches were tipping over the apple cart of the behemoths like IBM, BEA and Borland who were wedging their legacy technologies into a pair of ill-fitting J2EE shoes. Enterprise developers were feeling the pain, and the open source community was answering the call. Ant and Maven gave us build support, Spring provided an abstraction framework for Sun's APIs that let us mix and match the best of breed implementations, and JBoss developed their own application server that worked better than the others and was free. Although enterprises were still strategically aligned with IBM and Oracle, it was Sun who was providing the foundational APIs upon which the new face of enterprise development will be built.

## Enterprise Development Environment

It is most efficient for an enterprise to have established development standards. Ensuring that development teams are using the same technology and tools helps reduce training costs and software maintenance. Likewise, it is essential that enterprise infrastructure is well defined throughout the entire organization.

Established standards are a good thing, but standards that do not evolve will stagnate performance, creativity and eventually the morale of the development teams. It is equally important that enterprises take steady incremental steps to update their development environment and train their staff to leverage the advancements in datastores, platforms, programming languages and application design patterns.

### Enterprise Best Practices

While the technologies chosen to implement these best practices may vary wildly, Java enterprise development environments generally include all of the following disciplines.

* Build Tools/Task Runners
* Tests (Unit/Integration/Functional/Acceptance)
* Coverage
* Continuous Integration
* Deployment Mechanism

## Enterprise JavaScript

Enterprise Java refers to the Java language running on the Java Virtual Machine (JVM). There are literally hundreds of languages available today that run on the JVM, and many are designed to handle particular programming challenges such as parallel programming, functional programming, new data types, immutability and concurrency. Java is a modern language, but it has been slow to adopt what many consider to be the eloquence and features of such progressive languages as Clojure, Groovy, Scala, and JRuby.

### Language Availability

Rhino was developed by Netscape in 1997, and is included as part of the standard Java environment in 2006. The latest version of Rhino offers the most compliant version of the ECMAScript 5.1 specification available today, although it does not have the performance of Google's V8 JavaScript environment that powers Node.js. The forthcoming Java 8 will feature a new JavaScript runtime by the name of Nashorn which will support a full implementation of ECMAScript-262 Edition 5.1 and bring the full performance capabilities of Java 8's revised invoke-dynamic. JavaScript is alive and well on the JVM.

### Low Barrier to Entry

I first started using Enterprise JavaScript at a company that specialized in web design and development, and had no one who had done any enterprise development. They did have talented programmers and a good deal of JavaScript knowledge. With the proper abstractions in place, it took nearly no time for these developers to transition to server-side enterprise development using the same skills that made them awesome client-side programmers. When it came time to hire additional contractors on the project, the pool of people we could select from more than doubled, and we were able to hire devs at a fraction of the price of enterprise java developers.

While Scala, JRuby and Clojure are fine language choices over Java, in my opinion only Groovy comes close to the simplicity and expressiveness available in JavaScript.

### JVM Legacy

This is probably the most important consideration when I selected Rhino as my JavaScript runtime. I wanted to be able to fallback on Java for access to the thousands of high quality libraries and frameworks that make up the Java ecosystem. It is for this reason why Node.js is not part of my toolset. Rhino provides access to the same Java libraries that you are accustomed to using in your legacy web applications, but makes them even easier to use.

### Deployment Options

Most enterprises that I have consulted to have adopted the Spring Framework or are not using the full JEE specification to include EAR files. The WAR file is still the general work unit and is often deployed to an open-source container. It is crucial that Enterprise Java be able to take advantage of the existing server infrastructure and network operations teams available in the enterprise already.

## Evolutionary Usage

Rarely does an enterprise shift direction 180 degrees, and Enterprise JavaScript gives those formerly Java-based enterprises the option of incrementally introducing functionality. The build tools can remain the same, if you leverage the Spring Framework it can remain, and your domain model can remain in Java if you like. Perhaps you will start by transitioning your web controllers only, or maybe just your view templates.


</div>  

<div class="col-md-4">
  ## Blog Posts
  
  {% for post in site.posts %}
    * {{ post.date | date_to_string }} &raquo; [{{ post.title }}]({{ post.url }})
  {% endfor %}

</div>
  
</div>

