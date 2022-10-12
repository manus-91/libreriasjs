const localCibeles = {
        nombre: "Cibeles",
        pais: "Argentina",
        provincia: "Santa fe",
        localidad: "Rosario",
        direccion: "BV Segui 739",
        telefono: 034125455445
}




const textBox = document.querySelector("#user"); 
textBox.addEventListener("input", () => console.log(textBox.value));



function solicitarNombre() {
        let nombreIngresado = prompt("ingresar nombre ")
        alert("Hola " + nombreIngresado)
}
solicitarNombre();

function solicitarDireccion() {
        let direccionIngresada = prompt("Ingresar direccion a enviar")
        alert("Te enviaremos el pedido a " + direccionIngresada)
}
solicitarDireccion();


const platos = [" Canelones "," Carne al horno "," Pastel de carne "," Guiso de lentejas "]
alert("Nuestros platos son: " + platos)



let option;


if(option!==0) {
option = Number(prompt("Ingrese una opcion:\n1. Agregar a mis pedidos\n0. Salir "));
switch (option) {
        case 1:
                Number(prompt("Ingrese el plato:\n 1. Canelones\n 2. Carne al horno\n 3. Pastel de carne\n 4. Guiso de lentejas \n0. Salir"))
                break;
                
        case 0:        
                alert("Gracias, hasta la proxima");
                break;
        default:
                alert("la opcion ingresada no es correcta, intente de nuevo ");
                break;
}
}

localStorage.setItem("Datos comercio" , JSON.stringify(localCibeles))


const datosLocal = JSON.parse(localStorage.getItem(localCibeles));
console.log(datosLocal);

Toastify({
        text: "Gracias. No te olvides de seguirnos en Instagram",
        duration: 3000,
        destination: "https://www.instagram.com",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
}).showToast();