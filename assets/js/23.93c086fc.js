(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{167:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"これからspringを使う開発者が知っておくべきこと"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#これからspringを使う開発者が知っておくべきこと","aria-hidden":"true"}},[t._v("#")]),t._v(" これからSpringを使う開発者が知っておくべきこと")]),t._v(" "),s("ul",[s("li",[t._v("⼟岐 孝平(⽇本Springユーザ会スタッフ)")])]),t._v(" "),s("iframe",{staticStyle:{border:"1px solid #CCC","border-width":"1px","margin-bottom":"5px","max-width":"100%"},attrs:{src:"//www.slideshare.net/slideshow/embed_code/key/DvIn0ay7Ph36qX",width:"595",height:"485",frameborder:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowfullscreen:""}}),t._v(" "),s("div",{staticStyle:{"margin-bottom":"5px"}},[s("strong",[s("a",{attrs:{href:"//www.slideshare.net/KouheiToki/spring-121307860",title:"これからSpringを使う開発者が知っておくべきこと",target:"_blank"}},[t._v("これからSpringを使う開発者が知っておくべきこと")])]),t._v(" from "),s("strong",[s("a",{attrs:{href:"https://www.slideshare.net/KouheiToki",target:"_blank"}},[t._v("Kouhei Toki")])])]),t._v(" "),s("h2",{attrs:{id:"springのアノテーション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springのアノテーション","aria-hidden":"true"}},[t._v("#")]),t._v(" Springのアノテーション")]),t._v(" "),s("h3",{attrs:{id:"service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service","aria-hidden":"true"}},[t._v("#")]),t._v(" @Service")]),t._v(" "),s("ul",[s("li",[t._v("「Springにオブジェクトを作ってもらってDIコンテナで管理してほしい」と宣言するアノテーション")]),t._v(" "),s("li",[t._v("DIコンテナで管理されたオブジェクトをBeanと呼ぶ")])]),t._v(" "),s("h3",{attrs:{id:"autowired"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autowired","aria-hidden":"true"}},[t._v("#")]),t._v(" @Autowired")]),t._v(" "),s("ul",[s("li",[t._v("「他のBeanをインジェクションしてほしい」と宣言するアノテーション")]),t._v(" "),s("li",[t._v("SpringがDIコンテナで管理してるBeanをインジェクションしてくれる")])]),t._v(" "),s("h3",{attrs:{id:"transactional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactional","aria-hidden":"true"}},[t._v("#")]),t._v(" @Transactional")]),t._v(" "),s("ul",[s("li",[t._v("「このクラスのメソッドでDBのトランザクションを制御してほしい」と宣言するアノテーション")]),t._v(" "),s("li",[t._v("トランザクションを制御するProxyが生成されServiceのメソッドはPorxyを通して呼ばれることになる")])]),t._v(" "),s("h2",{attrs:{id:"スレッドセーフ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#スレッドセーフ","aria-hidden":"true"}},[t._v("#")]),t._v(" スレッドセーフ")]),t._v(" "),s("ul",[s("li",[t._v("Beanはシングルトンなので複数のスレッドが同じオブジェクトを使う")]),t._v(" "),s("li",[t._v("スレッド個別のデータをインスタンス変数で持っていると危険\n"),s("ul",[s("li",[t._v("ローカル変数で持つようにする")])])])]),t._v(" "),s("h2",{attrs:{id:"トランザクションの入れ子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#トランザクションの入れ子","aria-hidden":"true"}},[t._v("#")]),t._v(" トランザクションの入れ子")]),t._v(" "),s("ul",[s("li",[t._v("以下のように同じクラス内で別のメソッドを呼んでもトランザクションは入れ子にならない\n"),s("ul",[s("li",[t._v("内部呼び出しだとProxyを経由しないから")])])])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("abc")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("def")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("def")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("別のクラスにするかTransaction Templateを使えばトランザクションを入れ子にできる")])])])}],!1,null,null,null);r.options.__file="page5.md";a.default=r.exports}}]);