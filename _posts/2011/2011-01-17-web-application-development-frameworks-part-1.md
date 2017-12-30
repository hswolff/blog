---
title: Web Application Development Frameworks - Part 1
slug: web-application-development-frameworks-part-1
date: 2011-01-17T10:58:19.000Z
updated: 2012-05-28T15:46:23.000Z
tags:
- beginner
- customize
- django
- easy
- favorite
- frustration
- programming
- pylons
- python
- reviews
- ruby
- ruby on rails
- web2py
---

<p>For a long time <a href="http://rubyonrails.org/">Ruby on Rails</a> has been the 'cool kid on the block' when it comes to <a href="http://en.wikipedia.org/wiki/Web_application_framework">contemporary web application development.</a>  A good way to understand what a 'contemporary web application' is to view the <a href="http://rubyonrails.org/applications">list of applications that have already been built on Ruby on Rails (RoR).</a>  Some notables in the list  are Twitter, Groupon, Funny or Die, and Hulu.  That's some good company.</p>

<p>And in case it wasn't clear, Ruby on Rails is a development tool that allows a programmer to create the type of sites listed above easily.  With RoR a website becomes <a href="http://en.wikipedia.org/wiki/Rapid_application_development">fast and easy to create, maintain, and improve</a>.  A lot of 'magic' is found within Rails that lets the programmer focus on the practicalities of website development, such as what is the final product  and does it work as expected.  This is unlike other development tools that force the programmer to worry about idiosyncratic behaviors of certain technologies which cause the completion of the project to drag on and on.
<!--more-->
On the other side of the coin are a bunch of similar web development tools that make use of the programming language <a href="http://python.org/">Python</a> (Rails uses the programming language <a href="http://www.ruby-lang.org/en/">Ruby</a>, hence Ruby on Rails).  The most popular Python based web application development tool is <a href="http://www.djangoproject.com/">Django</a>, and derived from there is a long tail of smaller web application development tools such as <a href="http://pylonshq.com/">Pylons</a> and <a href="http://web2py.com/">web2py</a>.</p>

<p>When I first began work on my web application - The Best &amp; Worst Project - I chose web2py as my development tool of choice.  From a maze of articles and study I came away with the impression that web2py was a good choice for a beginner.  This remained true throughout my time using it to create the <a href="http://bestandworstproject.appspot.com/">first version of The Best &amp; Worst</a>.  The result of my work can be seen <a href="http://bestandworstproject.appspot.com/">here</a>.</p>

<p>However, I wasn't content with my results.  So after a month break I began reworking the application, starting from scratch, using the experience I had gleamed to improve upon my product.</p>

<p>The second public version of The Best &amp; Worst Project can be found here.  The layout is much improved and I know the code that powers the site is much more intelligent.  I was happily showing friends and family the result yet a gnawing feeling began to form.</p>

<p>After a few friends began using the site I noticed a few things here and there that I wanted to change and improve.  Such as prohibiting registered users from changing their name to anything that contained the word 'best' or 'worst'.  I'm well aware there's a method for changing this behavior with web2py, however the prospect of delving deep into web2py to find the answer quickly turned me off from any beginnings of attempts to do so.</p>

<p>Eventually the problem that I began to continuously encounter while using web2py was one of burdensome oversimplification of methods to achieve certain behaviors in my web application.  In short, I began to feel that web2py 'dumbed down' ways to perform certain tasks.  This is undoubtedly done to help a new user, however it resulted in restricting development for those that need greater levels of customization.</p>

<p>One example of this 'dumbing' was when I was creating the submit form for a user's submissions of a 'best' or 'worst' moment.  Web2py has form wizards built-in that allow for the easy creation of forms and how they are handled.  Originally I thought, "Awesome!  So sweet!  I've just been saved a ton of work!"  and so I merrily began using web2py's SQLFORM tool.  However when I viewed the resulting HTML I was less than pleased.  The form had been created with a label attached to the input box, which was not what I wanted.</p>

<p>So after looking through the <a href="http://web2py.com/book">web2py book</a>, and viewing examples in <a href="http://www.web2py.com/appliances">other applications</a>, I found the solution to the formatting problem created by SQLFORM:  I can't use SQLFORM.  From what I read and saw it turned out that to get the custom styling I required I could not take advantage of the form wizard provided by web2py.</p>

<p>Another example of this 'dumbing down' was when I was creating a function that was to be re-used in various places throughout the application.  Initially I put the code for the function in the top of the exposed view.  This resulted in a very bulky view.py, making maintenance a deplorable and ugly task.</p>

<p>After a good amount of time spent scouring the web2py book, other examples in applications, I finally found how to improve my code on the <a href="http://groups.google.com/group/web2py/">web2py mailing list</a>.  I ran a few searches that eventually allowed me to come across a conversation dealing with this same issue, giving me the information I needed to know that placing a function in a model.py would allow for it to be used throughout any controller and view in my application.</p>

<p>At this point my frustration level bubbled over.  Web2py is very much a tool for beginners to learn web application development however it is not amenable to programmers seeking greater levels of customization.  If a programmer were to create a highly customized application in web2py they would inevitably need to pour through web2py's source code and seek help from the (very active) mailing list.  (That is one thing that is great about web2py:  the mailing list is very active and <em>very</em> helpful: the lead developer of the framework is a regular.)</p>

<p>It is perhaps my fault for misjudging my requirements.  If I did not need a high level of customization web2py would have been great to work with.  However due to my needs and requirements I began fighting with web2py more than enjoying its features.  It was at this point that I made the decision to branch off from web2py, and begin investing in a different web application development framework.  The one I next chose was Pylons.  And this is where a whole different host of issues began to arise.</p>

<p><em>To be continued</em>:  In the next post I will talk about the longevity of development tools (Pylons -> Pyramid), consistency (models -> resources), and excitement and enjoyment (Python -> Ruby).</p>

