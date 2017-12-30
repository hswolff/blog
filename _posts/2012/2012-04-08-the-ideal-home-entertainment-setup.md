---
title: The Ideal Home Entertainment Setup
slug: the-ideal-home-entertainment-setup
date: 2012-04-08T22:22:01.000Z
updated: 2012-04-08T22:22:01.000Z
tags:
- boxee
- home entertainment
- home theater
- technology
- Tutorials
- xbmc
---

I love TV and movies.  I love watching new shows and I love kicking back to old favorites.  I think it would be fair to call myself an entertainment junkie.

To supplement this large diet of TV and movies I've taken it upon myself to create a home entertainment setup that I would be proud to call my own.  At long last I have found the winning combination of hardware and software that now make up my setup.

I thought it would be helpful to the internet at large if I shared what I've learned along the way.  I've gone through a few rounds of trial and error before arriving at my current setup, and hopefully you'll be able to benefit from my mistakes.

<!--more-->
<h2>Storage</h2>
The first part of any high quality home entertainment setup is a robust storage solution.  My first solution to this problem was a simple external hard drive, however I quickly outgrew its limits.

My second forray was to build my own home server, an adventure that ended poorly and with limited success.  A combination of choosing my own hardware, learning how to configure Linux on the fly, and just simple naiveté caused this attempt to be quickly abandoned.

After selling off those parts I moved to a Windows Home Server.  This served me well for a few years.  It was simple and did what it was designed to relatively well.  However after a few years I began to outgrow its limited set of features.

I began researching other home storage solutions and eventually wound up choosing a <a href="http://www.synology.com/us/index.php">Synology DiskStation</a> as my next server.  I'm very glad that I did.

Synology makes DiskStations which are NAS boxes that run a customized version of Linux packed with features that would put most home servers to shame.  I have the <a href="http://www.synology.com/us/products/ds410/">DS410</a> (superseded by the DS411).  I'm running four 1.5TB hard dives in a 1-disk redundancy volume. I'm using <a href="http://www.synology.com/us/products/features/RAID.php">Synology's Hybrid RAID</a> setup which seems to mimic the features of a Drobo, meaning I can expand the size of my volume at a later date with any size hard drive. 

DiskStations run <a href="http://www.synology.com/dsm/index.php?lang=us">DSM</a> which is accessed through a very slick desktop-like web interface. Synology has made it very easy to set up user accounts for Read/Write/Delete permissions per folder. Those same accounts can be used in a FTP sever.  

Honestly Synology can do a lot. It was built with small business needs in mind but for any tech savvy geek like myself it fits right into my workflow. 

The hardware is small, quiet, and sleek. Right now it sits on the ground next to my TV and aside from the blinking LED lights (showing HD activity) it is hardly noticed. 

I use my DS410 to download Torrents (it has a BitTorrent client accessed through a web interface), stream music (DS audio is sweet - who needs iTunes Match?), backup my Mac (supports Time Machine nicely), and to host all my media files. 

I love this device. 

<h2>HTPC</h2>
A media server is no good without some way to play the media it stores.  These devices don't need to be anything special as they're mostly just thin heads on top of your server.  They need only be powerful enough to play your top quality media without any framerate loss. 

Although not my top choice I am currently using an <a href="http://www.newegg.com/Product/Product.aspx?Item=N82E16883103235">Acer Aspire Revo 3610</a> as my HTPC. It has enough power to play 720p movies seamlessly and it effortlessly connects to my TV via an HDMI cable.

<h2>Software</h2>
When I first created my home entertainment setup I used <a href="http://boxee.tv">Boxee</a> to access my media.  For a long time it served all my needs very nicely.  It was able to index my files and presented them in an attractive grid with all their cover art automatically downloaded.  It was easy to use and just worked.

A few months ago Boxee (the company) stopped supporting the open source version of Boxee and things began no longer working correctly.  The straw that broke the camel's back for me was when clip art stopped being downloaded.  Instead of seeing the pretty posters for my movies all I saw was a default image.

I am now using <a href="http://xbmc.org/">XBMC</a> and I absolutely adore it.  Boxee was built off of XBMC so it isn't surprising that most of what I liked about Boxee I now like about XBMC.

XBMC recently released a major upgrade called <a href="http://xbmc.org/natethomas/2012/03/24/xbmc-11-0-eden/">Eden</a>.  It's now at version 11 and does everything that Boxee did and a little more.

One of the coolest new features of <a href="http://wiki.xbmc.org/index.php?title=AirPlay">XBMC is its support for AirPlay video</a>.  That means that from my iPhone or iPad I can push video content to XBMC and it starts playing on my TV.  It's magic and I love it.

However one thing XBMC doesn't do is support AirPlay audio.  For a while I was bummed about that until I discovered <a href="http://sourceforge.net/projects/shairport4w/">Shairport4w</a>.

Shairport4w brings AirPlay audio to your windows computer.  This means that from my iTunes library on my Mac I can easily and seamlessly play my music through my TV's speakers - which are a lot better than my computers.  Shairport4w was the final missing piece of the puzzle and I'm so glad it exists.


<h2>Conclusion</h2>

... and that's my setup.  It works wonderfully and I love using it every day.

I hope you picked up some useful knowledge in this post and that it helps you in your quest for home entertainment perfection.

Of course this setup isn't final by any means.  I'd love a dedicated home audio system, and my Acer Revo is beginning to show its age.  But for now my needs are comfortably met, making movie time a fun time.

And now, will you excuse me?  I have some things I want to watch. :)

