ð°ð· [íêµ­ì´](./README-KOREAN.md) ðºð¸ [English](./README.md)

# åãã«
`app-status-bot`ã¯`ã¢ããªã®å¯©æ»ç¶æ`ã`Discord`ã§ç¥ããã¦ããããããã§ããã¢ããªã®å¯©æ»ç¶æããã¼ã ã¡ã³ãã¼ã¨å±æãããã¨ãã§ãã¾ããGitHub-Actionsã¨GitHub-Gistãä½¿ããfastlaneã®[Spaceship](https://github.com/fastlane/fastlane/tree/master/spaceship)ã©ã¤ãã©ãªãç¨ãã¦ã¾ãããå©ç¨ã®æã¯ãã®ãªãã¸ããªããã `Fork`ããã°ãªãã±ã¼ã§ãã


# æ©è½
- Appstore Connect APIãä½¿ã£ã¦ã¢ããªã®æå ±ãèª­ã¿è¾¼ã¿ã¾ãã
- ã¢ããªã®å¯©æ»ç¶æãDiscordã«å±æããã¾ãã


# ä½¿ãæ¹

## 1. APIã®çºè¡
`Key ID`ãå¾ãããã«[App Store Connect](https://appstoreconnect.apple.com/)ã«æ¥ç¶ãã¾ãã

1. `ã¦ã¼ã¶ã¨ã¢ã¯ã»ã¹`ãã¯ãªãã¯ãã `ã­ã¼`ã®ã¿ããã¯ãªãã¯ãã¾ãã 
2.  æ°ããAPIã­ã¼ãçºè¡ãã¾ãã
3. `ã­ã¼ ID` ãã³ãã¼ãã¦ããã¾ãã
4. `Issuer ID` ãã³ãã¼ãã¦ããã¾ãã
5.  ä½ããã `API Key file (.p8)` ããã¦ã³ã­ã¼ããã¾ãã
  > â ï¸ ãã¼ã¸ãåèª­ã¿è¾¼ã¿ããã¨äºåº¦ã¨ãã¦ã³ã­ã¼ããåºæ¥ãªããªãã®ã§ãæ³¨æãã ãã! 
6. ã¢ããªã®`bundle ID`ãã³ãã¼ãã¦ããã¾ãã
7. `Discord Webhook url`ãçºè¡ãã¾ãã 
8. `GitHub token`ãçºè¡ãã¾ãã
9. ã¢ããªã®æå ±ãä¿å­ãã`Gist url`ãã³ãã¼ãã¦ããã¾ãã
10. ãã®ãªãã¸ããªã'Fork'ãã¾ãã
11. ãªãã¸ããªã®`Settings`ã¡ãã¥ã¼ãã`Secrets`ãè¨­å®ãã¾ãã
12. ãªãã¸ããªã®`Actions`ã¡ãã¥ã¼ããworkflowãåããã¾ãã


## 2. Secretsã®è¨­å®

- ãªãã¸ããªã® Settings - Secrets - Actions - New Repository Secret ã§åã«ã³ãã¼ãã¦ãããé ç®ãå¥åãã¾ãã

### ã³ãã¼ãã¦ãããé ç®ã®å¥å

> PRIVATE_KEY: ãã¦ã³ã­ã¼ããã `Key file(.p8)`ã®ä¸­èº«ãå¨é¨ã³ãããã¾ãã  
> KEY_ID : `ã­ã¼ ID`ãå¥åãã¾ãã  
> ISSUER_ID : `Issuer ID`ãå¥åãã¾ãã   
> BUNDLE_ID : ç¶æã®ç¢ºèªãããã¢ããªã® `bundle ID`ãå¥åãã¾ãã (ï¼åä»¥ä¸ã®ã¢ããªã®å ´åã¯ã,ããä½¿ã£ã¦ãã ããã)  
> DISCORD_WEBHOOK :  `Discord Webhook url`ãå¥åãã¾ãã  
> GH_TOKEN: `GitHub token`ãå¥åãã¾ãã (gistsã¨repoã«ã¢ã¯ã»ã¹æ¨©éãå¿è¦ã§ãã)  
> GIST_ID: Gistãã¡ã¤ã«ãä½æãã urlã«å¥ã£ã¦ãã`ã­ã¼`ãã³ãã¼ãã¦å¥åãã¾ãã  
  - ä¾) https://gist.github.com/froggydisk/[GIST_ID]

## 3. ã¤ã³ã¿ã¼ãã«ã®è¨­å®

- [fetch.yml](./.github/workflows/fetch.yml) 

`fetch.yml` ã§è¨èªè¨­å®ãã¹ã±ã¸ã¥ã¼ã«ã®è¨­å®ãå¯è½ã§ããã¤ã³ã¿ã¼ãã«ã¯åºæ¬ `1æé`ã«ãªã£ã¦ã¾ãã


# çµæ
<img src="https://github.com/froggydisk/froggydisk.github.io/blob/master/assets/img/discord-noti.png?raw=true" width="600">  


# åç§

[Fernando](https://fernando.kr/ios/2020-11-08-ios-appstore-status-bot/)ãã­ã°ãä¸»ã«åèãã¾ããã
- [appstore-status-bot](https://github.com/techinpark/appstore-status-bot)
- [Appstore Connect API](https://developer.apple.com/documentation/appstoreconnectapi)  
- [fastlane Spaceship](https://github.com/fastlane/fastlane/tree/master/spaceship)  
- [GitHub Actions](https://docs.github.com/en/actions)  
- [GitHub Gist](https://gist.github.com)  
- [Discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)



# ã³ã³ããªãã¥ã¼ã·ã§ã³ 
- ãªã¼ãã³ã½ã¼ã¹ãªã®ã§PRã¯ãã¤ã§ãå¤§æ­è¿ã§ãã
