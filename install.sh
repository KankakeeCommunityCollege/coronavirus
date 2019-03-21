
echo "Creating local Gemfile from Gemfile.txt"

sleep 1

# Create local Gemfile from Gemfile.txt
cp Gemfile.txt Gemfile

echo "running npm install"

sleep .5

echo "NPM will return permission errors if you do not have NVM - https://github.com/creationix/nvm"

sleep 1

# NPM install
npm install

echo "running bundle install"

sleep 1

# Bundle install
bundle install

sleep 1

# Determine OS platform
UNAME=$(uname | tr "[:upper:]" "[:lower:]")
# If Linux, try to determine specific distribution
if [ "$UNAME" == "linux" ]; then
    # linux commands
fi

unset UNAME

sleep 1

echo "Installation Complete!"
