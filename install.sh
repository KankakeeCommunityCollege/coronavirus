
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

echo "Removing template’s Github remote to avoid overwriting."

sleep 1

git remote remove origin

echo "Installation Complete!"
