# AmazonCognito使って認証したい？それならSpring Security使いましょう！

- 内⽴ 良介(コイニー株式会社 ⽇本Javaユーザーグループ)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/YFLUuK6Rvrq6z" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/RyosukeUchitate/amazon-cognitospring-security" title="Amazon Cognito使って認証したい？それならSpring Security使いましょう！" target="_blank">Amazon Cognito使って認証したい？それならSpring Security使いましょう！</a> </strong> from <strong><a href="//www.slideshare.net/RyosukeUchitate" target="_blank">Ryosuke Uchitate</a></strong> </div>

## Spring Security

### Spring Security概要

#### 登場するモジュール

- Core
    - 認証認可
- Web
    - Webアプリのセキュリティ
- Config
    - XMLネームスペース
    - JavaConfig

#### 処理の流れ

- クライアントがアクセス -> FilterChainProxy -> SecurityFilterChain * n -> WebAppResouce

#### 主なSecurityFilter

- LogoutFilter
    - ログアウト処理
- AnonymusAuthenticationFilter
    - 匿名ユーザとして認証する
- BasicAuthenticationFilter
    - Basic認証で使う

### 認証処理の仕組み

#### 認証(Authentication)

- 対象が誰であるか確認すること

#### Spring Securityの認証処理の仕組み

- AuthenticationFilter -> AuthenticationManager -> AuthenticationProvider
  - AuthenticationFilterで資格情報を抽出
  - 資格情報をAuthenticationManagerを経由してAuthenticationProviderまで渡す
  - AuthenticationProviderから認証情報が返ってくる
- 資格情報
    - ログイン時に入力したパスワードなど
- 認証情報
    - DBから取得したユーザ情報など

### 認可処理の仕組み

#### 認可(Authorization)

- 特定の処理に対して権限を与えること

#### Spring Securityの認可処理の仕組み

- AccessDecisionVoterを呼んでアクセス権を投票
    - 投票結果からアクセス権を判断
- Voterの例
    - 0時-5時はアクセス不可
    - 30歳以上はアクセス不可

