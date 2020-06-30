
let todos: string[] = ["Einkaufen", "Konzert", "Beton holen"];

window.addEventListener("load", function () {


    var macheliste = document.querySelector(".add");
    list();

    function list() {

        var counter = document.querySelector("#mySpan");// counter setzen
        counter.innerHTML = todos.length;

        macheliste.innerHTML = ""; //array & deletebtn
        for (let index = 0; index < todos.length; index++) {
            macheliste.innerHTML += "<div>" + "<input type='checkbox'>" + todos[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";

            //array-element löschen
            // JETZT hier platziert. Am ALTEN Platz hat das löschen nur fkt bis man einen eigenen task geaddet hat.
            var close = document.getElementsByClassName("fas fa-trash-alt");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                    todos[index] = ("");
                    todos.splice(index);
                };
        
            }
        }
    }


    var addbfunc = document.querySelector(".addtask");

    var addNewElement = document.querySelector(".addb");
    addNewElement.addEventListener("click", function () {
        todos.push(addbfunc.value);
        list();
        addbfunc.value = "";
    });

    //array-element löschen: ALTERPLATZ

}
});
//Grundlage des Codes: EIA Praktikum.
