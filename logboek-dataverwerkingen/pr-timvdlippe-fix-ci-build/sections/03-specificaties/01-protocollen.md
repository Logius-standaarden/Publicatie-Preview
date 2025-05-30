# Protocollen

De protocollen die worden gebruikt tussen applicatie en logboek en voor het uitvoeren van transacties tussen applicaties worden niet voorgeschreven in de standaard. Dit biedt de vrijheid om de standaard toe te voegen aan vrijwel iedere softwareoplossing.

Het is ***AANBEVOLEN*** om [het OpenTelemetry Protocol (OTLP)](https://opentelemetry.io/docs/specs/otlp/) te gebruiken in de interactie tussen Applicatie en Logboek.

> [OpenTelemetry](https://github.com/open-telemetry) is een standaard en open source framework voor het beheren, genereren, verzamelen en exporteren van telemetriegegevens. Door het gebruik van deze open standaard kunnen leverancierspecifieke integraties voorkomen worden. OpenTelemetry is a [CNCF incubating project](https://www.cncf.io/projects/).

Als gebruik wordt gemaakt van  HTTP/1.1 [[RFC9112]] of HTTP/2 [[RFC9113]] voor het uitvoeren van dataverwerkingen in meerdere applicaties ***MOET*** gebruik worden gemaakt van de [[[trace-context-1]]] specificatie voor het uitwisselen van metagegevens over {{Traces}}.

