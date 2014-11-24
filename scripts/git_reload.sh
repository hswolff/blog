#!/bin/bash

# Script reload my ghost installation


cd ~/path/to/ghost/

~/path/to/bin/npm install --production && ~/path/to/bin/npm update --production

cd ~/path/to/

./bin/stop

./bin/start
