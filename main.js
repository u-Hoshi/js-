//オブジェクト・・・複数の値をまとめて扱えるようにしたもの
//配列と似ているが、オブジェクトはそれぞれの値に名前をつける事が出来る
//オブジェクトの値は{<名前>:<値>,<名前>:<値>}のように書く

const kirito = { id: "sao", name: "KazutoKirigaya", age: 16,subname:"黒の剣士"}

console.log(kirito.id)
console.log(kirito.name)
console.log(kirito.age)

/*id name ageの事をプロパティと呼ぶ
オブジェクトはプロパティと値の対応関係を保持するのに使う
オブジェクトのプロパティを取り出すには<オブジェクト>.<プロパティ>と書く
*/

const asuna = { id: "sao", name: "asunaYuki", age: 17,subname:"閃光のアスナ" }


function printUser(user) {
    console.log(`${user.name}さん(id:${user.id})は${user.age}歳です`)//テンプレート文字列
    console.log((user.name)+"は"+(user.subname)+"と呼ばれた")//文字列結合
}
//`${～}を使う書き方はテンプレート文字列という
printUser(kirito)
printUser(asuna)


const alice = { a: 1 }

alice.age = "?"
alice.a = 3
alice["役職"] = "整合騎士"

console.log(alice)
/*
オブジェクトは1つの物を表す単位として使える
またオブジェクトは1つの物について複数の情報（値）をまとめて扱うのに向く
ある物のプロフィール的なものになる
まとめて管理できるのでそれが何か理解しやすくなる
*/


//オブジェクトと配列の組み合わせ

//配列へのアクセスの仕方は↓
const anime = ["oregairu", 123, "sao"]
console.log(anime[0])

//console.log(変数[インデックス])

//配列の要素は任意の値を採れるから「オブジェクトの配列」も作れる

const animeinfo = [
    { name:"俺ガイル", ジャンル: "ラブコメ", b: ['雪ノ下雪乃', '由比ヶ浜結衣'] },
    { name: "sirobako", ジャンル: "お仕事系" },
    {name:"lovelive",ジャンル:"スポコン",osi:"all"},
]

console.log(animeinfo[0])
console.log(animeinfo[2])
console.log(animeinfo[1])
console.log(animeinfo[0].name)
console.log(animeinfo[0].b[0])





/*
json=javascript object notation
jsonとはオブジェクトの書き方の一つ。オブジェクトを色んな言語でやり取りが出来るように決められたもので
javascript以外でも使える書き方である。
*/

//上記のanimeinfoをjsonで書くと
// [
    //     { "name": "俺ガイル", "ジャンル": "ラブコメ", "comments": ["雪ノ下雪乃", "由比ヶ浜結衣"] },
    //     { "name": "sirobako", "ジャンル": "お仕事系" },
    //     {"name":"lovelive","ジャンル":"スポコン"}
    // ]
    
    /*
    javascriptと違うのは
    - すべてのプロパティを""囲む必要がある
    - 文字列に使えるのも""だけで''や``は使えない
    - 配列やオブジェクトの要素の最後に,を書いてはいけない
    - jsonはプログラミング言語ではないため処理は書けない（htmlと一緒）
    */
   
   /*
   javascriptでjsonを使う場面は2種類ある
   ・Javascriptのオブジェクトをjsonにする（エンコード）→JSON.stringify
・jsonからjavascriptのオブジェクトにする（デコード）→JSON.parse
*/


//エンコード
const json = JSON.stringify(animeinfo)
console.log(json)

//デコード
const anime2 =`[
    { "name": "俺ガイル", "ジャンル": "ラブコメ", "comments": ["雪ノ下雪乃", "由比ヶ浜結衣"] },
    { "name": "sirobako", "ジャンル": "お仕事系" },
    {"name":"lovelive","ジャンル":"スポコン"}
]
`
const animeinfo2 = JSON.parse(json)
console.log(animeinfo2)


/*
課題5-1
*/


const items = [
  // ここを埋める
    { n: 100 },
    { a: { b: ["abc", "de"] } , c: { "100": 'foobar' } },
    // { a:"a", b:["bc","de"],c:["100",'foobar']},
]

console.log(items[0].n) //=> 100
console.log(items[1].a.b[0]) //=> abc aの中のbの[0]を作ってあげる
console.log(items[1].c['100']) //=> foobar  ""で囲まれたオブジェクトを作ってあげればいい