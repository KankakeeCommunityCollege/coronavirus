#!/bin/bash/

echo "" && cowsay "Running npm install" && echo ""

sleep .5

echo "" && echo "NPM will return permission errors if you do not have NVM - https://github.com/creationix/nvm" && echo ""

sleep 1

# NPM install
npm install

echo "" && cowsay "Running bundle install" && echo ""

sleep 1

# Bundle install
bundle install

sleep 1

uname=$(uname)
# If your on a Linux machine do...
if [ "$uname" = "Linux" ]
  then
    # fix for node.js watch ENOSPC errors
    # increases the max number of system watchers on linux
    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
    echo "" && echo "[LINUX]: Increase max watchers on Linux platforms" && echo ""
    sleep 1
  else
    echo "" && echo "[Skipping](optional): Increase max watchers on Linux platforms. Your system: $uname" && echo ""
fi
unset UNAME

sleep 1

echo "" && echo "======== DONE ========" && echo "" && echo "Installation Complete!" && echo "" && echo "======================"

echo "" && cowsay "That means finished" && echo ""
