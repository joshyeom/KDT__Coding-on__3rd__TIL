function submitjs() {
  document.querySelector(".div1").innerText = "반갑습니다";
  document
    .querySelector(".div1")
    .setAttribute("style", "border: 2px solid red;");
}

function submitjquery() {
  $(".div1").text("반갑습니다");
  $(".div1").css("border", "3px dotted blue");
}

function getValue() {
  let value = $(".input").val();
  alert(value);
}

function setValue() {
  $(".input").val("설정 완료!");
}

function changeCssJs() {
  let span = document.querySelector(".span");
  span.style = "font-size: 20px; color: red;";
}

function changeCssJqeury() {
  $(".span").css("font-size", "40px");
  $(".span").css("color", "blue");
  //   $("span").css({
  //     "font-size": "40px",
  //     color: "blue",
  //   });
}

function getCssJqeury() {
  console.log($(".span").css("color"));
}