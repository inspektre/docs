---
title: "SDK"
metaTitle: "Inspektre | SDK "
metaDescription: "Inspektre SDK"
---

# Inspektre SDK 
Inspektre SDK is a monorepo to be used as a Javascript client & CLI to interact with Inspektre Knowledge Graphs.

# Code Quality
![CodeQL](https://github.com/inspektre/inspektre/workflows/CodeQL/badge.svg?branch=main)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/inspektre/inspektre.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/inspektre/inspektre/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/inspektre/inspektre.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/inspektre/inspektre/context:javascript)

# Purpose
The utility is helpful in performing the following:
1. Query Inspektre Security Graphs.
2. Manage projects on Inspektre Platform.
3. Modify user roles or permissions.
4. Supress attack patterns or weaknesses or verifications.

`inspektre sdk` is a graphql client that queries to `api.inspektre.io` and query the `inspektre security graphs`. 


# Usage
```
Usage: inspektre [options] [command]

  _                      _    _                           _ _
 (_)_ __  ___ _ __   ___| | _| |_ _ __ ___            ___| (_)
 | | '_ \/ __| '_ \ / _ \ |/ / __| '__/ _ \  _____   / __| | |
 | | | | \__ \ |_) |  __/   <| |_| | |  __/ |_____| | (__| | |
 |_|_| |_|___/ .__/ \___|_|\_\\__|_|  \___|          \___|_|_|
             |_|                                               

Options:
  -V, --version          output the version number
  -h, --help             display help for command

Commands:
  version                Display the version of Inspektre-CLI in use.
  init [options]         Initialize Configuration store in the user's home directory
  authorize [options]    Authorize a Device to interact with Inspektre API
  reauthorize [options]  Reauthorize a Device to interact with Inspektre API
  projects [options]     Query for projects created on Inspektre
  attacks [options]      Query for general attack patterns on Inspektre by Likelihood, Severity, Tag OR Skill Level of a malicious actor
  weakness [options]     Query for weaknesses recorded on Inspektre by tags.
```

# Authorize
Inspektre CLI command `authorize` is  *Device Authorization Grant* as specified in OAuth 2.0 RFC 8628 located [here](https://tools.ietf.org/html/rfc8628).
- To Authorize a device, run `inspektre authorize`.
- For verbose mode, run `inspektre authorize -v`.


# Reauthorize
Reauthroize command is used to refresh device authorization and extending the device authorization.
- To reauthorize, run `inspektre reauthorize`.
- For Verbose, run `inspektre reauthorize -v`.

# Environment Variables
- In order to use Inspektre as a `cli`, Please ensure that an environment variable `CLIENT_ID` & `CLIENT_SECRET`is set.
- You will be able find the `CLIENT_ID` under your account at `https://app.inspektre.io/`.


# Attack patterns
- Inspektre Knowledge Graphs use information from a repository AND/OR project configuration to automatically predict attack patterns.

- Each Attack Pattern has a Typical Severity as well as a likelihood associated. This makes it ideal for a Developer OR 
Application Security engineer to search for attack patterns based on the organization's or a project's sensitivity.

# Typical Severity Levels
- Critical
- High
- Medium
- Low
- Very Low

# Likelihood of Attack Levels
- High
- Low
- Medium