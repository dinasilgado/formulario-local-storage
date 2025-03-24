// Array para almacenar los contactos//
let contactos = JSON.parse(localStorage.getItem('contactos')) ||[];
document.querySelector("form").addEventListener("submit", function(event) {
 event.preventDefault();
    
// Obtener valores de el formulario//
 const nuevoContacto = {
     nombre: document.getElementById("nombre").value,
     email: document.getElementById("email").value,
     mensaje: document.getElementById("mensaje").value,
     url: document.getElementById("url").value,
    }
    contactos.push(nuevoContacto)
    localStorage.setItem("contactos", JSON.stringify(contactos));
    })
   

// Función para mostrar los contactos
function mostrarContactos() {
    const listaContactos = document.getElementById("listaContactos");
    listaContactos.innerHTML = "";
    
    contactos.forEach((contacto, index) => {
        const contactoDiv = document.createElement("div");
        contactoDiv.innerHTML = `
            <p>Nombre: ${contacto.nombre}</p>
            <p>Email: ${contacto.email}</p>
            <p>Mensaje: ${contacto.mensaje}</p>
            <p>URL: ${contacto.url}</p>
            <button onclick="borrarContacto(${index})">Eliminar</button>
            <hr>
        `;
        listaContactos.appendChild(contactoDiv);
    });
}

// Borrar todos los contactos
document.getElementById("borrarTodo").addEventListener("click", function() {
    localStorage.clear();
    contactos = [];
    mostrarContactos();
    alert('Todos los contactos han sido eliminados');
});

// Borrar contacto individual
function borrarContacto(index) {
    contactos.splice(index, 1);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos();
    alert('Contacto eliminado correctamente');
}

// Actualizar la lista cuando se añade un nuevo contacto
document.querySelector("form").addEventListener("submit", function(event) {
    mostrarContactos();


mostrarContactos();
 
    })
  //  borrar item//
  
  document.getElementById("borrar").addEventListener("click", function() {
    localStorage.removeItem('nombre'); 
    contactos = []; 
    alert('Todos los contactos han sido eliminados');
})