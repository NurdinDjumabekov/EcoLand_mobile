const numberMin = (a, b) => {
  a < b
    ? console.log("Минимальное число :", a)
    : a > b
    ? console.log("Минимальное число :", b)
    : a === b
    ? console.log("Числа ", a, "and", b, "равны!")
    : console.log("error");
};
numberMin(-100, -10);
