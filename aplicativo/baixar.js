function baixar() {
    var a = document.createElement("a");
    a.href = "aplicativo";
    a.setAttribute("download", "wssistemas-v1.apk");
    a.click();
}