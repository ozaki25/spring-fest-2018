(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(i,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"observability-with-spring-based-distributed-systems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observability-with-spring-based-distributed-systems","aria-hidden":"true"}},[i._v("#")]),i._v(" Observability with Spring-Based Distributed Systems")]),i._v(" "),e("ul",[e("li",[i._v("Thomas Ludwig(楽天株式会社)")]),i._v(" "),e("li",[i._v("↓違う講演のスライドだけどだいたい同じ\n"),e("ul",[e("li",[i._v("公開されたら差し替える")])])])]),i._v(" "),e("iframe",{staticStyle:{border:"1px solid #CCC","border-width":"1px","margin-bottom":"5px","max-width":"100%"},attrs:{src:"//www.slideshare.net/slideshow/embed_code/key/Abza9uvEmKkaEN",width:"595",height:"485",frameborder:"0",marginwidth:"0",marginheight:"0",scrolling:"no",allowfullscreen:""}}),i._v(" "),e("div",{staticStyle:{"margin-bottom":"5px"}},[e("strong",[e("a",{attrs:{href:"//www.slideshare.net/tommyludwig/observability-with-springbased-distributed-systems",title:"Observability with Spring-based distributed systems",target:"_blank"}},[i._v("Observability with Spring-based distributed systems")])]),i._v(" from "),e("strong",[e("a",{attrs:{href:"https://www.slideshare.net/tommyludwig",target:"_blank"}},[i._v("Tommy Ludwig")])])]),i._v(" "),e("h2",{attrs:{id:"observability概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observability概要","aria-hidden":"true"}},[i._v("#")]),i._v(" Observability概要")]),i._v(" "),e("h3",{attrs:{id:"observabilityとは"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observabilityとは","aria-hidden":"true"}},[i._v("#")]),i._v(" Observabilityとは")]),i._v(" "),e("ul",[e("li",[i._v("ツールと手段を組み合わせてデータとコンテキストから気づきを得る")]),i._v(" "),e("li",[i._v("単純なモニタリングだけでなくもっと深いところまで\n"),e("ul",[e("li",[i._v("システムが大きくなると必ずどこかで障害が起きる")])])]),i._v(" "),e("li",[i._v("最近Observability流行ってるらしい")])]),i._v(" "),e("h3",{attrs:{id:"なぜobservability"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#なぜobservability","aria-hidden":"true"}},[i._v("#")]),i._v(" なぜObservability")]),i._v(" "),e("ul",[e("li",[i._v("UXを改善するため")]),i._v(" "),e("li",[i._v("本番に似せた環境があっても全てが同じではない\n"),e("ul",[e("li",[i._v("ユーザも違う")])])]),i._v(" "),e("li",[i._v("自身をもって運用するならサービスの状態を把握しないといけない")]),i._v(" "),e("li",[i._v("MTTR(mean time to recovery)が重要\n"),e("ul",[e("li",[i._v("障害が起きた時にどれだけ速く検知して直せるか")])])])]),i._v(" "),e("h3",{attrs:{id:"分散システム"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分散システム","aria-hidden":"true"}},[i._v("#")]),i._v(" 分散システム")]),i._v(" "),e("ul",[e("li",[i._v("別のプロセスで並行して処理")]),i._v(" "),e("li",[i._v("複数のプロセスを跨るので難易度が高い\n"),e("ul",[e("li",[i._v("全てのプロセスの情報を見ないといけない")])])]),i._v(" "),e("li",[i._v("スケーリングでそのインスタンスにしかない情報が消えるかも")])]),i._v(" "),e("h2",{attrs:{id:"observabilityの3要素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observabilityの3要素","aria-hidden":"true"}},[i._v("#")]),i._v(" Observabilityの3要素")]),i._v(" "),e("ul",[e("li",[i._v("3要素\n"),e("ul",[e("li",[i._v("Logging")]),i._v(" "),e("li",[i._v("Metrics")]),i._v(" "),e("li",[i._v("Tracing")])])]),i._v(" "),e("li",[i._v("3要素かぶってる領域もあれば特化した領域もある")]),i._v(" "),e("li",[i._v("どれか一つだけで全部できるというものではない\n"),e("ul",[e("li",[i._v("使い分けるのがベスト")])])])]),i._v(" "),e("h3",{attrs:{id:"logging-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging-events","aria-hidden":"true"}},[i._v("#")]),i._v(" Logging - Events")]),i._v(" "),e("ul",[e("li",[i._v("メッセージを残して後でそれを見つけられるようにする")]),i._v(" "),e("li",[i._v("分散システムだと各サービスがログをはくからどこを見ればいいか複雑\n"),e("ul",[e("li",[i._v("ログを一箇所に収集して見られるようにしたい")])])]),i._v(" "),e("li",[i._v("Spring Cloud Sleuth\n"),e("ul",[e("li",[i._v("ログにIDを振ってくれるのでサービスをまたがってもリクエストの流れを特定することができる")])])]),i._v(" "),e("li",[i._v("楽天トラベルでは\n"),e("ul",[e("li",[i._v("Spring Cloud Config")]),i._v(" "),e("li",[i._v("Travel Auto-configuration\n"),e("ul",[e("li",[i._v("独自ライブラリ")]),i._v(" "),e("li",[i._v("セッションIDみたいなものを振って同じユーザが何度もアクセスした時に紐付ける")])])]),i._v(" "),e("li",[i._v("ELK\n"),e("ul",[e("li",[i._v("Elasticsearch")]),i._v(" "),e("li",[i._v("Logstash")]),i._v(" "),e("li",[i._v("Kibana")])])])])])]),i._v(" "),e("h3",{attrs:{id:"metrics-aggregatable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metrics-aggregatable","aria-hidden":"true"}},[i._v("#")]),i._v(" Metrics - Aggregatable")]),i._v(" "),e("ul",[e("li",[i._v("時系列のデータを集計した値")]),i._v(" "),e("li",[i._v("集計した値なのでリクエストが多くてもサイズは変わらない")]),i._v(" "),e("li",[i._v("可視化したい時やトレンドを分析したい時に使う")]),i._v(" "),e("li",[i._v("インスタンスが多いとスケールしない\n"),e("ul",[e("li",[i._v("各インスタンスからデータを収集してひとまとめにしたい")])])]),i._v(" "),e("li",[i._v("Micrometer\n"),e("ul",[e("li",[i._v("SpringBoot2から入ってる")]),i._v(" "),e("li",[i._v("SLAがあればその値をセットしてアラート上がるようにとかできる")])])]),i._v(" "),e("li",[i._v("楽天トラベルでは\n"),e("ul",[e("li",[i._v("Micrometer")]),i._v(" "),e("li",[i._v("Prometeus")]),i._v(" "),e("li",[i._v("Grafana")])])]),i._v(" "),e("li",[i._v("Alert\n"),e("ul",[e("li",[i._v("あらゆるサービスにアラート入れると多重アラートが発生してしまう")]),i._v(" "),e("li",[i._v("ユーザのリクエストを受けるところだけ設定しておくとよい")])])])]),i._v(" "),e("h3",{attrs:{id:"tracing-request-scoped"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tracing-request-scoped","aria-hidden":"true"}},[i._v("#")]),i._v(" Tracing - Request scoped")]),i._v(" "),e("ul",[e("li",[i._v("パフォーマンス遅延の原因を調査するために使う")]),i._v(" "),e("li",[i._v("リクエストの流れがどうなっているか見るために使う")]),i._v(" "),e("li",[i._v("Spring Boot Actuator\n"),e("ul",[e("li",[i._v("トレーシングの情報がとれるエンドポイントを自動で作ってくれる")])])])]),i._v(" "),e("h4",{attrs:{id:"destributed-tracing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destributed-tracing","aria-hidden":"true"}},[i._v("#")]),i._v(" Destributed Tracing")]),i._v(" "),e("ul",[e("li",[i._v("インスタンスを跨いだトレーシングをしないといけない")]),i._v(" "),e("li",[i._v("一つのリクエストでどのサービスにどれくらい時間がかかったか把握できる必要がある")]),i._v(" "),e("li",[i._v("Zipkin")]),i._v(" "),e("li",[i._v("Soring Cloud Sleuth: spring-cloud-starter-zipkin")]),i._v(" "),e("li",[i._v("楽天トラベルでは\n"),e("ul",[e("li",[i._v("全てのデータをzipkinに送ると負荷があるのでサンプリングしてる")])])])]),i._v(" "),e("h2",{attrs:{id:"putting-it-all-together"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#putting-it-all-together","aria-hidden":"true"}},[i._v("#")]),i._v(" Putting It All Together")]),i._v(" "),e("ul",[e("li",[i._v("3要素はそれぞれ連携してる")]),i._v(" "),e("li",[i._v("検知 -> 調査 -> 復旧 のサイクルが回せるようになる")])])])}],!1,null,null,null);r.options.__file="page11.md";t.default=r.exports}}]);