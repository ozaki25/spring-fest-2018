# Spring Data for Apache GeodeでRDBいらずのアプリ開発をしよう！

- ⼭河 征紀(ウルシステムズ株式会社)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/avu1GNqMGej0it" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MasakiYamakawa/20181031-springfest-spring-data-geode" title="20181031 springfest spring data geode" target="_blank">20181031 springfest spring data geode</a> </strong> from <strong><a href="https://www.slideshare.net/MasakiYamakawa" target="_blank">Masaki Yamakawa</a></strong> </div>

## RDB以外の選択肢

### JavaでRDBを使う場合

- JavaでRDB使うと考えること多い
    - JavaはObjectでDBは表形式
    - Javaの型とDBの型があってるか確認しないと
    - JavaはキャメルケースでDBはスネークケースで・・
- ORマッパーを使えばある程度解消できる
    - OneToManyとかめんどくさい
- **そこでGeode**

### Apache Geodeとは

- インメモリデータグリッド製品
- RDBと違ってメモリ内にデータを保持することをベースとする

### Geodeを使うメリット

- RDBとの互換性を気にしたりしなくてよくなる
- オブジェクト設計の内容を素直に実装できる
- イベントドリブンな処理をしやすい
- とにかく速い

## Spring Data for Apache Geode

- Repositoryを通して簡単にGeodeにアクセスできるようにしてくれる
- 発生する例外を共通例外に変換してくれる
- spring-geode-starterを使えば依存関係も勝手に解決してくれる
- メモリ内のデータをディスクに書き込み永続化させることもできる

## まとめ

- GeodeはSpring Data Geodeで簡単に使えそう
- 検索やトランザクションもできなくはない
- マイクロサービスに向いてそう
- スケールアウトが楽