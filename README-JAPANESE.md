[한국어로 보기](./README-KOREAN.md)  
[English Document](./README.md)

# 初めに
`app-status-bot`はアプリの審査状態を`Discord`で知らせてくれるボットです。アプリの審査状態をチームメンバーと共有することができます。   GitHub-ActionsとGitHub-Gistを使い、 fastlaneの[Spaceship](https://github.com/fastlane/fastlane/tree/master/spaceship) ライブラリを用いてます。ご利用の時はこのリポジトリをただ `Fork` すればオッケーです。


# 機能
- AppStore Connect APIを使ってアプリの情報を読み込みます。
- アプリの審査状態がDiscordに共有されます。


# 使い方

## 1. APIの発行
`Key ID` を得るために [App Store Connect](https://appstoreconnect.apple.com/)　に接続します。

1. `ユーザとアクセス`をクリックし、 `キー`のタブをクリックします。 
2.  新しいAPIキーを発行します。
3. `キー ID` をコピーしておきます。
4. `Issuer ID` もコピーしておきます。
5.  作られた `API Key file (.p8)` をダウンロードします。
  > ⚠️ ページを再読み込みすると二度とダウンロードが出来なくなるのでご注意ください! 
6. アプリの｀bundle ID`をコピーしておきます。
7. DiscordのWebhook urlを発行します。 
8. GitHubのトークンを発行します。
9. アプリの情報を保存するGistのurlをコピーしておきます。
10. このリポジトリを `Fork` します。
11. リポジトリの`Settings`メニューから`Secrets`を設定します。
12. リポジトリの`Actions`メニューからworkflowを動かします。


## 2. `Secrets`の設定

- リポジトリの Settings - Secrets - Actions - New Repository Secret で先にコピーしておいた項目を入力します。

### コピーしておいた項目の入力

> PRIVATE_KEY: ダウンロードした `Key file(.p8)`の中身を全部コピペします。  
> KEY_ID : `キー ID`を入力します。  
> ISSUER_ID : `Issuer ID`を入力します。   
> BUNDLE_ID : 状態の確認したいアプリの `bundle ID`を入力します。 (２個以上のアプリの場合は「,」を使ってください。)  
> DISCORD_WEBHOOK :  DiscordのWebhook urlを入力します。  
> GH_TOKEN: GitHubのトークンを入力します。 (`gists`と `repo` にアクセス権限が必要です。)  
> GIST_ID: Gistファイルを作成し、 urlに存在するキーをコピーして入力します。  
  - 例) https://gist.github.com/froggydisk/[GIST_ID]

## 3. インターバル設定

- [fetch.yml](./.github/workflows/fetch.yml) 

`fetch.yml` で言語設定、スケジュールの設定が可能です。インターバルは基本 `1時間`になってます。


# 参照

[Fernando](https://fernando.kr/ios/2020-11-08-ios-appstore-status-bot/)を主に参考しました。
- [appstore-status-bot](https://github.com/techinpark/appstore-status-bot)
- [Appstore Connect API](https://developer.apple.com/documentation/appstoreconnectapi)  
- [fastlane Spaceship](https://github.com/fastlane/fastlane/tree/master/spaceship)  
- [GitHub Actions](https://docs.github.com/en/actions)  
- [GitHub Gist](https://gist.github.com)  
- [Discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)



# コントリビューション 
- オープンソースなのでPRはいつでも大歓迎です。
