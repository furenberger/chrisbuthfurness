#!/bin/bash

ENVIRONMENT=$1
echo "ENVIRONMENT FTP ${ENVIRONMENT}"

MASTER="MASTER"


echo $USER

# Move to the build folder 
cd /home/travis/build/furenberger/chrisbuthfurness/build

# FTP the files in the build folder to the environment you want
if [ ${ENVIRONMENT} != ${MASTER} ]; then
# RUN THE NON MASTER DEPLOY
echo "RUNNING NOT MASTER"
ftp -invp ${HOST} <<EOF
user ${USER} ${PASSWORD}
cd test
pwd
mput *
bye
EOF

else
# RUN THE MASTER DEPLOY
echo "RUNNING MASTER"
ftp -invp ${HOST} <<EOF
user ${USER} ${PASSWORD}
cd test
pwd
mput *
bye
EOF

fi

# Exit the script
exit 0