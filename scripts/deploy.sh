#!/bin/bash

echo $USER

# Move to the build folder
ls 
cd /home/travis/build/furenberger/chrisbuthfurness/build
ls


# FTP the files in the build folder to the environment you want
# ftp -inv $HOST <<EOF
# user $USER $PASSWORD
# cd test
# pwd
# ls
# mput *
# ls
# bye
# EOF


# Exit the script
exit 0