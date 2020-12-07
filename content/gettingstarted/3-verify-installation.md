---
title: "Initialization"
metaTitle: "Inspektre | Initialization"
metaDescription: "Initialization"
---

# Version

To check the version of `inspektre SDK`, type `inspektre -V` in a terminal.

# Initialization

Type`inspektre init` in a terminal to start initialization. Initialization option creates necessary configuration files/directories under the current user's context and must be used on trusted compute systems only.

<Info>
For common use-cases such as a CI/CD pipeline, do not use initialization. Instead configure and use required secrets.
</Info>

# Initialization

Type`inspektre init` in a terminal to start initialization. Initialization option creates necessary configuration files/directories under the current user's context and must be used on trusted compute systems only.

<Info>
For common use-cases such as a CI/CD pipeline, do not use initialization. Instead configure and use required secrets.
</Info>

# Verify Initialization

Inspektre create a configuration file that would later hold session key. Please find the list of locations by Operating Systems.
- Micosoft Windows: `C:\Users\<user>\.config\inspektre\.env`
- Mac OS X: `/Users/<user>/.config/inspektre/.env`
- ChromeOS & Linux (Debian/Fedora/): `/home/<user>/.config/inspektre/.env`