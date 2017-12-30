---
title: How I Make My Week of Links
slug: how-i-make-my-week-of-links
date: 2010-10-25T12:38:47.000Z
updated: 2010-10-25T12:38:47.000Z
tags:
- csv
- extensions
- google reader
- python
- scripting
- session buddy
- star
- technology
- terminal
- Tutorials
- week of links
---

The first few times I was formatting my 'Week of Links' post I had a very loose and chaotic system in place.  Most of my reading is done through my <a href="http://google.com/reader/" target="_blank">Google Reader</a> account, which helps centralize all the different websites and blog feeds into one place.  This way, instead of having to load 10+ websites every day to catch up on news, I am able to go to my Google Reader and read all my news in one neat location.

When I first started saving links to use for these posts I would shift between tagging them, starring them, or sending them to my <a href="http://www.instapaper.com/" target="_blank">Instapaper</a> account.  This quickly became chaos and resulted in more confusion and work than I had ever intended.

Slowly, as the weeks progressed, I fell into a rhythm.  During the week I would Star each Google Reader item that I thought was interesting or worthwhile to share.  After the week was over I would go through my starred items from the past week, sometimes skipping articles that were no longer relevant or interesting, and open each article in a new tab (in the background thanks to this <a href="https://chrome.google.com/extensions/detail/lcimnckjiicikfpppcgnjhiflibbnbel" target="_blank">Google Chrome Extension</a>).  At this point I have one Google Chrome windows open with about 15-20 tabs, each with the article loaded.

From here I open the most excellent Chrome Extension <a href="https://chrome.google.com/extensions/detail/edacconmaakjimmfgnblocblbcdcpbko" target="_blank">Session Buddy</a> and use its export feature of my open tabs to produce a CSV file with the title and URL of each article.

Until this week I would manually go through this list and create the HTML necessary to make each headline linkable, which was quite an arduous and boring job.  This week however I made a breakthrough and was able to automate this task through the use of only FOUR lines of Python code.  Opening a Terminal window on my Mac I entered into the Python Interpretator and ran the following four lines:

<pre>
import csv
reader = csv.reader(open("googlRss.csv", "rb"))
for row in reader:
	print '&lt;a href="%s" target="_blank"&gt;%s&lt;/a&gt;' % (row[1], row[0])</pre>

Which produced the following result:
<a href="/images/posts/2010/10/terminalWeekofLinks.png"><img class="aligncenter size-full wp-image-946" title="terminalWeekofLinks" src="/images/posts/2010/10/terminalWeekofLinks.png" alt="" width="665" height="437" /></a>

After this point it was only a matter of adding my comments to each headline, and voila!  The Week of Links was ready for publishing!
