---
title: Media Queries, Viewports, and Responsive Layouts - oh my!
slug: media-queries-viewports-and-responsive-layouts
date: 2012-06-24T17:48:49.000Z
updated: 2013-12-30T20:51:29.734Z
tags:
- css3
- favorite
- media query
- responsive design
- technology
- Tutorials
- viewport
---

<p>The world wide web isn't what it used to be.  Back in the day you only had to develop for one screen.  One screen that was a nice square 15" CRT monitor, whose resolution you could safely predict would be 1024x768 or less.  Back in those days you had the glory of CSS1 and table based layouts.  You were content and happy because that's all you knew and it worked well enough for you.</p>

<p>Today's world wide web is so different it's downright frightening.  We still have those wonderful 15" CRT monitors floating around the world.  We also have 11" MacBook Air's, 24" monitors, and LCD TVs.  There's so many different resolutions in use today it's enough to make your head spin.</p>

<p>One of the newest resolutions that we web developers have to combat are found on our beloved mobile devices.  Our iPhones, Androids, and Windows Mobile Phone Mobile Phone 7 (not a typo, I believe that is its real name).  Our mobile phones with resolutions of 640x320 that can change at a moments notice to 320x640.  Oh if only we could go back to the joyful times of yesterdays…</p>

<p>But never fear!  We have tools at our disposal to conquer these finicky mobile devices.  And that's what I'm going to talk about in today's post I have titled:</p>

<p>"Viewports, Media Queries, and Responsive Layouts - oh my!"</p>

<p>Let's begin!</p>

<!--more-->

<h2>Viewports</h2>

<p>Viewports are not as confusing as you may think.  Really, they're pretty simple.  However the more explanations you read about viewports the more confused you can become.</p>

<p>Hopefully the same doesn't happen here.</p>

<p>You're probably all too familiar with the following snippet:</p>

<p><code>&lt;meta name="viewport" content="width=device-width"&gt;</code></p>

<p>But do you know what it means?</p>

<p>This meta tag was originally created by Apple for Mobile Safari and has since become adopted by other major browsers.  It allows web developers to adjust and control the viewport through which their pages are viewed.</p>

<p>Don't worry about it affecting your desktop layouts - it was created for mobile usage and has no effect on desktop browsers [3].</p>

<p>So what is a viewport?</p>

<p>A viewport is the space in which your web page is displayed.  To support layouts designed for the desktop the default viewport width on Mobile Safari is 980px.  That's why when you load some web pages on your phone you're able to pan to the left and right.  What you're panning is the viewport.  Quirksmode has a very thorough explanation of this concept and I strongly encourage you to read through their guide for a more robust explanation (and with pictures!).[2]</p>

<p>However when you're creating a mobile-optimized website you want the viewport to be equal to the physical width of your device.  That's where the handy <code>device-width</code> property comes into play.  <code>device-width</code> is the width of your device in pixels.</p>

<p>So when you use the following viewport tag:</p>

<p><code>&lt;meta name="viewport" content="width=device-width"&gt;</code></p>

<p>You're setting your mobile browser's <strong>viewport's width</strong> to be <strong>equal</strong> to your <strong>device width</strong>.</p>

<p>Read that sentence a few times to make sure it makes sense.  If your device-width is 320px then your viewport's width has now been set to 320px.  That means if your website's layout is wider than 320px then a portion of your layout will not be visible within the mobile device's viewport - the user will need to pan to see the rest of the website.</p>

<p>There's other options available to you in in the viewport tag, such as allowing the user to scale the page, setting a max and min scale, and setting the initial scale.</p>

<p>For a full run down check out Apple's reference page.  It's comprehensive and clear.[1]</p>

<h2>Media Queries</h2>

<p>So after we got through that viewport ruckus you're probably wondering why we even bothered, right?</p>

<p>Well it turns out that if you don't make use of the viewport tag your media queries can turn out quite whacky.</p>

<p>Since media queries target the size of your browser window (i.e. its viewport), if your browser hasn't set its viewport to be mobile-friendly, all your media queries won't have any affect.</p>

<p>You'll be targeting a max-width of 320px when your browser's (viewport's) width is still set to 980px.  For you see the browser’s CSS only concerns itself with the viewport size, so setting the viewport width is of high necessity to successfully target mobile browsers.</p>

<p>But I get ahead of myself.</p>

<p>What is a media query?  It's clearly defined by the W3C [4]:</p>

<blockquote>
  <p>A media query consists of a media type and zero or more expressions that check for the conditions of particular media features.</p>
</blockquote>

<p>An arbitrary example:</p>

<p><code>only all and (min-width: 0px)</code></p>

<p>This media query will target almost every device.  It is also worth noting that a media query can be used when linking to an external CSS file:</p>

<p><code>&lt;link rel="stylesheet" type="text/css" media="only all and (min-width: 0px)" href="style.css"/&gt;</code></p>

<p>Or inline a CSS stylesheet:</p>

<p><code>@media only all and (min-width: 0px) { }</code></p>

<p>For now let's break apart this example media query to understand what is going on.</p>

<h2>only</h2>

<p>For starters we're using the very important <code>only</code> keyword.  As described by the W3C [4]:</p>

<blockquote>
  <p>The keyword ‘only’ can also be used to hide style sheets from older user agents.</p>
</blockquote>

<p>This is handy as it protects us from older clients misinterpreting our media queries.  It's easy to use and something that I recommended you add to your queries for a nice layer of safety.</p>

<h2>all</h2>

<p>The <code>all</code> aspect of the query is a <strong>media type</strong>.  There are many media types available for querying (complete list found on the W3C page [5]) but for our purposes we're only concerned with the <code>all</code> type as it applies to all devices.  We're aiming to make a responsive design for every device so the <code>all</code> media type suits our needs quite nicely (thank you very much)!</p>

<h2>and</h2>

<p>The <code>and</code> keyword is a part of a media query syntax.  It expresses a logical <em>and</em>.  Meaning that for our media query to evaluate as true our device must be of type <code>all</code> and have a <code>min-width: 0px</code>.  If we were to want a logical <em>or</em> we would have used a comma [4], for example:</p>

<p><code>only all, (min-width: 0px)</code></p>

<p>The above example would evaluate to true for <code>all</code> media types OR if the <code>min-width</code> of the device was 0px - so pretty much any device available.</p>

<p>There is also the keyword <em>not</em> [4]:</p>

<blockquote>
  <p>The presence of the keyword ‘not’ at the beginning of the media query negates the result. I.e., if the media query had been true without the ‘not’ keyword it will become false, and vice versa.</p>
</blockquote>

<p>So for example while the following media query would always evaluate to false:</p>

<p><code>only all and (max-width: 0px)</code></p>

<p>Changing only to not would negate the result and cause the entire query to evaluate to true:</p>

<p><code>not all and (max-width: 0px)</code></p>

<p>Note: the <em>not</em> keyword applies to the entire media query, not to only the <em>all</em> keyword.  So it would be ok to think of the previous example grouped like:</p>

<p><code>not(all and (max-width: 0px))</code></p>

<h2>(min-width: 0px)</h2>

<p>This is a <code>media feature</code>.  It is the part of a media query that allows you to query against aspects of a device, and from where most media queries derive their flexibility.</p>

<p>You can target the min/max height/width of a device, its orientation, and aspect-ratio to name a few.  The full list is available on the W3C website [4], however the most used features are min/max height/width of a device.</p>

<p>Targeting a device's width allows you to create unique CSS styles when a device's max-width is reduced to 320px (a common width for mobile devices).  For example:</p>

<p><code>only all and (max-width: 320px)</code></p>

<p>You can also combine multiple media features in your media query.  Let's say you want to update CSS selectors when the device's width is between two widths:</p>

<p><code>only all and (min-width: 321px) and (max-width: 768px)</code></p>

<p>And then you want to update CSS styles again when the device becomes smaller than 320px wide:</p>

<p><code>only all and (max-width: 320px)</code></p>

<p>Putting the above two together:</p>

```
@media only all and (min-width: 321px) and (max-width: 768px) {
    h1 {
        color: blue;
    }
}
@media only all and (max-width: 320px) {
    h1 {
        color: red;
    }
}
```

<h2>Responsive Layouts</h2>

<p>We're entering the home stretch.  In fact I think we already crossed it in the last section.</p>

<p>A responsive layout is nothing more than using a media query to update the layout of your website depending on how its viewport is modified.</p>

<p>And guess what - you're already there.</p>

<p>You know what a viewport is and you know how a media query is created.  Now you can apply that knowledge to create designs that always display beautifully, no matter the device they're viewed on.</p>

<p>A lot simpler than it looks right?</p>

<p>So next time you start a new web design be sure to include some media queries.  They're quite friendly to include and they make a world of difference for end-users.</p>

<p>They're definitely a web designer's best friend.</p>

<p><strong>References:</strong></p>

<p>[1]: <a href="https://developer.apple.com/library/safari/ipad/#documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html">Apples documentation for meta viewport tag</a></p>

<p>[2]: <a href="http://www.quirksmode.org/blog/archives/2010/09/combining_meta.html">Quirksmode: Combining meta viewport and media queries</a></p>

<p>[3]: <a href="http://stackoverflow.com/questions/8333535/does-viewport-affect-desktop-browsers">Stackoverflow: Does viewport affect desktop browsers?</a></p>

<p>[4]: <a href="http://www.w3.org/TR/css3-mediaqueries/#media0">W3C: Media Queries</a></p>

<p>[5]: <a href="http://www.w3.org/TR/CSS2/media.html#media-types">W3C: Recognized media types</a></p>

<p>[6]: <a href="http://cssmediaqueries.com/">CSS Media Queries</a></p>

