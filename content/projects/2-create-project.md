---
title: "Creating a new project"
metaTitle: "Inspektre | Create"
metaDescription: "Inspektre Create Project"
---

# CI/CD Workflow
Inspektre can work in any CI/CD workflows. 

1. Required dependencies are installed.
2. Deepcode (Synk Deepcode - deepcode.ai) and CodeIntel (Microsoft AppInspector) are run.
3. Finally, Inspektre commands is run as below.

# Command:
`inspektre inspect -p @inspektre/inspektre -f $GITHUB_WORKSPACE/AppInspectorResults.json --sarif output.sarif --deepcode`

- The `-p <project_name>` here represents a project name and is required.
- The `-f <file_path>` is to letting Inspektre know where Microsoft AppInspector results are present.
- The `--sarif` mode specified whether

# Default Threat Level
The default threat level on Inspektre is L1. This value is used for both Attack Detection and ASVS. `--threatLevel` Flag needs to be used to alter this (Instance: `inspektre inspect --threatLevel L2`). However, we recommend remediation or supressing all attacks with the default level prior to altering threatLevel in order to maintain a methodical approach.

# Github CI/CD Workflow
```name: "Inspektre Scan"
on: push
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Perform DeepCode analysis
        uses: georgismitev/deepcode-code-scanning-analysis@master
        env:
          DEEPCODE_TOKEN: ${{secrets.DEEPCODE_TOKEN}}
      - name: codeintel
        uses: inspektre/codeintel-gh@v1
      - name: setup-node
        uses: actions/setup-node@v2-beta
        with:
          node-version: '14'
      - name: install inspektre
        env:
          NPM_CONFIG_PREFIX: "~/.npm-global"
        run: |
          export PATH="$(yarn global bin):$PATH"
          yarn global add @inspektre/inspektre
      - name: inspektre inspect
        env:
          INSPEKTRE_TOKEN: ${{secrets.INSPEKTRE_TOKEN}}
          INSPEKTRE_CLIENT_ID: ${{secrets.INSPEKTRE_CLIENT_ID}}
          INSPEKTRE_CLIENT_SECRET: ${{secrets.INSPEKTRE_CLIENT_SECRET}}
        run: |
          ~/.npm-global/bin/inspektre reauthorize
          ~/.npm-global/bin/inspektre inspect -p @inspektre/inspektre -f $GITHUB_WORKSPACE/AppInspectorResults.json --sarif output.sarif --deepcode
```