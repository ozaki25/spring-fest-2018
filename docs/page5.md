# これからSpringを使う開発者が知っておくべきこと

- ⼟岐 孝平(⽇本Springユーザ会スタッフ)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/DvIn0ay7Ph36qX" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/KouheiToki/spring-121307860" title="これからSpringを使う開発者が知っておくべきこと" target="_blank">これからSpringを使う開発者が知っておくべきこと</a> </strong> from <strong><a href="https://www.slideshare.net/KouheiToki" target="_blank">Kouhei Toki</a></strong> </div>

## Springのアノテーション

### @Service

- 「Springにオブジェクトを作ってもらってDIコンテナで管理してほしい」と宣言するアノテーション
- DIコンテナで管理されたオブジェクトをBeanと呼ぶ

### @Autowired

- 「他のBeanをインジェクションしてほしい」と宣言するアノテーション
- SpringがDIコンテナで管理してるBeanをインジェクションしてくれる

### @Transactional

- 「このクラスのメソッドでDBのトランザクションを制御してほしい」と宣言するアノテーション
- トランザクションを制御するProxyが生成されServiceのメソッドはPorxyを通して呼ばれることになる

## スレッドセーフ

- Beanはシングルトンなので複数のスレッドが同じオブジェクトを使う
- スレッド個別のデータをインスタンス変数で持っていると危険
    - ローカル変数で持つようにする

## トランザクションの入れ子

- 以下のように同じクラス内で別のメソッドを呼んでもトランザクションは入れ子にならない
    - 内部呼び出しだとProxyを経由しないから

```java
@Transactional
void abc() {
  def();
}

@Transactional
void def() {
  // ...
}
```

- 別のクラスにするかTransaction Templateを使えばトランザクションを入れ子にできる
