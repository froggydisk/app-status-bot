[English Document](./README.md)
[日本語で読む](./README-JAPANESE.md)

# 소개 
`app-status-bot` 은 앱스토어에 올라가 있는 나의 앱 심사 상태를 가져와 디스코드로 전송해주는 알림봇 입니다. 접근 권한이 없는 팀원들에게 앱의 심사 상태를 공유하고 싶을때 사용하시면 되겠습니다. `GitHub-Actions`와 `GitHub-Gist`를 사용하였으며 fastlane 의 [Spaceship](https://github.com/fastlane/fastlane/tree/master/spaceship) 라이브러리의 도움을 받았습니다. 사용하시려면 해당 레포지토리를 `Fork` 하시면 됩니다.  


# 기능
- 앱스토어 커넥트 API를 사용하여 앱의 심사 정보를 가져옵니다.
- 앱의 심사 상태가 바뀌면 디스코드를 통해 다른 사람과 공유할 수 있습니다.


# 사용법

## 1. API를 호출하기 위해서는 토큰을 먼저 생성합니다. 
`Key ID` 를 얻기 위해서는 먼저 [App Store Connect](https://appstoreconnect.apple.com/) 에 접속합니다.

1. `사용자 및 액세스`를 선택하고, `키` 탭을 선택합니다. 
2.  새로운 API키를 생성합니다.
3. `키 ID` 를 선택해서 복사해 둡니다.
4. `Issuer ID` 도 선택해서 복사를 해 둡니다.
5.  생성된 `API Key file (.p8)` 을 다운로드 합니다.
  > ⚠️ 페이지를 새로고침하면 다시 다운로드 할 수 없으니 주의해주세요! 
6. 원하는 앱의 `bundle ID`를 찾아서 복사해 둡니다.
7. 디스코드 웹훅 url을 발급받습니다.
8. 깃허브 토큰을 발급받습니다.
9. 앱 정보를 저장할 Gist의 url을 복사해 둡니다.
10. 해당 레포지토리를 Fork 합니다.
11. `Settings` 메뉴에서 `Secrets`를 설정합니다.
12. `Actions` 메뉴에서 workflow를 활성화합니다. 


## 2. `Secrets` 설정하기

- 깃헙 레포 페이지에서 Settings - Secrets - Actions - New Repository Secret 로 들어가서 위에서 복사한 정보들을 세팅해줍니다.

### 입력해야할 것들

> PRIVATE_KEY: 다운로드한 `Key file(.p8)`을 텍스트로 열어서 복사한후 넣어주시면 됩니다.
> KEY_ID : `키 ID`를 이곳에 입력합니다.  
> ISSUER_ID : `Issuer ID`를 이곳에 입력합니다.   
> BUNDLE_ID : 상태를 확인하고 싶은 앱의 `bundle ID` 을 입력해줍니다. (콤마로 구분하시면 2개이상의 앱도 가능합니다.)  
> DISCORD_WEBHOOK :  디스코드 웹훅 url을 넣어줍니다.  
> GH_TOKEN: 깃허브 토큰을 넣어줍니다 (`gists` 와 `repo` 접근 권한이 필요합니다 )  
> GIST_ID: Gist파일을 생성하고 url에 존재하는 키값을 복사해서 넣어줍니다.  
  - 예) https://gist.github.com/froggydisk/[GIST_ID]

## 3. 탐색주기 설정

- [fetch.yml](./.github/workflows/fetch.yml) 

`fetch.yml` 파일 내부에서 언어 설정 및 스케줄 시간을 설정하실 수 있습니다. 기본값은 `1시간` 단위로 되어있습니다.


# 참조

[Fernando](https://fernando.kr/ios/2020-11-08-ios-appstore-status-bot/)님 블로그에서 대부분을 참고하였습니다. 
- [appstore-status-bot](https://github.com/techinpark/appstore-status-bot)
- [Appstore Connect API](https://developer.apple.com/documentation/appstoreconnectapi)  
- [fastlane Spaceship](https://github.com/fastlane/fastlane/tree/master/spaceship)  
- [GitHub Actions](https://docs.github.com/en/actions)  
- [GitHub Gist](https://gist.github.com)  
- [Discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)


# 기여
- 오픈소스이므로 모든 PR은 환영합니다.
