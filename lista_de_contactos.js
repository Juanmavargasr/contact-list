// let contactos = ['JUAN','MANUEL','CAMILO','PEDRO'];

// let directorio = {
//     nombre_contacto: "juan Manuel",
//     apellidos_contacto: "Vargas Rios",
//     telefono:3127052879,
//     email:"juanmavargasr@gmail.com",
//     }

    let directorio = {
        id: ["1088025629"],
        nombre_contacto: ["JUAN MANUEL"],
        apellidos_contacto: ["VARGAS RIOS"],
        telefono:["3127052879"],
        ubicacion: { 
            ciudad: ["PEREIRA"],
            direccion: ["CR 10 50 56"]}
        }

function saludar(){
    alert('Bienvenido a tu listado de contactos. ¿Qué quieres hacer?');
    alert('1. Agregar un nuevo contacto.');
    alert('2. Borrar un contacto.');
    alert('3. Mostrar tu listado de contactos');
    alert('4. Actualizar un contacto')
    let opcion = prompt('Escoge una opción');
    // opcion = parseInt(opcion)
    if(opcion === '1' || opcion === '2' || opcion === '3' || opcion === '4') {
        console.log( `haz escogido la opción ${opcion}`);
        if (opcion === '1'){
            agregar(directorio)
        } else if ( opcion === '2') {
            preborrar(directorio)
        } else if (opcion === '3') {
            mostrar_contactos(directorio)
        } else {
            actualizar(directorio)
        }
    } else {
        console.log('haz escogido una opción inválida, comienza de nuevo.');
    }
}


function actualizar(directorio){
    alert ('Para actualizar un contacto debes escribir su nombre exacto. ¿Deseas ver antes el listado de nombres de los contactos?')
    let eleccion = prompt('1. SÍ - 2. NO')
    if (eleccion === '1') {
        console.log(directorio.nombre_contacto)
        var nombre_a_actualizar = prompt('Escribe el nombre del contacto que quieres actualizar: ')
    } else if (eleccion === '2') {
        var nombre_a_actualizar = prompt('Escribe el nombre del contacto que quieres actualizar: ')
    } else {
        console.log('Escogiste una opción inválida, ahora escoge el nombre a actualizar')
        var nombre_a_actualizar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    }
    nombre_a_actualizar = nombre_a_actualizar.toUpperCase()
    var posicion_a_actualizar = directorio.nombre_contacto.indexOf(nombre_a_actualizar)

    if (posicion_a_actualizar >= 0) {
        var existe = true
    } else {
        var existe = false
    }

    if (existe = true) {
        directorio.id[posicion_a_actualizar] = prompt('Escribe el nuevo id del contacto: ')
        directorio.nombre_contacto[posicion_a_actualizar] = prompt('Escribe el nuevo nombre del contacto: ')
        directorio.apellidos_contacto[posicion_a_actualizar] = prompt('Escribe el nuevo aprellido del contacto: ')
        directorio.telefono[posicion_a_actualizar] = prompt('Escribe el nuevo teléfono del contacto: ')
        directorio.ubicacion.ciudad[posicion_a_actualizar] = prompt('Escribe la nueva ciudad del contacto: ')
        directorio.ubicacion.direccion[posicion_a_actualizar] = prompt('Escribe la nueva dirección del contacto: ')
        console.log(`Tu nueva lista de contactos es:`)
        alert(directorio)
    } else {
        console.log('El nombre escogido no existe. Comienza de nuevo la operación')
    }
}


function agregar(directorio){
    alert('NOTA: Debes escribir exactamente los datos (Nombres, Apellidos, Teléfono y ubicacion) del contacto que quieres agregar.')
    let id_del_contacto = prompt('Escribe el id del contacto: ')
        directorio.id.push(id_del_contacto)
    let nombre_del_contacto = prompt('Escribe el nombre del contacto: ')
        nombre_del_contacto = nombre_del_contacto.toUpperCase()
        directorio.nombre_contacto.push(nombre_del_contacto)
    let apellido_del_contacto = prompt('Escribe el apellido del contacto: ')
        apellido_del_contacto = apellido_del_contacto.toUpperCase()
        directorio.apellidos_contacto.push(apellido_del_contacto)
    let telefono_del_contacto = prompt('Escribe el teléfono del contacto: ')
        directorio.telefono.push(telefono_del_contacto)
    let ciudad_del_contacto = prompt('Escribe la ciudad del contacto: ')
        ciudad_del_contacto = ciudad_del_contacto.toUpperCase()
        directorio.ubicacion.ciudad.push(ciudad_del_contacto)
    let direccion_del_contacto = prompt('Escribe la direccion del contacto: ')
        direccion_del_contacto = direccion_del_contacto.toUpperCase()
        directorio.ubicacion.direccion.push(direccion_del_contacto)
    alert(`El contacto ${nombre_del_contacto} ${apellido_del_contacto} con id ${id_del_contacto} ha sido agregado con teléfono ${telefono_del_contacto} y ubicación ${direccion_del_contacto} en la ciudad ${ciudad_del_contacto} `)
    }


function mostrar_contactos(directorio){
    alert('Éstos son los contactos que tienes registrados: ')
    alert(directorio)
    }


function preborrar(directorio){
    alert ('Para borrar un contacto debes escribir su nombre exacto. ¿Deseas ver antes el listado de nombres de los contactos?')
    let eleccion = prompt('1. SÍ - 2. NO')
    if (eleccion === '1') {
        console.log(directorio.nombre_contacto)
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    } else if (eleccion === '2') {
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    } else {
        console.log('Escogiste una opción inválida, ahora escoge el nombre a borrar')
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    }
    nombre_a_borrar = nombre_a_borrar.toUpperCase()
    var posicion_a_borrar = directorio.nombre_contacto.indexOf(nombre_a_borrar)


    if (posicion_a_borrar >= 0) {
        var existe = true
    } else {
        var existe = false
    }

    if (existe = true) {
        directorio.id.splice(posicion_a_borrar)
        directorio.nombre_contacto.splice(posicion_a_borrar)
        directorio.apellidos_contacto.splice(posicion_a_borrar)
        directorio.telefono.splice(posicion_a_borrar)
        directorio.ubicacion.ciudad.splice(posicion_a_borrar)
        directorio.ubicacion.direccion.splice(posicion_a_borrar)
        console.log(`Tu nueva lista de contactos es:`)
        alert(directorio)
    } else {
        console.log('El nombre escogido no existe. Comienza de nuevo la operación')
    }

    // for (var i = 0; i< contactos.length; i++){
    //     if(contactos[i] === nombre_a_borrar){
    //         var existe = true
    //         break
    //     } else {
    //         var existe = false
    //     }
    // }

    // if (existe===true){
    //     contactos = contactos.filter((item) => item !== nombre_a_borrar)
    //     console.log(`Tu nueva lista de contactos es: ${contactos}`)
    // } else {
    //     console.log('El nombre escogido no existe. Comienza de nuevo la operación')
    // }

}


saludar()
