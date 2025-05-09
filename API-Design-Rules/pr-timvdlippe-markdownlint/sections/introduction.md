# Introduction

## Goal

More and more governmental organizations offer REST APIs (henceforth abbreviated as APIs), in addition to existing interfaces like SOAP and WFS. These APIs aim to be developer-friendly and easy to implement. While this is a commendable aim, it does not shield a developer from a steep learning curve getting to know every new API, in particular when every individual API is designed using different patterns and conventions.

This document aims to describe a widely applicable set of design rules for the unambiguous provisioning of REST APIs. The primary goal is to offer guidance for organizations designing new APIs, with the purpose of increasing developer experience (DX) and interoperability between APIs. Hopefully, many organizations will adopt these design rules in their corporate API strategies and provide feedback about exceptions and additions to subsequently improve these design rules.

## Status

This version of the design rules has been submitted to Forum Standaardisatie for inclusion on the Comply or Explain list of mandatory standards in the Dutch Public Sector. This document originates from the document [API Strategie voor de Nederlandse Overheid](https://docs.geostandaarden.nl/api/vv-hr-API-Strategie-20190715/), which was recently split into separate sub-documents.

## Authors

Despite the fact that two authors are mentioned in the list of authors, this document is the result of a collaborative effort by the members of the *API Design Rules Working Group*.

## Reading Guide

This document is part of the *Nederlandse API Strategie*.

The Nederlandse API Strategie consists of [a set of distinct documents](https://www.geonovum.nl/themas/kennisplatform-apis#APIStrategie).

| Status           | Description & Link                                           |
| ---------------- | ------------------------------------------------------------ |
| Informative      | [Inleiding NL API Strategie](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Inleiding/) |
| Informative      | [Architectuur NL API Strategie](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Architectuur/) |
| Informative      | [Gebruikerswensen NL API Strategie](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Gebruikerswensen/) |
| Normative        | [API Design Rules (ADR v2.0)](https://gitdocumentatie.logius.nl/publicatie/api/adr/2.0/) |
| Normative        | [Open API Specification (OAS 3.0)](https://spec.openapis.org/oas/v3.0.1.html) |
| Normative        | [NL GOV OAuth profiel](https://gitdocumentatie.logius.nl/publicatie/api/oauth/) |
| Normative        | [Digikoppeling REST API koppelvlak specificatie](https://gitdocumentatie.logius.nl/publicatie/dk/restapi/) |
| Normative module | [GEO module v1.0](https://gitdocumentatie.logius.nl/publicatie/api/mod-geo/1.0.2/) |
| Normative module | [Transport Security module v1.0](https://gitdocumentatie.logius.nl/publicatie/api/mod-ts/1.0.2/) |

Before reading this document it is advised to gain knowledge of the informative documents, in particular the [Architecture](https://geonovum.github.io/KP-APIs/API-strategie-algemeen/Architectuur/).

An overview of all current documents is available in this Dutch infographic:
<figure>
  <object data="https://geonovum.github.io/KP-APIs/media/API_infographic.svg" type="image/svg+xml" id="infographic" title="NL API Strategie Infographic"></object>
  <figcaption>NL API Strategie Infographic</figcaption>
</figure>

## Extensions

<aside class="note">
In addition to this (normative) document, separate modules are being written to provide a set of extensions. These modules are all separate documents and exists in a <a href="https://geonovum.github.io/KP-APIs/">latest editor's draft</a> (<i>Werkversie</i> in Dutch). The latest editor's draft is actively being worked on and can be found on <a href="https://github.com/Geonovum/KP-APIs">GitHub</a>. It contains the most recent changes.
</aside>
