let contactos = [];

function saludar(){
    alert('Bienvenido a tu listado de contactos. ¿Qué quieres hacer?')
    alert('1. Agregar un nuevo contacto.')
    alert('2. Borrar un contacto.')
    alert('3. Mostrar tu listado de contactos')
    let opcion = prompt('Escoge una opción')
    // opcion = parseInt(opcion)
    if(opcion === '1' || opcion === '2' || opcion === '3') {
        console.log( `haz escogido la opción ${opcion}`)
    } else {
        console.log('haz escogido una opción inválida, comienza de nuevo.')
    }
}


function agregar(contactos){
    alert('NOTA: Debes escribir exactamente el nombre completo del contacto que quieres agregar.')
    let nombre_del_contacto = prompt('Escribe el nombre del contacto: ')
    nombre_del_contacto = nombre_del_contacto.toUpperCase()
    contactos.push(nombre_del_contacto)
    console.log(`El contacto ${nombre_del_contacto} ha sido agregado`)
}


function mostrar_contactos(contactos){
    alert('Éstos son los contactos que tienes registrados: ')
    console.log(contactos)
}


function preborrar(contactos){
    alert ('Para borrar un contacto debes escribir su nombre exacto. ¿Deseas ver antes el listado de contactos?')
    let eleccion = prompt('1. SÍ - 2. NO')
    if (eleccion === '1') {
        console.log(contactos)
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    } else if (eleccion === '2') {
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    } else {
        console.log('Escogiste una opción inválida.')
        var nombre_a_borrar = prompt('Escribe el nombre del contacto que quieres borrar: ')
    }
    nombre_a_borrar = nombre_a_borrar.toUpperCase()


    for (var i = 0; i< contactos.length; i++){
        if(contactos[i] === nombre_a_borrar){
            var existe = true
            break
        } else {
            var existe = false
        }
    }

    if (existe===true){
        contactos = contactos.filter((item) => item !== nombre_a_borrar)
        console.log(`Tu nueva lista de contactos es: ${contactos}`)
    } else {
        console.log('El nombre escogido no existe. Comienza de nuevo la operación')
    }


}