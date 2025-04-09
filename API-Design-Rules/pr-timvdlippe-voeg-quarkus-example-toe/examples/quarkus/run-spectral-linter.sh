#!/bin/sh
CURRENT_DIRECTORY=$(dirname "$0")
$CURRENT_DIRECTORY/mvnw package

spectral lint -r $CURRENT_DIRECTORY/../../linter/spectral.yml $CURRENT_DIRECTORY/target/generated/openapi/openapi.json
