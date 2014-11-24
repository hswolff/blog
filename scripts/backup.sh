#!/bin/bash

# Backup images and db
rsync -avzP --exclude '.git' --exclude 'apps' --exclude 'themes' user@host.com:~/path/to/ghost/content/ ~/local/path/to/ghost/content/
