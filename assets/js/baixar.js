function baixar(versao) {
    var version = "";

    switch (versao) {
        case 1:
            version = "v1.0.0";
            break;
        case 2:
            version = "v2.0.0";
            break;
        default:
            version = "v1.0.0"
            break;
    }


    var a = document.createElement("a");
    a.href = "https://github.com/wsequipamentoshospitalares/wsequipamentoshospitalares.github.io/releases/download/" + version + "/wssistemas.apk";
    a.click();
}