# 500+のサーバーで動くLINE Ads PlatformをささえるSpring

- 渡邉 直樹(LINE株式会社)

## LINEのAds Platform

- LINEの中に出てる広告
    - LINE NEWSとかLINE Blogとか
- LINEに広告配信できる唯一のPlatform
- MAU7800万人
- 運用型広告
    - リアルタイムに予算やターゲットを変更できる
    - 何を表示するかリアルタイムにオークションにかけて選んでる
        - 全て50ms以内にやらないといけない
- Real Time Bidding
- 関係者のニーズを満たす必要がある
    - Advertiser
        - ROI
    - Media
        - 利益
    - Audience
        - UX
- 指標
    - CTR(Click Through Rate)
        - 簡単な数式
    - CTRを機械学習で事前に予測する

## Spring in LINE Ads Platform

### SSP(Supply Side Platform)

- メディア側の情報を管理するプラットフォーム
    - Real Time Bidding
        - リアルタイムにオークションする
- Spring Boot2
- CMS側はサーバがKotlinクライアントがNuxt

### DSP(Demand Side Platform)

- ROIが最大化する広告を選ぶ役割
- 50ms以内に返さないと広告が表示されない
- Goで作ってる
    - 50ms満たすため
- G1GCでも数十msかかることある
- CMS側はサーバがSpringBootクライアントがReact

### データの持ち方

- 広告情報をMySQLに入れてる
    - 毎回取りに行くと50msこえちゃう
    - 基本はメモリに乗せておく
        - 乗らないようなものはRedis

### DMP(Data Management Platform)

- 広告配信する対象を管理する
- 広告を出す相手の情報があるとより効果的な広告を選べる
- Look-a-like
    - 似ているユーザの行動をもとに広告を出す
- 技術
    - SpringBoot
    - Kafka
    - HBase
    - Redis
- ユーザの操作の度にイベントを飛ばしてそれを受けたらKafkaに書き込む

### Data Pipeline/Analytics Cluster

- 広告配信に関わるデータを収集し格納するプラットフォーム
- hadoopクラスタ
- Erasticsearch, kibana

## LINEの技術トレンド

### Kafka

- 高速で安定したStreaming Platform
- queやjob schedulerとしても利用
- 各サービスはKafkaに書き込むまでが責務
- 一度書き込んでおけば誰でも取れる
- spring-kafkaあるけど公式のkafka_clientおすすめ
    - springの方は自由にバージョン変えられない

### SpringBoot2

- Reactor
    - Reactive Streams
    - Non-blocking
    - back pressure
        - Kafka使ってるからあんまり使ってない
    - Lettuce5
        - Reactive API
- kafka
- actuator + micrometer
    - 使いやすい
    - それまではprometeusにデータ入れてGrafanaで見てた

## LINEの開発体制

- データ
    - 2 Country
        - 日本と韓国
    - 60 Developer?
    - 100 Co-worker
- コミュニケーション
    - 通訳挟んでTV会議
    - 翻訳bot入れてLINEで
    - 気軽に出張も

## 今後

- 機械学習とか
- ARとか
