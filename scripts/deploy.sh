#!/bin/bash

echo "ENVIRONMENT FTP $1"

echo $USER

# Move to the build folder 
cd /home/travis/build/furenberger/chrisbuthfurness/build

# FTP the files in the build folder to the environment you want
ftp -invp ${HOST} <<EOF
user ${USER} ${PASSWORD}
cd test
pwd
mput *
bye
EOF

# Exit the script
exit 0