#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

cd $CURRENT_DIRECTORY

./mvnw --no-transfer-progress package

spectral lint -r ../../linter/spectral.yml target/generated/openapi/openapi.json
