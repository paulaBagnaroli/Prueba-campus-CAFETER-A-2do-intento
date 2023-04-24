class NavBar extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML= /*html*/`
        <nav id="nav-nav">
        <section class="container1">
            <img id="logo" src="/images/logoWhite.png" alt="logo campus" width="100px" ;>
            <a class="alink" href="../index.html" id="btn-inicio">Inicio</a>
            <a class="alink" href="/servicios/index.html" id="btn-servicios">Servicios</a>
            <a class="alink" href="/soporte/index.html" id="btn-soporte">Soporte</a>
            
        </section>
    </nav>`
    }
}
customElements.define("nav-bar",NavBar)