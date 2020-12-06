---
title: "Structure"
metaTitle: "Inspektre | Project Structure"
metaDescription: "Inspektre Project Structure"
---

# Project
Project(s) on-boarded on inspektre are enhanced to create meaningful knowledge-graphs and help providing contextually relevant information. Below graph shows a quick high-level view on how inspektre graphs look like.

# Structure
Below is an end-to-end data-flow of data from CI/CD to what is visible on a dashboard.
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
    G --> DASH(Dasboard)
    DASH --> CONF(Confidentiality)
    DASH --> INT(Integrity)
    DASH --> AVAIL(Availability)
    DASH --> AUTHZ(Authorization)
    DASH --> ACL(Access Control)
    H --> J(Project Security Score)
    I --> J
    F --> J
    E --> J
    J --> K(Organization Security Score)
    J --> DASH
    K --> DASH
    AS --> DASH
    G --> DASH
```

Further, 
```mermaid
pie
    title Security Goals
    "Confidentiality" : 42%
    "Integrity" : 50%
    "Availability" : 10%
    "Authorization" :  5%
    "Access Control": 7%
```