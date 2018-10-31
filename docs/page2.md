# 決済システムの内製化への旅 ‒ SpringとPCFで作るクラウドネイティブなシステム開発

- 槙 俊明(Pivotal)
- 鈴⽊ 順也(ソフトバンク・ペイメント・サービス株式会社)

## 内製化に至る道程

### 2016

- 課題
    - 開発は全てベンダ任せ
    - 開発環境も整ってない
    - 手作業によるミスが起きる
- 解決策
    - 改善プロジェクト
    - SpringBoot, Selenium
    - github入れたり
    - エンジニアが3人入社

### 2017

- 課題
    - サービスの状況を把握できない
    - 古いアーキテクチャで開発コスト増
- 解決策
    - 監視ツール導入
    - Springで統一
    - jenkins, nexus, sonar

### 2018

- 決済システムの内製スタート
    - オンライン決済サービス
    - 加盟店にAPIを公開
    - 複数の決済手段で決済
    - 加盟店(8000件) -> **決済システム** -> 決済機関(40件)
- 求められてたこと
    - スピード感
    - 継続的な改善
    - 監視が容易で障害に強い
    - -> ベンダーに頼ると実現できないので内製で
- PCF上に構築することに
    - 槙さんがサポート

## なぜPCF

- PCF
    - Pivotal Container Service
        - Kubernetes
    - Pivotal Application Service
        - Cloud Foundry
    - Pivotal Function Service
        - Knative, riffがベース
- この事例ではPvotal Application Serviceを採用
    - 3つのうちどれが良いかはチーム構成ややりたいことによる
- チーム体制
    - ops2名 - PCFの面倒見る
    - dev3名 - アプリ作る
- 12factorに従って作ればPCFを意識しなくてもPCFで動く
- PaaS vs Kube
    - 開発者視点で
        - いろんなことをやりたくなかった

## 技術の話

### 全体アーキテクチャ

- CI周り
    - Github
    - Nexus
    - Concourse
- PaaS周り
    - PAS
    - RabbitMQ
- 監視周り
    - Prometheus
    - Grafana
- ログ周り
    - Logstash
    - Elasticserch
    - Kibana
- Dev環境とProd環境を用意
    - PAS以外のコンポーネントはBOSHで管理

### アプリのアーキテクチャ

- マイクロサービスで作ってる
    - API Gateway
        - Spring Cloud Gayteway
    - ServiceA, B, C
        - 決済機関単位で？作成
    - Hystrix入れてサーキットブレーカも
        - 障害があった時に関係ない決済機関も使えなくなる訳にはいかない
    - 決済機関から加盟店への通知はRabbitMQで非同期に連携
        - Spring Cloud Stream
        - Notification Gateway
        - 通知失敗したらDeadLetterQueとして返ってくるので再送する
- PCFによるAutoscaler
    - 急な負荷に対応する
    - スケールに関してアプリ側が何か意識する必要はない
- 12factor
    - 環境に依存する設定項目は環境変数に
    - ログはファイルではなく標準出力に
        - 絶対にロストしてはいけないデータはDBへ

### CI/CD

- Concouseで動かす
    - slackに通知
    - github enterpriseと連携
    - pushする -> JUnit実行 -> Sonarに結果送る -> nexusへ配置 -> 開発環境へリリース
        - 本番では自動でバージョンのインクリメントとかも
        - 槙さん謹製の構成(どこかで見たことあるような構成)
- 負荷テスト、E2Eテストも自動で
    - JMeterで負荷テスト
        - 開発環境で毎日
    - E2Eテスト
- Javaの複数バージョン対応
    - 複数のバージョンでのテストをConcourseで同時に実行
    - docker使ってるので複数バージョン並列実行を簡単にできる

### Observability

- Observability
    - Tracing
    - Metrics
    - Logging
- Zipkin使ってる
    - MySQLのJDBCの処理も見れるようになる
    - Brave MySQL
- Grafanaダッシュボードで監視
    - BOSHで入れるとダッシュボードやアラートデフォルトで入ってる
    - micrometerの依存追加するだけで使える
- Kibanaでログを見てる
