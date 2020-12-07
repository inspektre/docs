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
`INSPEKTRE_TOKEN` `INSPEKTRE_ACCESS_TOKEN`
<Card>
INSPEKTRE_TOKEN
</Card>
INSPEKTRE_TOKEN is a dynamic value i.e. with expiry. When Authorization is complete, 
- Inspektre CLI/SDK requires static values to be available as environment variables.
- This is essentially an OAuth2 Refresh Token that expires in 30 days.
- For `CLI Usage`, Do not save this token.
- However, For `Automation` capabilities such as a CI/CD Pipeline, it may be easier to preserve the refresh token.


<Warning>Environment variables are CASE-SENSITIVE. Please ensure that they are capitalized alwys</Warning>

<Card>
INSPEKTRE_ACCESS_TOKEN
</Card>
INSPEKTRE_ACCESS_TOKEN is a short-life JWT that is generated when `inspektre authorize` or `inspektre reauthorize` succeed.

<Warning>
INSPEKTRE_ACCESS_TOKEN contains sensitive authentication & authorization content and  must be treated as a secret.
</Warning>