class FourAction {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }
}
class Traffic extends FourAction {
  constructor(properties) {
    super(properties.selector);
    this.element.style.width = properties.sizeWidth + "px";
    this.element.style.height = properties.sizeHeight + "px";
    this.element.style.background = properties.color;
    this.element.style.margin = properties.margin + "px";
    this.element.style.marginLeft = properties.marginLeft + "px";
    this.element.style.marginTop = properties.marginTop + "px";
    this.element.style.borderRadius = properties.borderRadius + "px";
    this.element.style.paddingTop = properties.paddingTop + "px";
  }
}

const block_01 = new Traffic({
  selector: "#block_parent",
  sizeWidth: 100,
  sizeHeight: 250,
  color: "black",
  margin: 10,
  borderRadius: 10,
  marginLeft: 700,
});

const block_parent_inner = new Traffic({
  selector: "#block_parent_inner",
  paddingTop: 12,
});

const block1_inner_1 = new Traffic({
  selector: ".block1_inner_1",
  sizeWidth: 60,
  sizeHeight: 60,
  color: "grey",
  marginLeft: 20,
  borderRadius: 100,
});

const block1_inner_2 = new Traffic({
  selector: ".block1_inner_2",
  sizeWidth: 60,
  sizeHeight: 60,
  color: "grey",
  marginLeft: 20,
  borderRadius: 100,
  marginTop: 20,
});

const block1_inner_3 = new Traffic({
  selector: ".block1_inner_3",
  sizeWidth: 60,
  sizeHeight: 60,
  color: "grey",
  marginLeft: 20,
  borderRadius: 100,
  marginTop: 20,
});

const colorTraffic = Number(
  prompt("Выберите цвет светофора : 1.Red 2.Yellow 3.Green")
);
if (colorTraffic === 1) {
  block1_inner_1 = new Traffic({
    selector: ".block1_inner_1",
    color: "red",
  });
} else if (colorTraffic === 2) {
  block1_inner_2 = new Traffic({
    selector: ".block1_inner_2",
    color: "yellow",
  });
} else if (colorTraffic === 3) {
  block1_inner_3 = new Traffic({
    selector: ".block1_inner_3",
    color: "green",
  });
} else {
  alert("error");
}
