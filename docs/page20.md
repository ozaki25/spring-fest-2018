# Spring Data RESTとSpring Cloud Contract

- ⼩川 岳史/⼭﨑 ⼤(株式会社タグバンガーズ)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/9Ssw91cdXeabov" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/OgawaTakeshi/spring-datarestandspringcloudcontract" title="Spring data-rest-and-spring-cloud-contract" target="_blank">Spring data-rest-and-spring-cloud-contract</a> </strong> from <strong><a href="https://www.slideshare.net/OgawaTakeshi" target="_blank">Ogawa Takeshi</a></strong> </div>

<iframe src="https://hatenablog-parts.com/embed?url=http%3A%2F%2Fblog.tagbangers.co.jp%2Fja%2F2018%2F11%2F03%2Fspring-cloud-contract-and-pact" title="Spring Cloud Contract の Pact 対応 | Tagbangers Blog" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe>

## 背景

- SPAが増えてきてフロントエンドとAPIの開発が別チームに分かれるようになってきた
    - リポジトリも別チームも別
- API設計の認識齟齬やコミュニケーションコストが増えてきてしまっている
    - Spring Data RESTとSpring Cloud Contructで解決する

## Spring Data REST

### 概要

- 自動的にREST APIのエンドポイントを作ってくれる
    - 開発者はEntityとRepositryを作るだけで
- レスポンスのデータにはエンドポイントのURLであるlink部も含まれる
- HATEOAS
    - リクエスト・レスポンスのフォーマットルール
    - Spring Data RESTはこの基準に準拠
- Spring Data RESTに乗っかればフォーマットに悩まなくてよくなる

### 実践では

- 自動で生成されるのは基本的なCRUDだけ
- ビジネスロジックが必要な場合は拡張する

### まとめ

- Spring Data REST使えばボイラープレートを減らせる
- ルールに乗っかることで本質的なポイントに時間を費やせる

## Spring Cloud Contruct

- SPAやマイクロサービスでテストする時APIはモック化する
    - そのモック本当に正しいの？
- Consumer: API利用者
- Provider: API提供者

### Spring Cloud Contruct + PactでConsumer Driven Contruct

- Consumerがテストを書く
    - その過程でPactファイルを作成
- ProviderはそのPactファイルを使ってテストする
    - Consumerが期待するAPIと違っていればエラーになって気づける

## まとめ

- API利用者と提供者の壁をSpringを使って解消できる
