---
title: "GitHub Favorites: A Google Chrome Extension"
slug: github-favorites-a-google-chrome-extension
date: 2012-03-29T10:13:30.000Z
updated: 2012-03-29T10:14:39.000Z
tags:
- bookmarks
- extension
- favorites
- github
- google chrome
- programming
---

tl;dr:  I made a Chrome Extension.  <a href="https://github.com/hswolff/github-favorites">Find the source code here</a>.  <a href="https://chrome.google.com/webstore/detail/kfhdalekdpifhlndhcdnjgjoefiajefc">Install it from here</a>.

Last weekend I was talking to some coworkers about a glorious idea I had for a website. The basic gist was that it would be a site like Hacker News, but only of links to resources and documentation that were related to hacking and programming.  No punditry or introspection allowed. And each post would be taggable, so that at a later point you could search and easily find a link you had seen earlier.  

I thought the idea brilliant, my <a href="https://github.com/netpro2k">coworker</a> not so much. He posted a link to <a href="http://delicious.com/">Delicious</a>, asked how was my idea different, and promptly killed my dream. 

Ok maybe it wasn't that harsh but he had a point. As I had conceived it there wasn't enough of a difference between my idea and Delicious to warrant an investment of time and thought.

But I still wanted to code something. Something preferably small. 

As we hashed out and destroyed my idea I remembered another idea that had appealed to me before. GitHub allows you to watch repos, and whatever repo you watch you see its activity in your stream. This is Nice and Good but some repos tend to be more noisy than others. This leads to a stream of commits and comments from one repo without being able to see any others. 

It’a been suggested to GibHub (via HN) to add the ability to Favorite or Bookmark a repo. GitHub either isn't interested in this feature or hasn't come up with an implementation they are happy with as I have yet to see the appearance of a Favorite button. 

So this past week I took it upon myself to create this feature. I've built my first Chrome Extension that I'm calling GitHub Favorites. It's a very simple tool: it adds a Favorites button next to a repos Watch button and when clicked it adds that repo as to your bookmarks in the newly created GitHub Favorites folder.  Simple as pie (TM). 

Creating a Chrome Extension was as straight forward as I had imagined. There were a few gotchyas: a <a href="http://code.google.com/chrome/extensions/content_scripts.html">content script</a> (script that runs directly on a web page) can't access chrome.* API extensions, nor can it access the page's functions and variables. 

This meant I had to either include my own reference to jQuery for DOM manipulation or go directly to the JavaScript DOM API. I chose the latter and immediately missed the coziness of jQuery's bling (read: $). 

But it was worth it. I think. The native JS DOM API wasn't horrible. But jQuery is so much nicer...*drools*

You can find the <a href="https://github.com/hswolff/github-favorites">source code to the extension on its GitHub page</a> and <a href="https://chrome.google.com/webstore/detail/kfhdalekdpifhlndhcdnjgjoefiajefc">install it from its Chrome Extension page</a>. Please let me know if you have any bug or feature requests.  And please enjoy. I hope it saves your sanity (as it did mine) when dealing with you GitHub stream. 
