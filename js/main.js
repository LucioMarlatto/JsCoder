    alert ('Bienvenidos a Karma')


// const mostrarProductos = () => {
//     const contenedor = document.getElementById("producto-contenedor");

//     productos.forEach( producto => {
//         const div = document.createElement("div");
//         div.classList.add("card");
//         div.innerHTML = `<div class="card-image">
//                             <img src=${producto.img}>
//                             <span class="card-title">${producto.nombre}</span>
//                         </div>
//                         `
//         contenedor.appendChild(div);
//     });
// };

// mostrarProductos();


function cambiarModo() { 
    const cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("darkmode"); 
}

