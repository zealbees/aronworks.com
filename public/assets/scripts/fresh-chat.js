function initFreshChat() {
    window.fcWidget.init({
        token: "d79aecd5-c0f9-406f-8c64-fc81d44a614f",
        host: "https://wchat.in.freshchat.com"
    });
}

function initialize(i, t) {
    var e;
    i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.in.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e))
}

function initiateCall() {
    initialize(document, "freshchat-js-sdk")
}

window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load", initiateCall, !1);
