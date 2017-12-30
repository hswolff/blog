---
title: Migrating from Slate to Hydra
slug: migrating-from-slate-to-hydra
date: 2014-07-26T22:11:24.181Z
updated: 2014-07-26T22:27:13.019Z
tags:
- mac
- software
- hydra
- slate
- lua
---

For the longest time I have used [Slate](https://github.com/jigish/slate) as my window manager of choice. 

Slate does what it aims to pretty well.  It lets you create your own configuration file to define how you want slate to control your system.  Mostly I use it to do two things: 1, I use it to create hot-keys to make a window full screen or take up half of the screen; 2, I defined where I usually place my applications and assigned these configurations to a hotkey so that if any application moves out of place I can have it snap back to where it belongs.

Its documentation is a bit of a mine field.  You really have to dive around to find the information you're looking for.  Usually I end up with at least five tabs open while trying to add a new feature, cross referencing different wiki pages to make sure what I'm trying to do will work.

Its killer feature is that you can configure the program using JavaScript, my lingua of choice.

---

I've been using slate since May of 2013 and it's served me well.  It's stable and relatively quick.

It's also no longer maintained.

Last I checked the last commit to the master branch was on February 23rd, 2013.  It seems the maintainer has abandoned the project.  Issues are piling up as are pull requests.

With that in mind I started looking to find a replacement.  Thankfully I didn't have to wait long.

[Hydra](http://hackhydra.com/) is a new window manager that just hit version 1.0 and appears to be undergoing active development.  Configuration files are written in [Lua](http://www.lua.org/), a language not too dissimilar from JavaScript, yet with a small enough foot print that it takes almost no time at all to start coding.

Last night I started work on migrating my Slate configuration file over to a Hydra configuration file.

I camped out on [Hydra's documentation page](http://hackhydra.com/docs/index.html).  It's beautifully done and very clearly laid out.   Be sure to read the index page as it gives some necessary and clear overview instructions on how to get started with Hydra.

From there I open a tab of [Learn Lua in Y minutes](http://learnxinyminutes.com/docs/lua/) which served as a clear cheat sheet on Lua's syntax.

Finally I looked through the [config files of other people](https://github.com/sdegutis/hydra/wiki) to gain inspiration and ideas on how best I should approach creating my Hydra config file.

Come this morning I finished my migration and now I'm up and running on Hydra.  Hail Hydra!

---

If you're curious you can compare my previous Slate configuration file to my new Hydra configuration file.

[Previous Slate configuration file](https://github.com/hswolff/dotfiles/blob/4ebea2f48e1ef5c0e07cf7d3576e8c8351b89474/_slate.js)

[New Hydra Configuration file](https://github.com/hswolff/dotfiles/blob/master/hydra/init.lua)
