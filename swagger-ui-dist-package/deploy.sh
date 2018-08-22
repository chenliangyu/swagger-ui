# Deploy `swagger-ui-dist` to npm.

# Parameter Expansion: http://stackoverflow.com/questions/6393551/what-is-the-meaning-of-0-in-a-bash-script
cd "${0%/*}"

# Get UI version
UI_VERSION=$(node -p "require('../package.json').version")

# Copy UI's dist files to our directory
cp ../dist/* .

