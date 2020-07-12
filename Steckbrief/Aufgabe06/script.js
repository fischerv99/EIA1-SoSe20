"use strict";
window.addEventListener("load", function () {
    var emissionAbsolutEurope = 4209.3;
    var relativeEurope = 100 / (31116.5 / 4209.3);
    var growthEurope = ((4209.3 - 4965.7) / 4965.7) * 100;
    var growthAbsoluteEurope = 4209.3 - 4965.7;
    var emissionAbsolutNorthA = 6035.6;
    var relativeNorthA = 100 / (31116.5 / 6035.6);
    var growthNorthA = (6035.6 - 6600.4) / 6600.4;
    var growthAbsoluteNorthA = 6035.6 - 6600.4;
    var emissionAbsolutSouthA = 1261.5;
    var relativeSouthA = 100 / (31116.5 / 1261.5);
    var growthSouthA = (1261.5 - 1132.6) / 1132.6;
    var growthAbsoluteSouthA = 1261.5 - 1132.6;
    var emissionAbsolutAfrica = 1235.5;
    var relativeAfrica = 100 / (31116.5 / 1235.5);
    var growthAfrica = ((1235.5 - 1028) / 1028) * 100;
    var growthAbsoluteAfrica = 1235.5 - 1028;
    var emissionAbsolutAsia = 16274.1;
    var relativeAsia = 100 / (31116.5 / 16274.1);
    var growthAsia = ((16274.1 - 12954.7) / 12954.7) * 100;
    var growthAbsoluteAsia = 16274.1 - 12954.7;
    var emissionAbsolutAustralia = 2100.5;
    var relativeAustralia = 100 / (31116.5 / 2100.5);
    var growthAustralia = ((2100.5 - 1993) / 1993) * 100;
    var growthAbsoluteAustralia = 2100.5 - 1993;
    function myeurope() {
        document.querySelector("#titleRegion").innerHTML = "Europe";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeEurope + "px");
        document.querySelector("#europa1").innerHTML = emissionAbsolutEurope;
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Europe in 2018";
        document.querySelector("#europa2").innerHTML = relativeEurope.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = growthEurope.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = growthAbsoluteEurope.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function myeurope_onmouseover() {
        document.querySelector("#titleRegion").innerHTML = "Europe Tlulala";
    }
    function myeurope_onmouseover2() {
        document.querySelector("#titleRegion").innerHTML = "Europe Mouseover 2";
    }
    function mynorthamerica() {
        document.querySelector("#titleRegion").innerHTML = "North America";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeNorthA + "px");
        document.querySelector("#europa1").innerHTML = emissionAbsolutNorthA;
        document.querySelector("#europa1text").innerHTML = "Emission absolute of North America in 2018";
        document.querySelector("#europa2").innerHTML = relativeNorthA.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = growthNorthA.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = growthAbsoluteNorthA.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function mysouthamerica() {
        document.querySelector("#titleRegion").innerHTML = "South America";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeSouthA + "px");
        document.querySelector("#europa1").innerHTML = emissionAbsolutSouthA;
        document.querySelector("#europa1text").innerHTML = "Emission absolute of South America in 2018";
        document.querySelector("#europa2").innerHTML = relativeSouthA.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = growthSouthA.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = growthAbsoluteSouthA.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function myafrica() {
        document.querySelector("#titleRegion").innerHTML = "Africa";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeAfrica + "px");
        document.querySelector("#europa1").innerHTML = emissionAbsolutAfrica;
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Africa in 2018";
        document.querySelector("#europa2").innerHTML = relativeAfrica.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = growthAfrica.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = growthAbsoluteAfrica.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function myasia() {
        document.querySelector("#titleRegion").innerHTML = "Asia";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeAsia + "px");
        document.querySelector("#europa1").innerHTML = emissionAbsolutAsia;
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Asia in 2018";
        document.querySelector("#europa2").innerHTML = relativeAsia.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = growthAsia.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = growthAbsoluteAsia.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    function myaustralia() {
        document.querySelector("#titleRegion").innerHTML = "Australia";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeAustralia + "px");
        document.querySelector("#europa1").innerHTML = emissionAbsolutAustralia;
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Australia in 2018";
        document.querySelector("#europa2").innerHTML = relativeAustralia.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
        document.querySelector("#europa3").innerHTML = growthAustralia.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
        document.querySelector("#europa4").innerHTML = growthAbsoluteAustralia.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    }
    document.querySelector(".europe").addEventListener("click", myeurope);
    document.querySelector(".europe").addEventListener("dblclick", myeurope_onmouseover);
    document.querySelector(".europe").addEventListener("mouseover", myeurope_onmouseover2);
    document.querySelector(".northamerica").addEventListener("click", mynorthamerica);
    document.querySelector(".southamerica").addEventListener("click", mysouthamerica);
    document.querySelector(".africa").addEventListener("click", myafrica);
    document.querySelector(".asia").addEventListener("click", myasia);
    document.querySelector(".australia").addEventListener("click", myaustralia);
});
//# sourceMappingURL=script.js.map