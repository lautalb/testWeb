var producto = [];
//clase producto
class Producto{
    constructor(){
        
    }
    constructor(id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
        producto = new Array();
    }
}
//funcion que agrega un producto a la lista
function agregarProductoLista(producto1){
    
        this.producto.push(producto1);
    
}

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

export default Producto;