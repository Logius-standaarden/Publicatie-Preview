#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

cd $CURRENT_DIRECTORY

# Installeer benodigde dependencies
npm ci

# Start the server as a background process
node src/server.js &
SERVER_PID=$!

mkdir -p generated/
rm generated/openapi.json 2> /dev/null

# Haal de gegenereerde openapi.json op. Omdat de server nog
# moet opstarten slapen we 100 ms tussen elke call, totdat we
# een succesvolle response terug krijgen.
CURL_EXIT_CODE=1
while [ $CURL_EXIT_CODE -ne 0 ]
do
    sleep 0.1
    # Check if the server is running. If it has crashed, we should
    # stop checking and exit the script
    ps --pid $SERVER_PID 1> /dev/null
    PROCESS_EXISTS=$(echo $?)
    if [ $PROCESS_EXISTS -ne 0 ]
    then
        echo "Server has crashed. See above terminal output for more information"
        exit 1
    fi
    curl --silent http://localhost:8080/openapi.json > generated/openapi.json
    CURL_EXIT_CODE=$(echo $?)
done

# Silently kill the server background process
kill $SERVER_PID
wait $SERVER_PID 2>/dev/null

../run-spectral-linter.sh $(realpath generated/openapi.json)
