
# 実際のプロジェクトでSpringアプリをKotlinで開発して得た気づき集

- ⻑澤 太郎(Ubie株式会社)
- jkug代表

## KotlinでSpringを始める

- Spring InitializrでKotlinを選べるようになってる

### クラスにつけるアノテーション

- Kotlinのクラスはデフォルトfinal
    - 継承したいならopenってつける必要がある
    - @Serviceするならopenしないといけない
    - Kotlin公式のallopenプラグイン
        - 指定したアノテーションをつけるとopenしたことにしてくれる
    - Kotlin公式のkotlin-springプラグイン
        - @Service等々は自動でopenしてくれる
        - SpringInitializrで作れば入ってる
- アノテーションの解析ないから速い

###  バリデーション

- これだとダメ

```kotlin
class Xxx (
  @NotNull val age: Int,
  @NotBlank val name: String
)
```

- Javaを意識してこう書かないといけない

```kotlin
class Xxx (
  @field:@NotNull val age: Int,
  @field:@NotBlank val name: String
)
```

- デフォルトではもともとnull許容しないので注意
    - ?つけるとnull許容型

```kotlin
class Xxx (
  @field:@NotNull val age: Int?,
  @field:@NotBlank val name: String
)
```

## WebFluxとコルーチン

- ReactorのAPI覚えないといけないものとかたくさん
- Reactorとコルーチンを組み合わせると書きやすい
- Reactorの世界とKotlinの世界を処理の途中でいったりきたりできる
    - async/awaitとか使って書く

## アノテーションをやめる

- アノテーションは黒魔術
- Spring5からアノテーションなしでもできる
- mainにKotlin DSLで書く
    - 手動でbeanに登録とか
    - routingもDSLに書いておく

## テスト

- Spring Test - WebTestClient
- AssertJ
- MockK
- DbSetup-kotlin

### JUnit5

- @Nestedでグルーピングしやすくなった
- `assertThrows<MyException>`って型引数渡せる

### AssertJ

- .isNotNullした後でもnullableな値だと?つけないといけない

```kotlin
assertThat(got).isNotNull
assertThat(got?.name).isEqualTo('test')
```

- そもそもデータクラスで比較したほうがエラーのときの情報量が豊富でみやすい

### MockK

- コルーチンは通常特定の場合じゃないと呼び出せない
    - けど、呼び出せるような仕組みがある
- mock生成は重いから繰り返さないように注意
    - 各テストの前にclearMokcksすればいい

## 周辺ツール

### コーディングガイドライン

- ktlint
    - eslint的な
    - Linter 兼 formatter
    - gradleプラグインある
- シンプルさを保つ
    - Kotlinの思想として簡潔さではなく読みやすさ重視

## まとめ

- Kotlinでも普通にSpringアプリ作れる
- Javaとの違い意識しないと行けない部分はまだある
- Reactorとコルーチン相性良し
- アノテーションやめてKotlin DSL
- データクラスでテスト結果読みやすく
- モックはmockKがよい