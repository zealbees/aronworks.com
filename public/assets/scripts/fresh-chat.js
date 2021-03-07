function initFreshChat() {
  window.fcWidget.init({
    token: "f7b2428e-6a7f-4039-87e4-83711f00ac51",
    host: "https://wchat.in.freshchat.com",
  });
}

function initialize(i, t) {
  var e;
  i.getElementById(t)
    ? initFreshChat()
    : (((e = i.createElement("script")).id = t),
      (e.async = !0),
      (e.src = "https://wchat.in.freshchat.com/js/widget.js"),
      (e.onload = initFreshChat),
      i.head.appendChild(e));
}

function initiateCall() {
  initialize(document, "freshchat-js-sdk");
}

window.addEventListener
  ? window.addEventListener("load", initiateCall, !1)
  : window.attachEvent("load", initiateCall, !1);

// window.fcWidget.init({
//   token: "99198db8-ea46-4f69-a106-4fd0076835b4",
//   host: "https://wchat.freshchat.com",
// });
// window.fcWidget.hide();
