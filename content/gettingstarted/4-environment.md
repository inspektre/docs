---
title: "Environment Variables"
metaTitle: "Inspektre | Environment Variables"
metaDescription: "Environment Variables"
---

# Device Authorization Flow
Inspektre CLI/SDK require a few environment variables to achieve Device Authorization Flow.
This topic describes only the environment variables. The next topics detail more on Device Authorization Flow.

# Device Authorization Flow - Static Values
Static Values listed here are used to enable OAuth2 `Device Authorization Flow`.

<Card>
INSPEKTRE_CLIENT_ID, INSPEKTRE_CLIENT_SECRET
</Card>
A Unique OAuth2 ClientID/Client Secret pair that is created per customer. Additional OAuth2 Client(s) can be created upon request either for a small fee.

<Warning>OAuth2 ClientID must be treated as a secret. We recommend to encrypt these values using tools such as a PAM.</Warning>

# Device Authorization Flow - Dynamic Values.
`INSPEKTRE_TOKEN` is a dynamic value i.e. with expiry. When Authorization is complete, 
<Card>
INSPEKTRE_TOKEN
</Card>

- Inspektre CLI/SDK requires static values to be available as environment variables.
- This is essentially an OAuth2 Refresh Token that expires in 30 days.
- For `CLI Usage`, Do not save this token.
- However, For `Automation` capabilities such as a CI/CD Pipeline, it may be easier to preserve the refresh token.


<Warning>Environment variables are CASE-SENSITIVE. Please ensure that they are capitalized alwys</Warning>

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