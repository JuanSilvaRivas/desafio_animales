
class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this._nombre}, El domicilio es: ${this._direccion}, El telefono de contacto es: ${this._telefono}`;
    }
}

class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get getTipo(){
        return console.log(`El tipo de animal es: ${this.tipo}`);
    }

    datosAnimal(){
        console.log("probando datos en animal");
    }
}

class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    set setNombreMascota(value){
        this._nombreMascota = (value);
    }

    get getNombreMascota(){
        return this._nombreMascota;
    }

    set setEnfermedad(value){
        this._enfermedad = (value);
    }

    get getEnfermedad(){
        return this._enfermedad;
    }

    datosMascota(){
        console.log("probando datos en Mascota");
    }
}

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const inputTelefono = document.querySelector("#telefono");
const inputDireccion = document.querySelector("#direccion");
const inputNombreMascota = document.querySelector("#nombreMascota");
const selectTipo = document.querySelector("#tipo");
const inputEnfermedad = document.querySelector("#enfermedad");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const propietarioUno = new Propietario()
    propietarioUno.nombre = "Juan Silva";
    
    console.log(propietarioUno);

    resultado.innerHTML = `
    <ul>
         <li>${propietarioUno.datosPropietario()}</li>
         <li></li>
    </ul>
    `;
});
