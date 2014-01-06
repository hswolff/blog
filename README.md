# blog.harrywolff.com

We're ghostbusters over here.  We're running with [Ghost](http://ghost.org/).


## Current deploy process

1. Make edits, commit, push to public repo
1. Use local rsync alias to sync content up to server (excluding content directory).
  `alias syncghost="rsync -avz --copy-links --exclude 'content' --exclude '.git' --exclude '.sass-cache' ~/local/ghost/ user@remote.server.com:~/path/to/remote/ghost/"`
1. If there are changes to anything in the content folder or config.js file you must manually upload it.
1. If there were changes that require a server restart you must login in to server and manually restart it.

## Running Application

`GHOST_CONFIG="$(pwd)/config.js" NODE_ENV=production node index.js`

## Backup

`alias backupghost="rsync -avz --exclude '.git' --exclude '.sass-cache' user@remote.server.com:~/path/to/remote/ghost/content/data/ ~/local/ghost/content/data/"`