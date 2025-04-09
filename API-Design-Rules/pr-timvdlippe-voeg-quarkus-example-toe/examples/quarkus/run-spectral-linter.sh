#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")

cd $CURRENT_DIRECTORY

./mvnw package

spectral lint -r ../../linter/spectral.yml target/generated/openapi/openapi.json
