
window.addEventListener("load", function() {

    var emissionAbsolutEurope: number = 4209.3;
    var relativeEurope: number = 100 / (31116.5 / 4209.3);
    var growthEurope: number = ((4209.3 - 4965.7) / 4965.7) * 100;
    var growthAbsoluteEurope: number = 4209.3 - 4965.7;   
    
    var emissionAbsolutNorthA: number = 6035.6;
    var relativeNorthA: number = 100 / (31116.5 / 6035.6);
    var growthNorthA: number = (6035.6 - 6600.4) / 6600.4;
    var growthAbsoluteNorthA: number = 6035.6 - 6600.4;
    
    var emissionAbsolutSouthA: number = 1261.5;
    var relativeSouthA: number = 100 / (31116.5 / 1261.5);
    var growthSouthA: number = (1261.5 - 1132.6) / 1132.6;
    var growthAbsoluteSouthA: number = 1261.5 - 1132.6;
    
    var emissionAbsolutAfrica: number = 1235.5;
    var relativeAfrica: number = 100 / (31116.5 / 1235.5);
    var growthAfrica: number = ((1235.5 - 1028) / 1028) * 100;
    var growthAbsoluteAfrica: number = 1235.5 - 1028;
    
    var emissionAbsolutAsia: number = 16274.1;
    var relativeAsia: number = 100 / (31116.5 / 16274.1);
    var growthAsia: number = ((16274.1 - 12954.7) / 12954.7) * 100;
    var growthAbsoluteAsia: number = 16274.1 - 12954.7;
    
    
    var emissionAbsolutAustralia: number = 2100.5;
    var relativeAustralia: number = 100 / (31116.5 / 2100.5);
    var growthAustralia: number = ((2100.5 - 1993) / 1993) * 100;
    var growthAbsoluteAustralia: number = 2100.5 - 1993;
    
    
    
    
    function myeurope() {
    
        document.querySelector("#titleRegion").innerHTML = "Europe";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeEurope + "px")
    
        document.querySelector("#europa1").innerHTML = emissionAbsolutEurope;
        document.querySelector("#europa1text").innerHTML = "Emission absolute of Europe in 2018";
    
        document.querySelector("#europa2").innerHTML = relativeEurope.toFixed(2) + "%";
        document.querySelector("#europa2text").innerHTML = "Relative to total world's emission";
    
        document.querySelector("#europa3").innerHTML = growthEurope.toFixed(2) + "%";
        document.querySelector("#europa3text").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    
        document.querySelector("#europa4").innerHTML = growthAbsoluteEurope.toFixed(2);
        document.querySelector("#europa4text").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    
    
        }
    
    
    
    
    function mynorthamerica() {
    
        document.querySelector("#titleRegion").innerHTML = "North America";
        document.querySelector(".chart").setAttribute("style", "height:" + relativeNorthA + "px")
        
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
        document.querySelector(".chart").setAttribute("style", "height:" + relativeSouthA + "px")
            
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
        document.querySelector(".chart").setAttribute("style", "height:" + relativeAfrica + "px")
            
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
        document.querySelector(".chart").setAttribute("style", "height:" + relativeAsia + "px")
            
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
        document.querySelector(".chart").setAttribute("style", "height:" + relativeAustralia + "px")
            
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
    document.querySelector(".northamerica").addEventListener("click", mynorthamerica);
    document.querySelector(".southamerica").addEventListener("click", mysouthamerica);
    document.querySelector(".africa").addEventListener("click", myafrica);
    document.querySelector(".asia").addEventListener("click", myasia);
    document.querySelector(".australia").addEventListener("click", myaustralia);
    
        
    
    })
    
    
    
    
    
    