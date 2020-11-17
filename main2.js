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




//
//
//後半
//
//

//関数を値として扱う
/*
関数型プログラミングとは関数を使ったプログラミングのスタイル。
以下のようなイメージ
*/

const add2 = x => x + 2//引数xに2を足す関数
const mul2 = x => x * 2//引数xに2をかける関数

const n = 3
console.log(add2(n))
console.log(mul2(n))
console.log(mul2(add2(n)))


//これらを使うと(n+2)*2という数式がmul2(add2(n))と×
//このように処理をアン数の呼び出しの連続のような形で記述するのが関数型プログラミングの特徴

//アロー関数のおさらい
const add =x => x+2//アロー関数
//これをいつもの描き方に直すと
// function add2(x){
//     return x + 2
// }




//高階関数
//関数型プログラミングでは関数も値のように扱うことが出来る。これを第一級関数という
//→関数を値のように扱えるという事は関数を関数の引数として渡すことが出来る
const add3 = x => x + 3

// function add3(x) {
//     return x+3
// }

function twice(f, x) {
    return f(f(x)) //→10+3+3=16 まず内側のf(x)が作動することでf(13)になる。それからf(13)が作動して16が戻ってくる
    // return f(x) //→10+3=13
    // return f(13) //→13+3=16
    // return f //→x => X+ 3
    // return f + x
}
const result =twice(add3, 10)
console.log(result)
const add4 = 5


/*
1.add3関数を定義する
2．twiceという関数を定義する。twice関数は引数fの関数を引数xの値に対して2回呼び出す
twiceの第一引数fは普通の関数呼び出しのように書いている
twiceのように関数を受け取る関数の事を高階関数という
*/
// const result2 = twice(add4, 10)
// console.log(result2)

// 高階関数の具体例：配列のmap

// var num = [3, 5, 6]
// const num = [3, 5, 6]//constで定義する作動しない、、、constは再代入が出来ないからでは？
// const square = x => x * x
// console.log(num.map(square))


const num = [3, 5, 6]
const square = x => x * x
console.log(num.map(square))


const list = [6, 29, 46];
const rui = x => x+ 15//①
console.log(list.map(rui))

//無名関数
//これまでの関数には必ず名前がついていたが名前をつけない書き方もある
//①の関数を無名関数にして書いてみると、、、
const list2 = [6, 29, 46]
console.log(list2.map(x => x + 16))
//または
const list3 = [6, 29, 46]
console.log(list.map(function (x) { return x + 17 }))
//無名関数は良く使うからここでしっかり覚えるべき


//高階関数の具体例2イベントリスナの登録
//→「ボタンを押したときに処理を実行する」という例
// const button = document.querySelector("#submit")
// button.addEventListener("click", event => {/*クリックしたときの処理*/ })
/*domを使っている
addEventListenerが高階関数である。第二引数にボタンがクリックする処理を関数として渡している
*/

//
//課題6-1

/*上記で登場したadd2, mul2の例を参考に、以下の数式をそれぞれ関数の組み合わせで記述してください。必要な関数は適宜作成してください。

n * 100 - 5
(n + 3) * 8 + 3
nは変数で、自由な数値を代入して動作確認して構いません。
*/

const first = x => x * 100 - 5
const second =x =>(x+3)*8+3
const g = 2
console.log(first(g))
console.log(second(5))
console.log(first(second(g)))
console.log(second(first(n)))


//課題6-1map
/*以下のitemsは、週✕日ごとに、なんらかの成績が記録されている配列だとします（配列の配列）。
itemsのmapを呼び出して、「各週ごとの成績の合計値」の配列sumsに変換するプログラムを作成してください。*/



// const days = [6,7]

// const sum3 = days => {
    //     let sum2 = 0;
    //     for (let i = 0, len = days.length; i < len; i++) {
        //         sum2 += days[i];
        //     }
        //     return sum2;
        // };
        
        // let result5 = [48, 75, 92, 61, 54, 83, 76];
        // let sum3 = result5.reduce(function(sum, element){
//   return sum + element;
// }, 0);

// console.log(sum3)



//

const days = [
// 日  月  火  水  木  金  土
// 14, 93, 89, 51, 85, 59, 33
  [14, 93, 89, 51, 85, 59, 33],
  [69, 27, 40, 76, 25, 21, 55],
  [55, 60,  3, 28, 49,  5, 91],
  [19, 56, 92, 66, 53, 80, 13],
]


const sums = days.map((day) => {
    // ここを埋める
    let sum = days.reduce(function(sum, element){
        return sum + element;
    }, 0);
    console.log(day[5])
    return sum(day)
})
console.log(sums) //=> [424, 313, 291, 379]

// const day = days[0][0+1]
// console.log(day)
// console.log(sum(days))
/*解法
まずdaysは
入れ子となった配列には
配列名[インデックス番号][インデックス番号]
とアクセスできる
*/