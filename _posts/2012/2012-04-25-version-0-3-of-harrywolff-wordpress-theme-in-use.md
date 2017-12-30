---
title: Version 0.3 of HarryWolff WordPress Theme In Use
slug: version-0-3-of-harrywolff-wordpress-theme-in-use
date: 2012-04-25T08:57:42.000Z
updated: 2012-04-25T08:57:42.000Z
tags:
- child theme
- github
- me
- programming
- theme
- wordpress
---

Well, look what we have here!  

If you would be so kind as to look around you'll notice that this blog has a new paint of coat.  This paint of coat is one that I'm particularly happy with as it's the <strong>first WordPress theme I've used for this blog that I created myself.</strong>

I shouldn't take all the credit.  This theme is still a child-theme of the already excellent Twenty Eleven theme (which was the theme I was using previously).  However this child-theme has enough design of my own making that I feel comfortably calling it my own theme.

But wait!  There's more!

Along with creating this new theme I've also begun to develop it openly.  <a href="https://github.com/hswolff/harrywolff.com/tree/master/wp-content/themes/harrywolff">You can view the source code for this theme on its GitHub page.</a>  Any changes that you see appear on this blog will appear in that repo.  Watch it for fun, or ignore it for glee.

There's still a few things left that I need to do with this redesign.  I need to add a few more splotches of color (somewhere, not really sure where) and also fix up any other styling issues that might pop up.  But I was so eager to start using this theme that I figured there was nothing to lose by switching over to it today.

<h2>Development Notes</h2>
In case you're curious I grabbed the background repeating pattern from <a href="http://subtlepatterns.com/">Subtle Patterns</a>.  It's a great design resource to add just that right hint of flavor to the background.  I might try a few different backgrounds but for now I'm quite pleased with <a href="http://subtlepatterns.com/?p=1121">'furley_bg'</a>.

Also I've started an important practice while developing this theme:  using a local dev environment.  This is awesome for two very important reasons:

<ol>
<li>Any changes I make to my local environment don't affect my live blog.</li>
<li>The workflow is much, much faster.  Since all files are local the time it takes to refresh the page to see how my changes look is close to nil.</li>
</ol>

I've also kept my 'wp-content' folder out of my local WordPress installation.  It was getting lost amidst the rest of WordPress files so I moved it into my root directory, which you can see in my GitHub repo. 

I followed the information given <a href="http://codex.wordpress.org/Editing_wp-config.php#Moving_wp-content">here on how to move your wp-content</a> and you can see how it looks in <a href="https://github.com/hswolff/harrywolff.com/blob/master/wp-config.php">my wp-config.php file on my repo</a>.  This made the entire dev process much more enjoyable.

And as they say, a happy dev is a productive dev.
