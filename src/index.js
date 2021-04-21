/**
 * const,let当の変数宣言
 */
//  var val1 = `var変数`
//  console.log(val1);
// // var 変数は上書き可能
// val1 = `var変数を上書き`;
// console.log(val1);

// // var変数は再宣言可能
// var val1 =`var変数を再宣言`;
// console.log(val1);

// let val2 =`let変数`;
// console.log(val2);

// //letは上書きが可能
// val2 = `let変数を上書き`;
// console.log(val2);

// //letは再宣言不可
// let val2 =`let変数を再宣言`;

// const val3 =`const変数`;
// console.log(val3);

//const変数は上書き不可
// val3 = `const変数を上書き`
//const変数は再宣言も不可
// const val3 =`const変数を再宣言`

//constで定義したオブジェクトはプロパティの追加、変更が可能
// const val4 = {
//   name:`Taro`,
//   age:28,
// };
// val4.name = `Jiro`;
// val4.adress = `Kanagawa`;
// console.log(val4);

//constで定義した配列はプロパティの追加、変更が可能
// const val5 = [`dog`,`cat`];
// val5[0] = `bird`;
// val5.push(`monkey`);
// console.log(val5);

// /**
//  * テンプレート文字列：文字列の中にJSを埋め込む手法
//  */
// //従来の方法
// const name =`Taro`;
// const age = 28;
// //「私の名前はTaroです。年齢は20歳です。」

// //従来の方法
// const message1 = `私の名前は` + name + `です。年齢は` + age + `です。`;
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

/**
 * アロー関数
 */
// //従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1(`func1です`));

// //アロー関数
// const func2 =(str) => {
//   return str;
// }
// console.log(func2(`func2です`));

// //引数を返すだけならこれでもOK
// //1行で書ける処理なら子の形式でも可能
// const func3 =(str) => str;
// console.log(func3(`func3です`));

// //引数が複数のパターン
// const func4 = (num1,num2) => num1 + num2;
// console.log(func4(1,4));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: `Taro`,
//   age: 28,
// };
// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(message1);

// //分割代入で書く場合
// const {name,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile2 = [`Jiro`, 27]
// const [name2,age2] = myProfile2;
// const message3 = `名前は${name2}です。年齢は${age2}歳です。`;
// console.log(message3);

//デフォルト値、引数
//const sayHello = (name) => console.log(`こんにちは!${name}さん！`);
// const sayHello = (name=`ゲスト`) => console.log(`こんにちは!${name}さん！`);
// sayHello();

/**
 * スプレッド構文:配列をまとめて扱う
 * ...<配列＞
 */ // const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
//配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const[num1, num2, ...arr3] = arr2
// console.log(arr3);
//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
