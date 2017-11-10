#!/bin/bash

echo $USER

# Move to the build folder 
cd /home/travis/build/furenberger/chrisbuthfurness/build

# FTP the files in the build folder to the environment you want
ftp -inv $HOST <<EOF
user $USER $PASSWORD
cd test
pwd
ls
mput *
ls
bye
EOF

# Exit the script
exit 0