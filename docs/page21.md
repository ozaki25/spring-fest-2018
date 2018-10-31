# Spring BootでHello Worldのその先へ〜ウェブDBプレスのSpring Boot特集で伝えたかったこと＆伝えきれなかったこと～

- 藤野 真聡(ソニーネットワークコミュニケーションズ株式会社)

## Web+DB Pressに寄稿した

- 2018/8号
- 内容
    - SpringBootの概要
    - HelloWorldの一歩先
- 伝えきれなかったこと
    - 変化に強いWebアプリの作り方
    - 寄稿したのはプロトタイプレベルだった
- 今回のない湯
    - ミドルウェアやDBと連携したアプリ開発
    - マイクロサービス化

## バージョン番号の表示

- qiitaのAPIを叩くアプリ
- qiitaのAPIのバージョンを返すエンドポイントを作る?
- pom.xmlに定義しているバージョン情報に紐づくようapplication.propertiesに定義しておく
- それをJavaから呼ぶ

## モジュール分割

- プロジェクトフォルダ内に子プロジェクトのフォルダを作る
    - 親プロジェクトも各子プロジェクトもpom.xmlを持つ

## ActiveMQ

- JMS(Java Messaging Service)を実装したメッセージングミドルウェア
- メッセージをqueueで非同期に処理する

## MongoDB

- ドキュメント指向のDB

