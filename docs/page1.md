# KEYNOTE - The State of Spring, Java and Kotlin

- SébastienDeleuze(Pivotal)

## Javaの現状

- Java8が広く使われるようになってきた
    - 2017/10で75%くらい使われてる
    - 残りはほとんど7
    - 9はLTSじゃないから少ない
- JavaSE Lifecycle
    - LTSは3年ごと
        - 次は11その次は17
    - 6ヶ月ごとにリリース

### Java LTS Version

- Java8
    - Java8がベースになっていく
    - 2023+までサポート
- Java11
    - 2023+までサポート
- Java17
    - 2021リリース予定

### SpringとJava

- v4.3はJava8まで
    - EOLは2020/6
- v5.0はJava10まで
    - EOLは2019/3
- v5.1はJava11まで
    - EOLは2019/12
- v5.2はJava12までサポート

### New VM

- GraalVM
    - High performance polyglot VM

## Kotlinの現状

- 今一番伸びている言語
    - stack overflowやgithubのデータより
- 1.3がつい最近リリース
    - コルーチンが目玉
    - Kotlin/Nativeがbetaに

## Springの現状

### SpringFramework5.1

- v5.1でJava8と11をサポート
- non-LTSはベストエフォート

### SpringBoot2.1

- v2.1が昨日でた
- Java11サポート
- 3rdパーティライブラリアップグレード
    - TomcatとかHibernateとか
- Spring Data JDBC Starter
- 起動時のパフォーマンス改善

### Roadmap

- SpringFrameworkのv5.2でKotlinのv1.3をベースにする
  - コルーチンもサポート
- 公式ドキュメントにKotlinのサンプルコードも含めるようにする

## R2DBC

- Reactive SQL SPI
- Reactive Streamベース
- PostgreSQL driver more to come

### Spring Data R2DBC

- Spring Data JDBCに似てるけどこっちはReactive
- DatabaseClient functional API

## GraalVM

- SpringBootが一瞬で起動するデモ
    - 0.006s?

## RSocket

- ネットワークをReactiveにする
- facebookを中心に4社で作ってる
- モデル
    - request response
    - fire and forget
    - request - stream
    - channel
- クライアント
    - JavaでもJSでもKotlinでもC++でも
- SpringFramework v5.2から

## Spring Fu

- SpringをFunctionalに書く
- Faster and Lighter
- Kofu
    - KotlinによるSpring Fuのconfiguration
    - Kotlin DSL
- Jafu
    - JavaによるSpring Fuのconfiguration

## まとめ

- パフォーマンスを上げることとReactiveに力を入れてる

