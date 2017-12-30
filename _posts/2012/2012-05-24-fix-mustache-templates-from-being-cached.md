---
title: Fix Mustache Templates From Being Cached
slug: fix-mustache-templates-from-being-cached
date: 2012-05-24T10:23:44.000Z
updated: 2012-05-24T10:23:45.000Z
tags:
- cache
- google chrome
- mustache
- programming
- require.js
---

<p>For development I've grown to love using <a href="http://mustache.github.com/">Mustache</a> templates.  Encouraging presentation and layout over logic and control-flow make for template files that are easy to read and update at later points, as all that exists are template tags and HTML markup.</p>

<p>In developing a fully client-side project I ran into the annoying problem of Mustache templates becoming strongly cached by Chrome.  I'm using <a href="http://requirejs.org/">require.js</a> as my file and module loader which I'm sure made my caching problem worse.  Each template is its own <code>.mustache</code> file that require.js loads into the page for use by Backbone View's.</p>

<p>So after I edited a Mustache template and reloaded the page I wouldn't see my template changes reflected.  The first time this happened I was quite confused.  I didn't know where the breakdown began as the only thing that changed was the template file.</p>

<p>After digging through the Network tab I found that the template file being loaded by <code>require.js</code> was still the old one.</p>

<p>I temporarily fixed this by emptying Chrome's cache, however having to do this after every template change proved tiresome.</p>

<p>Thankfully the wonderful developers of Chrome's Web Dev tools put in a setting that fixed this problem for me.</p>

<p>Simply check 'Disable cache' and you'll be able to edit your Mustache templates without fear of them being cached by Chrome.</p>

<p><a href="http://blog.harrywolff.com/fix-mustache-templates-from-being-cached/disable-cache/" rel="attachment wp-att-2385"><img src="/images/posts/2012/05/disable-cache-1024x371.png" alt="" title="disable-cache" width="584" height="211" class="aligncenter size-large wp-image-2385" /></a></p>
