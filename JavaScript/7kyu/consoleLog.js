// "console.log" and the Lexical "this"
// https://www.codewars.com/kata/56fa93d36883c783ec0001d1

// My code
const oldConsoleLog = console.log
console.log = (val) => {
  this.answer = val;
  oldConsoleLog(val)
}

// Explanation
// 使用箭頭函式複寫 console.log，因為箭頭函式的 this 會以當下執行環境的 this 綁定，可以綁到全域變數的值。
// 如果使用 function 來寫， function 會綁定調用當下的 this，因此會綁到 console.log 的 this。