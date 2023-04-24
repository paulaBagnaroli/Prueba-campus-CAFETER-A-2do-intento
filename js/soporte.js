
function asignarAcordeones() {
    const acordeones = document.querySelectorAll(".accordion")
    let arregloAcordeones = Array.from(acordeones)
    console.log(arregloAcordeones)

    arregloAcordeones.forEach(acordeon => {
        let panel = document.querySelector(`#panel${acordeon.id}`)
        acordeon.addEventListener("click", (e) => {
            console.log("clickeando")
            if (panel.style.display === "none") {
                panel.style.display = "block";
            }
            else {
                panel.style.display ="none";
            }

        })


    })

}
asignarAcordeones()