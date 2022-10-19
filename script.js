consultarFinca();
consultarCliente();
consultarMensaje();
function limpiarPantalla(){
    document.getElementById("farmID").value="";
    document.getElementById("address").value="";
    document.getElementById("exension").value="";
    document.getElementById("category_id").value="";
    document.getElementById("name_finca").value="";
    document.getElementById("clientID").value="";
    document.getElementById("nameClient").value="";
    document.getElementById("email").value="";
    document.getElementById("age").value="";
    document.getElementById("clientID").value="";
    document.getElementById("messagetext").value="";

}

function crearFinca(){
    event.preventDefault();//evita que refresque pantalla
    const json ={};
    json["id"] = parseInt( document.getElementById("farmID").value);
    json["address"]= document.getElementById("address").value;
    json["exension"]= parseInt( document.getElementById("exension").value);
    json["category_id"]= parseInt( document.getElementById("category_id").value);
    json["name"]= document.getElementById("name_finca").value;

    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/farm/farm',
        data: json,
        type: "POST",
        dataType: 'json',
        complete: function(){
            alert("Peticion OK")
            limpiarPantalla();
            location.reload();
        }
    })
}

function consultarFinca(){
    const table = document.getElementById("listaFinca").getElementsByTagName('tbody')[0];
    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/farm/farm',
        data: null,
        type: "GET",
        dataType: 'json',
        success : function(data){
            data.items.map(item => { //console.log("Estudiante ->",item); muestra elementos en consola
                const nuevoFinca = table.insertRow();
                nuevoFinca.insertCell(0).innerHTML = item.id;
                nuevoFinca.insertCell(1).innerHTML = item.address;
                nuevoFinca.insertCell(2).innerHTML = item.exension;
                nuevoFinca.insertCell(3).innerHTML = item.category_id;
                nuevoFinca.insertCell(4).innerHTML = item.name;
                nuevoFinca.insertCell(5).innerHTML = `
                    <button onClick="seleccionarFinca(this)">Seleccionar</button>
                    <button onClick="eliminarFinca(${item.id})">Eliminar</button>
                `;
        })
  
        },
        error : function(error){
            console.log(error);
        },
        complete: function(){
        }
    })
}
function seleccionarFinca(elemento){
    const finca = elemento.parentElement.parentElement;
    document.getElementById("farmID").value=finca.cells[0].innerHTML;
    document.getElementById("address").value=finca.cells[1].innerHTML;
    document.getElementById("exension").value=finca.cells[2].innerHTML;
    document.getElementById("category_id").value=finca.cells[3].innerHTML;
    document.getElementById("name_finca").value=finca.cells[4].innerHTML;
}

function editarFinca(){
    const json ={};
    json["id"] = parseInt( document.getElementById("farmID").value);
    json["address"]= document.getElementById("address").value;
    json["exension"]= parseInt(document.getElementById("exension").value);
    json["category_id"]= parseInt(document.getElementById("category_id").value);
    json["name"]= document.getElementById("name_finca").value;

    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/farm/farm',
        data: json,
        type: "PUT",
        dataType: 'json',
        complete: function(){
            alert("Editar OK")
            limpiarPantalla();
            location.reload();
        }
    })
}

function eliminarFinca(id){
    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/farm/farm/'+id,
        data: null,
        type: "DELETE",
        dataType: 'json',
        complete: function(){
            alert("Eliminacion OK")
            location.reload();
        }
    })
}//--- fin control de finca-------------//---------------------------------------//-------------------------------
//-------------------**---------------------------------**----------------------------

function crearCliente(){
    event.preventDefault();//evita que refresque pantalla
    const json ={};
    json["id"] = parseInt( document.getElementById("clientID").value);
    json["name"]= document.getElementById("nameClient").value;
    json["email"]= document.getElementById("email").value;
    json["age"]= parseInt( document.getElementById("age").value);

    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        data: json,
        type: "POST",
        dataType: 'json',
        complete: function(){
            alert("Peticion OK")
            limpiarPantalla();
            location.reload();
        }
    })
}

function consultarCliente(){
    const table = document.getElementById("listaCliente").getElementsByTagName('tbody')[0];
    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        data: null,
        type: "GET",
        dataType: 'json',
        success : function(data){
            data.items.map(item => { //muestra elementos en consola
                const nuevoCliente = table.insertRow();
                nuevoCliente.insertCell(0).innerHTML = item.id;
                nuevoCliente.insertCell(1).innerHTML = item.name;
                nuevoCliente.insertCell(2).innerHTML = item.email;
                nuevoCliente.insertCell(3).innerHTML = item.age;
                nuevoCliente.insertCell(4).innerHTML = `
                    <button onClick="seleccionarCliente(this)">Seleccionar</button>
                    <button onClick="eliminarCliente(${item.id})">Eliminar</button>
                `;
        })
  
        },
        error : function(error){
            console.log(error);
        },
        complete: function(){
        }
    })
}
function seleccionarCliente(elemento){
    const clientes = elemento.parentElement.parentElement;
    document.getElementById("clientID").value=clientes.cells[0].innerHTML;
    document.getElementById("nameClient").value=clientes.cells[1].innerHTML;
    document.getElementById("email").value=clientes.cells[2].innerHTML;
    document.getElementById("age").value=clientes.cells[3].innerHTML;
}

function editarCliente(){
    const json ={};
    json["id"] = parseInt( document.getElementById("clientID").value);
    json["name"]= document.getElementById("nameClient").value;
    json["email"]= document.getElementById("email").value;
    json["age"]= parseInt(document.getElementById("age").value);
    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        data: json,
        type: "PUT",
        dataType: 'json',
        complete: function(){
            alert("Editar OK")
            limpiarPantalla();
            location.reload();
        }
    })
}

function eliminarCliente(id){
    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/'+id,
        data: null,
        type: "DELETE",
        dataType: 'json',
        complete: function(){
            alert("Eliminacion OK")
            location.reload();
        }
    })
}//--- fin control de Cliente-------------//---------------------------------------//-------------------------------
//-------------------**---------------------------------**----------------------------
function crearMensaje(){
    event.preventDefault();//evita que refresque pantalla
    const json ={};
    json["id"] = parseInt( document.getElementById("mesasgeID").value);
    json["messagetext"]= document.getElementById("messagetext").value;

    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        data: json,
        type: "POST",
        dataType: 'json',
        complete: function(){
            alert("Peticion OK")
            limpiarPantalla();
            location.reload();
        }
    })
}

function consultarMensaje(){
    const table = document.getElementById("listaMensaje").getElementsByTagName('tbody')[0];
    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        data: null,
        type: "GET",
        dataType: 'json',
        success : function(data){
            data.items.map(item => { //muestra elementos en consola
                const nuevoMensaje = table.insertRow();
                nuevoMensaje.insertCell(0).innerHTML = item.id;
                nuevoMensaje.insertCell(1).innerHTML = item.messagetext;
                nuevoMensaje.insertCell(2).innerHTML = `
                    <button onClick="seleccionarMensaje(this)">Seleccionar</button>
                    <button onClick="eliminarMensaje(${item.id})">Eliminar</button>
                `;
        })
  
        },
        error : function(error){
            console.log(error);
        },
        complete: function(){
        }
    })
}
function seleccionarMensaje(elemento){
    const mensajes = elemento.parentElement.parentElement;
    document.getElementById("mesasgeID").value=mensajes.cells[0].innerHTML;
    document.getElementById("messagetext").value=mensajes.cells[1].innerHTML;
}

function editarMensaje(){
    const json ={};
    json["id"] = parseInt( document.getElementById("mesasgeID").value);
    json["messagetext"]= document.getElementById("messagetext").value;
    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
        data: json,
        type: "PUT",
        dataType: 'json',
        complete: function(){
            alert("Editar OK")
            limpiarPantalla();
            location.reload();
        }
    })
}

function eliminarMensaje(id){
    $.ajax({
        url: 'https://g6df7a88bfbac89-juancamilo.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/'+id,
        data: null,
        type: "DELETE",
        dataType: 'json',
        complete: function(){
            alert("Eliminacion OK")
            location.reload();
        }
    })
}