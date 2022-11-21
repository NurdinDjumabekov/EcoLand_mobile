const input_start = document.getElementById("input_start");
const input_end = document.getElementById("input_end");
const button = document.getElementById("button");

const reverss = () => {
  if (input_start.value.trim() === "") {
    return false;
  } else {
    let arr = [];
    let str_1 = input_start.value;
    arr = str_1.split("");
    let arr_2 = arr.reverse();
    let str_2 = arr_2.join();
    str_2 = str_2.replace(/[,\s]/gi, "");
    input_end.value = str_2;
    input_start.value = "";
  }
};

button.onclick = () => {
  reverss();
};

// button.addEventListener("click", reverss);
/////////////////////////////////////////////////
input_start.addEventListener("keydown", (e) => {
  e.keyCode === 13 ? reverss() : false;
});
