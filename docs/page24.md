# Angularを⽤いたデザインスプリント開発と設計⼿法

- 佐川 夫美雄(アシラス株式会社)

## Web Application Design

### WebアプリとWebサイト

- Webサイト
    - 一方向
- Webアプリ
    - 双方向
- デザイナーはWebサイト的なものを作る傾向?
    - インタラクティブなUXまで考慮できる人は少ない

### Webアプリ

- html/css/js
- htmlとCSSはスコープがグローバル
    - モジュール分割もできない

### よいプログラム

- 可読性
- テスト
- 再利用性
- リファクタリング

### コンポーネント

- よいプログラムにするにはコンポーネントを作って組み合わせるとよい
- Atmic Design
- 大きなものを作ってそこからパーツを抽出しそれらを組み合わせてページをつくる

### Design Sprint

- デザインカンプ(画面設計書)を作るのが目標
- WebのUIは細かいとこまで柔軟に作れてしまう
- イラレで書いたのをXDに貼り付けたレベルでユーザに評価してもらう
    - これをスプリントで回す

## Web Application Implementation

### WebComponents

- Custom Elements
    - 自分でHTMLのタグを作れる
- Shadow DOM
    - CSSにスコープを作れる
- HTML Template
    - 独立したHTMLかたまりを定義できる
- (HTML Import) -> 仕様廃止ES Modulesへ
    - テンプレート化されたHTMLをimportできる

## JS Frameworkの比較

- ScopedなCSSを作れるFWを使うべき
- 3大SPAFW
    - Angular
        - 標準機能でShadowDOM使える
        - まあ全部込みがAngularの特徴だし・・
    - Vue
        - scopedなCSSは標準でできる
    - React
        - 標準機能ではscopedなCSSは使えない？？？
        - styled-components使えばできる
        - 本体を薄くする戦略だし・・・
- Web標準のShadowDOMにこだわっているのか？
- だとしても現状polyfill必須だしな

## DevOps for Frontend

- デザインしたものをすぐに確認してフィードバックできるサイクル
- Github Enterpriseでプロジェクト管理リソース管理
- クラウドでさくっと環境作ってそこにあげる
    - デモはすぐ見れる
- Swagger使うとAngularの通信周り自分で書かなくていい
    - Swagger Codegenで生成できる

## まとめ

- Webアプリ開発はコンポーネント指向で
- デザイナーとエンジニア協力して開発効率をあげる


