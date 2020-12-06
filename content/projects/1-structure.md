---
title: "Structure"
metaTitle: "Inspektre | Project Structure"
metaDescription: "Inspektre Project Structure"
---

# Project
Project(s) on-boarded on inspektre are enhanced to create meaningful knowledge-graphs and help providing contextually relevant information. Below graph shows a quick high-level view on how inspektre graphs look like.

# Structure
Below is a representative structure of how a project is analysed to produce security score.

```mermaid
graph TD
    A[Project] -->|CI/CD Pipeline| B(Inspektre API)
    B --> C{Configurations}
    C -->|Metadata| D[Code Intel]
    D --> E(Scans)
    C -->|SAST| F[SARIF ]
    C -->|ASVS| AS[VERIFICATIONS]
    AS --> WP(Weakness Patterns)
    C -->|Detect Attacks| G[Attack Patterns]
    WP --> |Detect Attacks| G
    AS --> |Detect Attacks| G
    D --> |Detect Attacks| G
    F --> |Detect Attacks| G
    G --> H(Likelihood of Attacks)
    G --> I(Severity of Attacks)
    G --> CONF(Confide)
    H --> J(Project Security Score)
    I --> J
    F --> J
    E --> J
    J --> K(Organization Security Score)
```

```mermaid
pie
    title Security Goals
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
```