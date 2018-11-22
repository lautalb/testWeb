
firebase.initializeApp({
    apiKey: "AIzaSyDS65jP2B89qAA81-BGNxP1NcQKao5Q8bI",
    authDomain: "testcarritofrontend.firebaseapp.com",
    projectId: "testcarritofrontend"
  });

  // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
//lista de productos

var producto = [];
//clase producto
class Producto{
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
    }
}

//funcion que agrega un producto a la lista
 function agregarProductoLista(p){
        this.producto.push(p);
}
//funcion que verifica si esta en el array el producto, si esta devuelve true, si no false
 function verificarProductoEnLista(p){
    var check = false;
        for(var i = 0; i < producto.length; i++){
            if(producto[i].id == p.id){
                check = true;
                break;
            }
        }
    return check;
}
//funcion para sumar la cantidad del producto ya existente en el array de productos
function sumarCantidad(p){
    for(var i=0; i< producto.length;i++){
        if(producto[i].id == p.id){
            producto[i].cantidad ++;
            break;
        }
    }
}
//con esto cargamos la tabla de los productos disponibles
var tabla = document.getElementById("tabla");
db.collection("productos").onSnapshot((querySnapshot) => {
  tabla.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().nombre}`);
    tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().precio}</td>
        <td><button class="btn btn-warning" onclick="agregar('${doc.id}','${doc.data().nombre}','${doc.data().precio}')">Agregar</button></td>
        </tr>
        `
  });
});
//funcion para agregar el producto al carrito.
function agregar(id, nombre, precio){
  var tabla = document.getElementById("tablaCarrito");
  var productoNuevo = new Producto(id, nombre, precio);
    //si el array de productos tiene 0 lo agrega directamente, si no hace un for para verificar
    //que recorre el array, si el producto ya esta en el array suma la cantidad dle producto +1
    // si no, lo agrega directamente como un producto nuevo en la lista.
    if(producto.length==0){
        this.agregarProductoLista(productoNuevo);
        this.cantidad ++;
    }else{
        for(var i = 0; i<producto.length; i++){
            
            if(this.verificarProductoEnLista(productoNuevo)){
                console.log("Esta en la lista");
                this.sumarCantidad(productoNuevo);
                break;
            }else{
                console.log("Se agrego a la lista");
                this.agregarProductoLista(productoNuevo);
                break;
            }
        }
    }

    
    
  //onsole.log(JSON.stringify(producto));
  //for para ver lo que va cargando el array
  producto.forEach(function(element){
      console.log(element);
  });
    //console.log(producto.length);
    //paso el array a un json
    var jsonArray = JSON.stringify(producto);
    
    tabla.innerHTML = "";
    //console.log(jsonArray.length);
    //for que llena la tabla con el id: tablaCarrito
    for(var i = 0; i< producto.length; i++){
        var row = tabla.insertRow(i);
        var idCell = row.insertCell(0),
            nameCell = row.insertCell(1),
            precioCell = row.insertCell(2),
            cantidadCell =  row.insertCell(3);
        idCell.innerHTML = producto[i].id;
        nameCell.innerHTML = producto[i].nombre;
        precioCell.innerHTML = producto[i].precio;
        cantidadCell.innerHTML = producto[i].cantidad;

        tabla.appendChild(row);
    }
   
}





