#!/bin/sh

# Find the line link to the project and set the react version
removeLink() {
  # find react in package.json
  sed -i.bak -E "s/\"react\": \"link:(.+)\"/\"react\": \"^16.13.0\"/" package.json && rm package.json.bak
  # When we install we remove the link
  yarn install
  # Confirm result after changing line
  echo "\x1B[42mThe link was correctly removed and packages install again.\x1B[0m";
}

# Ask to user if he wanna remove linked before pushed the branch
promptLink() {
  #Bypass with the flag -f (for "force")
  if [[ $1 && $1 == "-f" ]] ; then
    echo "\x1B[93mForcing to remove the react link\x1B[0m"
    removeLink
  else
    # Otherwise we're getting the prompt result of the user
    while true; do
        # Retrieve the yes or no value from prompt message
        read -p "$(echo "\x1B[96mDo you wanna remove react link ? y/n \x1B[0m")" yn
        case $yn in
            [Yy]* ) removeLink; break;;
            [Nn]* ) echo "\x1B[93mNothing happened\x1B[0m"; break;;
            * ) echo "\x1B[91mPlease answer yes or no.\x1B[0m";;
        esac
    done
  fi
}

# We find in the package if the link already exists
link_already_exists=$(grep '\"react\": \"link:' package.json)
# Test if the link exists and display an error message
if [[ $link_already_exists ]]
then
  echo "\x1B[91mLink has already been set!\x1B[0m"
  echo "\x1B[93mReact was linked to: $link_already_exists\x1B[0m"
  promptLink $1
  exit
fi

# Test if the parameter is missing
if [ -z $1 ]
then
  echo "\x1B[91mYou have to insert the absolute path of your projet to link this library.\x1B[0m"
  echo "\x1B[91mLike: yarn run link /Users/brucewayne/Sites/folder/where/to/link/react-hooks-library\x1B[0m"
  exit
fi

# Find the current path of react-hooks-library
source=$PWD
# Use the absolute path of the destination
target=$1

# Keep source
common_part=$source
# Destination to ride up in the tree like ../../../
back=
while [ "${target#$common_part}" = "${target}" ]; do
  # Find dirname for source
  common_part=$(dirname $common_part)
  # Change file
  back="../${back}"
done

# Parse the path to link
path_to_link=$(sed 's:/:\\/:g' <<< "${back}${target#$common_part/}")

# The string to replace with the path with the new link
node_to_replace="\"react\": \"link:$path_to_link\/node_modules\/react\""

# Find the "react": "^16.13.0" string
# Create a package.json.bak and remove it after
sed -i.bak "1,/\"react\": \"^16.13.0\"/s/\"react\": \"^16.13.0\"/$node_to_replace/" package.json && rm package.json.bak

echo "\x1B[42mWe have linked react-hooks-library to: ${back}${target#$common_part/}\x1B[0m"

yarn install
yarn start --watch
