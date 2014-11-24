#!/bin/bash

# Script to update and reload my ghost installation

# Backup images and db
./backup.sh

# Upload scripts to remote server
rsync -avz --copy-links --exclude 'content/data' --exclude 'content/images' --exclude 'content/apps' --exclude 'node_modules/ghost/node_modules' --exclude '.git' --exclude '.sass-cache' --exclude '.DS_Store' ~/local/path/to/ghost/ user@host.com:~/path/to/ghost/

# Execute reload script remotely
ssh user@host.com 'bash -s' < ~/path/to/ghost/scripts/git_reload.sh
