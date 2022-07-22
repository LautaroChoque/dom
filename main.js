
class Criptomonedas{
    constructor (id, titulo, imagen, precio){
        this.id = id
        this.titulo = titulo
        this.imagen = imagen
        this.precio = precio
    }
}

const bitcoin = new Criptomonedas(1, "Bitcoin", "img/opengraph.png", 79000)
const ethereum = new Criptomonedas(2, "Ethereum", "img/eth.png", 9000)
const ada = new Criptomonedas(3, "Cardano", "img/ada.png", 0,5)
const bnb = new Criptomonedas(4, "BNB", "img/bnb.png", 12000)

const criptomonedas = [bitcoin, ethereum, ada, bnb]

const divCriptomonedas = document.getElementById("divCriptomonedas")

criptomonedas.forEach(bitcoin => {
    divCriptomonedas.innerHTML += `
    <div id= "criptomonedas ${bitcoin.id}" class="criptos" >
        <p class="titulo"> ${bitcoin.titulo} </p>
        <img class="imagenes" src= ${bitcoin.imagen} </img>
        <p class="texto" >Precio: ${bitcoin.precio} </p>
    </div>
    `
})

const botonComprar = document.getElementById("botonComprar")

    botonComprar.addEventListener("click", () => {
        console.log("Click en comprar")
    })

const botonVender = document.getElementById("botonVender")
    botonVender.addEventListener("click", () =>{
        console.log("Click en vender")
    })

const input = document.getElementById("input")


input.addEventListener("input", () => {
    console.log(input.value)
})

input.addEventListener("change", () => {
    console.log(input.value)
})
