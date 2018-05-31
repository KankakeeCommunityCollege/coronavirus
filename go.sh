# Create local Gemfile from Gemfile.txt
cp Gemfile.txt Gemfile

echo "Creating local Gemfile from Gemfile.txt"

# NPM install
npm install

echo "running npm isntall"

# Bundle install
bundle install

echo "running bundle install"
