# Observability with Spring-Based Distributed Systems

- Thomas Ludwig(楽天株式会社)

## Observability概要

### Observabilityとは

- ツールと手段を組み合わせてデータとコンテキストから気づきを得る
- 単純なモニタリングだけでなくもっと深いところまで
    - システムが大きくなると必ずどこかで障害が起きる
- 最近Observability流行ってるらしい

### なぜObservability

- UXを改善するため
- 本番に似せた環境があっても全てが同じではない
    - ユーザも違う
- 自身をもって運用するならサービスの状態を把握しないといけない
- MTTR(mean time to recovery)が重要
    - 障害が起きた時にどれだけ速く検知して直せるか

### 分散システム

- 別のプロセスで並行して処理
- 複数のプロセスを跨るので難易度が高い
    - 全てのプロセスの情報を見ないといけない
- スケーリングでそのインスタンスにしかない情報が消えるかも


## Observabilityの3要素

- 3要素かぶってる領域もあれば特化した領域もある
- どれか一つだけで全部できるというものではない
    - 使い分けるのがベスト

### Logging - Events

- メッセージを残して後でそれを見つけられるようにする
- 分散システムだと各サービスがログをはくからどこを見ればいいか複雑
    - ログを一箇所に収集して見られるようにしたい
- Spring Cloud Sleuth
    - ログにIDを振ってくれるのでサービスをまたがってもリクエストの流れを特定することができる
- 楽天トラベルでは
    - Spring Cloud Config
    - Travel Auto-configuration
        - 独自ライブラリ
        - セッションIDみたいなものを振って同じユーザが何度もアクセスした時に紐付ける
    - ELK
        - Elasticsearch
        - Logstash
        - Kibana

### Metrics - Aggregatable

- 時系列のデータを集計した値
- 集計した値なのでリクエストが多くてもサイズは変わらない
- 可視化したい時やトレンドを分析したい時に使う
- インスタンスが多いとスケールしない
    - 各インスタンスからデータを収集してひとまとめにしたい
- Micrometer
    - SpringBoot2から入ってる
    - SLAがあればその値をセットしてアラート上がるようにとかできる
- 楽天トラベルでは
    - Micrometer
    - Prometeus
    - Grafana
- Alert
    - あらゆるサービスにアラート入れると多重アラートが発生してしまう
    - ユーザのリクエストを受けるところだけ設定しておくとよい

### Tracing - Request scoped

- パフォーマンス遅延の原因を調査するために使う
- リクエストの流れがどうなっているか見るために使う
- Spring Boot Actuator
    - トレーシングの情報がとれるエンドポイントを自動で作ってくれる

#### Destributed Tracing

- インスタンスを跨いだトレーシングをしないといけない
- 一つのリクエストでどのサービスにどれくらい時間がかかったか把握できる必要がある
- Zipkin
- Soring Cloud Sleuth: spring-cloud-starter-zipkin
- 楽天トラベルでは
    - 全てのデータをzipkinに送ると負荷があるのでサンプリングしてる

## Putting It All Together

- 3要素はそれぞれ連携してる
- 検知 -> 調査 -> 復旧 のサイクルが回せるようになる
