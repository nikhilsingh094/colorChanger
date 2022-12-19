function channgeBG(color) {
  document.body.style.backgroundColor = color;
  let txt = document.getElementsByClassName("txt");
  if (color == "black") {
    for(elm of txt) {
      elm.style.color = "white";
    }
  } else {
    for(elm of txt) {
      elm.style.color = "black";
    }
  }
}
