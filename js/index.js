var counter = 0;

function watchForm() {
    let place = document.getElementById("list");

    // Añadir elementos
    let añadir = document.getElementById("sbmt");
    añadir.addEventListener("click", ( event ) => {
        event.preventDefault();
        console.log("Binded correctly");

        var item = document.createElement("li");

        let text = document.getElementById("text");
        if (text.value != "")
        {
            console.log("dentro");
            counter++;
            var inp = document.createElement("input");
            inp.type = "checkbox";
            inp.id = counter;
            item.id = "item" + counter;

            var label = document.createElement('label'); 
            label.htmlFor = inp.id;
            label.appendChild(document.createTextNode(text.value));

            item.appendChild(inp);
            item.appendChild(label);

            place.appendChild(item);

            text.value = "";
        }
    });

    // Marcar todos los elementos
    let marcar = document.getElementById("marcar");
    marcar.addEventListener("click", ( event ) => {
        var i;
        for (i = 1; i <= counter; i++)
        {
            if (document.getElementById(i).checked == false) {
                document.getElementById(i).checked = true;
            }
        }
    });

    // Desmarcar todos los elementos
    let desmarcar = document.getElementById("limpiar");
    desmarcar.addEventListener("click", ( event ) => {
        var i;
        for (i = 1; i <= counter; i++)
        {
            if (document.getElementById(i).checked == true) {
                document.getElementById(i).checked = false;
            }
        }
    });

    // Eliminar elementos
    let quitar = document.getElementById("quitar");
    quitar.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Borrar");

        var i;
        for (i = 1; i <= counter; i++)
        {
            let element = document.getElementById("item" + i);
            element.parentNode.removeChild(element);
        }
        counter = 0;
    });

}

watchForm();