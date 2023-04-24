console.log("ejecutandodinamic")

// script llenado dinamico
const cardContainer = document.querySelector("#card-container")

class Servicio{
    constructor(nombre, detalles, disponibilidad,foto){
        this.nombre=nombre;
        this.detalles=detalles;
        this.disponibilidad=disponibilidad;
        this.foto=foto
    }
}

const hunters=new Servicio("Hunters", "Cubículo ubicado en el espacio de Hunters pensado para ofrecer servicios de cafetería", "Sujeto a horario", `../images/hunters.jpg`);
const cafeteria=new Servicio("Cafetería-hunters", "cafetería", "Sujeto a horario",`../images/cafetería-hunters.jpg`);
const octavo = new Servicio("8vo piso", "octavo", "Sujeto a horario",`../images/8vo-piso.jpg`);
const baños =new Servicio("Aseo", "Baños", "Sujeto a horario",`../images/aseo.jpg`);

let serviciosL=[]
serviciosL.push(hunters,cafeteria,octavo,baños)

cardContainer.innerHTML = null;
    serviciosL.forEach(servicio => {
        console.log(servicio)
        let cartaCreada = document.createElement(`div`);
        cartaCreada.className = "card";
        cartaCreada.innerHTML = /*html*/ 
        `<p style="display:block">${servicio.nombre}</p>
        <img src="${servicio.foto}">
        <button class="ver-servicios" id="${servicio.nombre}"> Ver datos</button>`
        cardContainer.appendChild(cartaCreada)
    });

const btnVerServicios =document.querySelectorAll(".ver-servicios")
let verServicios=Array.from(btnVerServicios);
const contenedorModales=document.querySelector(".modal")
    
verServicios.forEach(boton=>{
    boton.addEventListener("click",(e)=>{
        console.log("hola")
        contenedorModales.style.display="flex";
        contenedorModales.innerHTML=`<div id="modal-contenido"><h1 class="titulomodal"></h1><table id="tablita"></table><button class="close" id="btncerrarmodal">Cerrar</button></div>`
        serviciosL.forEach(element=>{
          if(boton.id==element.nombre){
            let servicio=element
            crearModal(servicio);
        }})
    })
});

function cerrarModal(){
    let btnCerrarModal=document.querySelector("#btncerrarmodal");
    btnCerrarModal.addEventListener("click",(e)=>{
        contenedorModales.style.display="none";
    })
}

function crearModal(element){
    console.log(element)
    const h1modal=document.querySelector(".titulomodal");
        const tabla=document.querySelector("#tablita")
        tabla.innerHTML=`<thead>
        <tr>
          <th>Nombre</th>
          <th>Detalles</th>
          <th>Disponibilidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${element.nombre}</td>
          <td>${element.detalles}</td>
          <td>${element.disponibilidad}</td>
        </tr>
      </tbody>`
    h1modal.textContent=`${element.nombre}`;
    cerrarModal();}


    //script accordions
