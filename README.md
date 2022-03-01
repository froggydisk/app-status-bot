[한국어로 보기](./README-KOREAN.md)  
[日本語で読む](./README-JAPANESE.md)

# Introduction
This is a simple bot that fetches your `app status` directly from Appstore Connect and post changes on `Discord` by using GitHub-Actions and GitHub-Gist, with the help of fastlane [Spaceship](https://github.com/fastlane/fastlane/tree/master/spaceship).
Just `FORK` this repository for easy use.


# Features
- Fetch app status using Appstore Connect API 
- Share your app status to your team member on Discord

# Usage

## 1. Generating Tokens for API Requests 
To get your Key ID, copy it from App Store Connect by logging in to [App Store Connect](https://appstoreconnect.apple.com/), then: 

1. Select Users and Access, then select the API Keys tab. 
2. Generate API Keys (only for main account)
3. Click Copy Key ID and paste it. 
4. Click Copy Issuer ID and paste it.
5. Download the newly created API Key file (.p8)
  > ⚠️ This file cannot be downloaded again after the page has been refreshed

6. Find the bundle ID of your app and paste it. 
7. Generate Discord Webhook url. 
8. Generate GitHub token.
9. Get your Gist url.
10. Fork this repository.
11. Input Secrets in `Settings` tab.
12. Enable the workflow in `Actions` tab.

## 2. Setting Secrets with your keys.

- Go to Settings - Secrets - Actions - New Repository Secret
- Please register one by one.  

### Secret Values 

> PRIVATE_KEY: Input raw data of `API Key file (.p8)`   
> KEY_ID : Input Appstore Connect `Key ID`  
> ISSUER_ID : Input Appstore connect `Issuer ID`   
> BUNDLE_ID : Input your `bundle ID` of application. You can input multiple bundle IDs with comma.   
> DISCORD_WEBHOOK :  Input your `Discord Webhook url`  
> GH_TOKEN: Input your `GitHub token`, (allow access for "gists" and "repo").   
> GIST_ID: Input portion from your `Gist url`:
  - e.g. https://gist.github.com/froggydisk/[GIST_ID]


## 3. Configure fetch timing or language

- [fetch.yml](./.github/workflows/fetch.yml) 

In `fetch.yml` file, you can change langauge and fetch schedule. The default time cycle is 1 hour. 


# References

mainly from Fernando's blog
- [appstore-status-bot](https://github.com/techinpark/appstore-status-bot)
- [Appstore Connect API](https://developer.apple.com/documentation/appstoreconnectapi)  
- [fastlane Spaceship](https://github.com/fastlane/fastlane/tree/master/spaceship)  
- [GitHub Actions](https://docs.github.com/en/actions)  
- [GitHub Gist](https://gist.github.com)  
- [Discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)


# Contribution 
- Feel free to contribution for this project. 
