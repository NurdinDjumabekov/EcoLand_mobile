let cout = Number(prompt("Выберите 1.красный 2.жёлтый 3.зелёный"));
const traffic_one = document.querySelector("#red");
const traffic_one_inside = document.querySelector("#text_stop");
const traffic_two = document.querySelector("#yellow");
const traffic_two_inside = document.querySelector("#text_expectetion");
const traffic_tree = document.querySelector("#green");
const traffic_tree_inside = document.querySelector("#text_go");

if (cout === 1) {
  traffic_one.style.background = "red";
  traffic_one_inside.style.color = "black";
  traffic_one_inside.innerText = "STOP!!!";
} else if (cout === 2) {
  traffic_two.style.background = "yellow";
  traffic_two_inside.style.color = "black";
  traffic_two_inside.innerText = "Ожидайте";
} else if (cout === 3) {
  traffic_tree.style.background = "green";
  traffic_tree_inside.style.color = "black";
  traffic_tree_inside.innerText = "GO";
} else {
  alert("error");
}
