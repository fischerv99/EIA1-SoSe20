
let todos: string[] = ["Einkaufen", "Konzert", "Beton holen"];

window.addEventListener("load", function () {

    // Ausgabe der Array-Elemente + Anzeige des Papierkorbs
    var macheliste = document.querySelector(".add");
    list();

    function list() {
         
        var counter = document.querySelector("#mySpan");// counter setzen
        counter. innerHTML = todos.length;

        macheliste.innerHTML = ""; //array & deletebtn
        for (var index = 0; index < todos.length; index++) {
            macheliste.innerHTML += "<div>" + "<input type='checkbox'>" + todos[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
    }
    // Klick auf add-button1 pusht neues Element hinzu

    var addbfunc = document.querySelector(".addtask");

    var addNewElement = document.querySelector(".addb");
    addNewElement.addEventListener("click", function () {
        todos.push(addbfunc.value);
        list();
        addbfunc.value = "";
    });

    //array-element löschen
    //Absolut keine Ahnung wie, wenn ich in html keine liste verwenden will.
    //Idee: Klick auf delete -> function xyz wird aufgerufen -> remove elemet (oderso) -> löscht das element vom array -> array wird neu ausgegeben ohne das gelöschte element
    // Umsetzung ???

    }
    












});
//Grundlage des Codes: EIA Praktikum.
