---
title: Getting Comfortable With Ember.js
slug: getting-comfortable-with-ember-js
date: 2014-03-17T02:30:29.461Z
updated: 2014-03-17T02:30:29.460Z
tags:
- framework
- learning
- ember
---

![](/images/posts/2014/Mar/rock_climbing.jpg)
[Source](http://www.flickr.com/photos/mariachily/5250487136/)

Over the past month I've been learning [Ember.js](http://emberjs.com/).  It's been interesting for me as I'm coming from a background of Backbone and Angular.  I used Backbone for over a year at my previous job, and now use Angular.js at my current job.  I'm learning Ember.js as the [Ghost](https://ghost.org/) project has decided to go with it to rebuild their admin dashboard.

All the things that have kept me from learning Ember in the past still hold true.  The wall to getting comfortable and familiar with Ember is much higher than the other toolkits/libraries/frameworks currently out there.  This isn't due to any failing of Ember - rather it's a result of Ember's purpose.

As I've repeatedly read Ember is unabashedly a framework.  With that brings all the pros and cons of a framework.  A framework does a lot for you, but requires you to learn a lot.  A framework abstracts away a lot of rote tasks for you, but can get in your way when you want to do something that isn't rote.

Probably the biggest pain point of Ember is due to its young age.  By being so new the supporting material that surrounds existing frameworks such as Rails and Django don't exist.  To Ember's credit they're doing a great job providing [guides that teach you how to use Ember on a high level](http://emberjs.com/guides/).  They walk with you, hand in hand (with excellent accompanying inline [JSBin's](http://jsbin.com/)), how to create an Ember Route, Controller, Template, View, and Component.  All the big high-level concepts are covered in great detail.  Granted, it's still a lot to learn and master, but at least the resources exist for you to continually refer back to (which I do constantly - probably on my third read-through of the Guides).

However where Ember's Guides fall flat are explanations on Ember's internals and primitives.  These are the pieces that power all of Ember and right now there's no way to really understand what they are, what they do, and how they're used.  I'm a naturally inquisitive guy, and to gain as thorough an understanding of Ember would prove helpful in understanding why Ember behaves in the way it does.  Especially when things go wrong, knowing what's going on underneath the hood would be of great value.

Having a guides page explaining Ember's *Dependency Injection* would be lovely.  For now I had to delve into the source code and scour the internet for some high level explanations.  I would have loved to have the canonical explanation straight from Ember's home page.

I also have had to struggle to understand Ember's *Resolver* and *Container*.  I got an excellent explanation in person from folks in the Ember community however having a reference that I could refer to would be even better.

I'm still delving into the maze that I consider Ember.  I haven't yet had my *a-ha!* moment but I know it's there.  One day I'll wake up and know exactly what hooks to open up as I build out my Ember app.  For now I'm still trying to find my footing.
