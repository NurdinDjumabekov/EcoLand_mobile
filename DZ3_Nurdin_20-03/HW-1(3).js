// первый калькулятор

// const calculator = (
//   a = Number(prompt("Введите первое число")),
//   b = Number(prompt("Введите второе число")),
//   c = Number(prompt("Введите третье число")),
//   len = Number(
//     prompt("Выбирите действие : 1.Умножение 2.Деление 3.Сложение 4.Вычитание ")
//   )
// ) => {
//   if (len == 1) {
//     let multiplication = a * b * c;
//     alert("Ваш результат :" + multiplication);
//   } else if (len == 2) {
//     let division = a / b / c;
//     alert("Ваш результат :" + division);
//   } else if (len == 3) {
//     let addition = a + b + c;
//     alert("Ваш результат :" + addition);
//   } else if (len == 4) {
//     let subtraction = a - b - c;
//     alert("Ваш результат :" + subtraction);
//   } else {
//     alert("error");
//   }
// };
// calculator();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// второй калькулятор

// const calculator = (
//   len = Number(
//     prompt("Выбирите действие : 1.Умножение 2.Деление 3.Сложение 4.Вычитание ")
//   )
// ) => {
//   let a = Number(prompt("Введите первое число"));
//   let b = Number(prompt("Введите второе число"));
//   let c = Number(prompt("Введите третье число"));
//   if (len == 1) {
//     let multiplication = a * b * c;
//     alert(multiplication);
//   } else if (len == 2) {
//     let division = a / b / c;
//     alert(division);
//   } else if (len == 3) {
//     let addition = a + b + c;
//     alert(addition);
//   } else if (len == 4) {
//     let subtraction = a - b - c;
//     alert(subtraction);
//   } else {
//     alert("error");
//   }
// }
// calculator();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// третий калькулятор

// let n = 1;
// while (n === 1) {
//   function calculator() {
//     const choice = prompt(
//       "Выбирите действие : 1.Умножение 2.Деление 3.Сложение 4.Вычитание"
//     );
//     const a = prompt("Введите первое число : ");
//     const b = prompt("Введите второе число : ");

//     const operation = [false, "+", "-", "*", "/"][choice] || false;
//     if (!operation) return alert("error");

//     return eval(a + " " + operation + " " + b + ";");
//   }
//   alert(calculator());
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// четвертый калькулятор

// let len = Number(
//   prompt("Выбирите действие : 1.Умножение 2.Деление 3.Сложение 4.Вычитание ")
// );
// sumNumbers = Number(prompt("Задайте количество цифр,которое хотите ввести"));
// const calculator = (len, sumNumbers) => {
//   let sum = 1;
//   let arr2 = [];
//   let i = 0;
//   let m = -1;
//   while (arr2.length < sumNumbers) {
//     arr2.push(Number(prompt("Введите число : Числа не должны повторяться! ")));
//     // alert(arr2);
//     if (len === 1) {
//       if (i < arr2.length) {
//         sum *= arr2[i];
//       }
//     } else if (len === 2) {
//       if (i < arr2.length) {
//         sum = sum / arr2[i];
//         if (arr2[0] === arr2[i]) {
//           sum = sum * arr2[0] * arr2[0];
//         }
//       }
//     } else if (len === 3) {
//       if (i < arr2.length) {
//         sum += arr2[i];
//         if (arr2[0] === arr2[i]) {
//           sum = sum - 1;
//         }
//       }
//     } else if (len === 4) {
//       if (i < arr2.length) {
//         sum -= arr2[i];
//         if (arr2[0] === arr2[i]) {
//           sum = sum * m + 1;
//         }
//       }
//     } else {
//       ("error!!!!");
//     }
//     i++;
//   }
//   alert(sum);
// };
// calculator(len, sumNumbers);
