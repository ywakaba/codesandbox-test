/**
 * const、let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// let変数は再宣言不可
// var val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);
// const val3 = "const変数";
// console.log(val3);

const val4 = {
  name: "じゃけえ",
  age: 28
};
val4.name = "jak";
console.log(val4);

const val5 = ["dog", "cat"];
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = 28;
// 私の名前はじゃけえです。年齢は28歳です。
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

// テンプレート文字列を用いた場合
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));

const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

const func4 = (str) => str;

console.log(func4("func4です"));

const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name: "じゃけえ",
  age: 28
};

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message3);

const { name, age } = myProfile;
const message4 = `名前は${name}です。年齢は${age}です`;
console.log(message4);

const myProfile_array = ["やこ", 48];
const message5 = `名前は${myProfile_array[0]}です。年齢は${myProfile_array[1]}です`;
console.log(message5);

const [name6, age6] = myProfile_array;
const message6 = `名前は${name6}です。年齢は${age6}です`;
console.log(message6);

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
sayHello();

/**
 * スプレット構文
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー・結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);
const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
console.log(arr8);
arr8[0] = 100;
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけえ"];

for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけえ") return name;
  return `${name}さん`;
});
console.log(newNameArr);

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
nameArr2.map((name) => console.log(name));

const numArr3 = [1, 2, 3, 4, 5];
const newNumAttr3 = numArr3.filter((num) => num % 2 !== 0);
console.log(newNumAttr3);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val11 = 1 > 0 ? "trueです" : "falseです";
console.log(val11);

const num = 1300;
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
};
console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 *
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになる");
}

// ||は左側がfalseなら右側を返す
const num100 = 100;
const fee = num100 || "金額未設定です";
console.log(fee);
// ||は左側がfalseなら右側を返す
const num200 = 200;
const fee200 = num200 && "金額設定です";
console.log(fee200);
