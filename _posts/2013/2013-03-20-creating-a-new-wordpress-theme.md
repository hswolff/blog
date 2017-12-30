---
title: Creating A New WordPress Theme
slug: creating-a-new-wordpress-theme
date: 2013-03-20T23:18:37.000Z
updated: 2013-03-31T18:41:37.000Z
tags:
- code
- git
- github
- programming
- theme
- wordpress
---

<p>The theme around here is feeling a little stale to me.  I've started working on a <a href="https://github.com/hswolff/harrywolff.com">new theme for this blog</a>, using <a href="https://github.com/markjaquith/WordPress-Skeleton">WordPress-Skeleton</a> as the base for the git repo and the <a href="http://themble.com/bones/">Bones</a> theme as my theme's starting foundation.</p>

<p>So far I've been enjoying both immensely:</p>

<h2>WordPress-Skeleton</h2>

<p>It was easy to move my git repo to use this format (you can see the <a href="https://github.com/hswolff/harrywolff.com/compare/56c423b79472f9de1c5d63ef3fa494cab00064b9...798c7d1408a2f9758d463b65f430b33cdf52c6a2">commits required here</a>). The primary reason I moved to this structure was it returned the power of development back to me as opposed to being completely at the whims of WordPress.</p>

<p>Now WordPress is in a tidy gitsubmodule and all my custom content (theme) is in its own folder and isn't affected by WordPress upgrades.</p>

<p>One thing I haven't yet decided how to manage is plugins:  should I control which plugins I use and commit that to the repo, or do I let WordPress manage that?  Anyone have any thoughts?</p>

<h2>Bones WordPress Theme</h2>

<p>I haven't yet fully dived into Bones but so far I've enjoyed the clarity of its comments and the strong base it provides.  The default HTML structure is semantic and intuitive and I've had no confusions when it comes to structure.</p>

<p>I did run into a bit of a pitfall when I tried to add a JavaScript library to load on my page, however it didn't take terribly long to see that the <code>bones.php</code> file was the one that managed those tasks.  I'm chalking this up to my naivety when it comes to WordPress theme development, as up until now I've only worked on <a href="http://codex.wordpress.org/Child_Themes">child themes</a>.</p>

<p>For my own development pleasure I added <a href="http://gruntjs.com/">grunt</a> to my Bones theme, making it easy to use <a href="http://sass-lang.com/">SASS</a> and <a href="http://livereload.com/">LiveReload</a>.  I opened an issue on the <a href="https://github.com/eddiemachado/bones/issues/373">Bone's GitHub page</a> to add that work to trunk however I may just have to suffice myself with an additional blog post (oh the horror ;)).</p>

<h2>Under Development</h2>

<p>I hope to get the new theme in Beta state in the near term so I can switch the blog over to it and then enjoy applying updates as I dev.</p>

<p>If you want to watch while I work all updates are going to be pushed to the <code>new-theme</code> branch of my public <a href="https://github.com/hswolff/harrywolff.com/tree/new-theme">harrywolff.com git repo</a>.</p>

