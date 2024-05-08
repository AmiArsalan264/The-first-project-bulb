let img = document.getElementById("lamp");
let btm = document.getElementById("btm");

let lampFlag = false;

function OnOrOff() {
  if (lampFlag) {
    img.setAttribute("src", "./img/Off.jpg");
    btm.innerHTML="ON"
    lampFlag = false;
  } else {
    img.setAttribute("src", "./img/On.jpg");
    btm.innerHTML="Off"
    lampFlag = true;
  }

}
