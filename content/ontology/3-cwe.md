---
title: "CWE"
metaTitle: "Inspektre | CWE "
metaDescription: "Common Weakness Enumeration"
---

# What is a CWE
- Common Weakness Enumeration (CWE) is a community developed list / dictionary of software & hardware weaknesses that have security implications.
- It serves as a common language across a plethora of security tools to serve as a baseline for identifying security weaknesses that may potentially exist.
- CWEs help developers and security to understand a specific class or type when performing remediation or hardening.
- More infomation can be [found here](https://cwe.mitre.org/) https://cwe.mitre.org/.

# Instance of CWE
- `CWE-1289` represents a unique weakness that relates to weakness class where payload is received (From user or machines) and is consumed without validation.
- `CWEs` are hireachical i.e. CWE-20 corresponds to improper input validation. Thus logically, `CWE-1289` has a `child-of` relationship with `CWE-20`.

# Knowledge Graphs
- Inspektre Knowledge Graphs treat these relationships as special properties to automaitcally produce more meaningful contexts.
- When code is examined to extract Code Integellicence, Information obtained is automaitcally classified into the relevant CWE hierarchy.
- When Inspektre is used as part of a CI/CD pipeline after SAST / IAST tools generate report, this Information is used to further augment the Knowledge graph.
- Each augmentation step helps Organization OR project with more specific cyber attacks.

# More information
For more information on Code Intelligence, Application Profiling & Knowledge Graphs, Please reach out to us at *contact@inspektre.io*.
