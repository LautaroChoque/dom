
class Criptomonedas{
    constructor (id, titulo, imagen, precio, boton){
        this.id = id
        this.titulo = titulo
        this.imagen = imagen
        this.precio = precio
        this.boton = boton
    }
}

const bitcoin = new Criptomonedas(1, "Bitcoin", "img/opengraph.png", 79000, "Comprar")
const ethereum = new Criptomonedas(2, "Ethereum", "img/eth.png", 9000, "Comprar")
const ada = new Criptomonedas(3, "Cardano", "img/ada.png", 0.5, "Comprar")
const bnb = new Criptomonedas(4, "BNB", "img/bnb.png", 12000, "Comprar")

const criptomonedas = [bitcoin, ethereum, ada, bnb]

localStorage.setItem('criptomonedas', JSON.stringify(criptomonedas))
console.log(JSON.parse(localStorage.getItem('criptomonedas')))

const divCriptomonedas = document.getElementById("divCriptomonedas")

criptomonedas.forEach(bitcoin => {
    divCriptomonedas.innerHTML += `
    <div id= "criptomonedas ${bitcoin.id}" class="criptos" >
        <p class="titulo"> ${bitcoin.titulo} </p>
        <img class="imagenes" src= ${bitcoin.imagen} </img>
        <p class="texto" >Precio: ${bitcoin.precio} </p>
        <button class="botComprar" id=""> ${bitcoin.boton}</button>
    </div>
    `
})

const botonComprar = document.getElementById("botonComprar")
    botonComprar.addEventListener("click", () => {
        Swal.fire({
            icon: 'success',
            title: 'Compraste',
            text: 'Tu compra ha sido finalizada!',
            footer: '<a Mas informacion</a>'
          })
    })

const botonVender = document.getElementById("botonVender")
    botonVender.addEventListener("click", () =>{
        Swal.fire({
            icon: 'success',
            title: 'Vendiste',
            text: 'Tu venta ha sido finalizada',
            footer: '<a Mas informacion</a>'
          })
    })

const boton = document.getElementsByClassName("botComprar")
    boton.addEventListener("click", () => {
        Swal.fire({
            icon: 'success',
            title: 'Compraste',
            text: 'Tu compra ha sido finalizada!',
            footer: '<a Mas informacion</a>'
          })
    console.log("botComprar")
        })
    

const input = document.getElementById("input")


input.addEventListener("input", () => {
    console.log(input.value)
})

input.addEventListener("change", () => {
    console.log(input.value)
})


if(localStorage.getItem('theme')){

} else{
    localStorage.setItem('theme', 'light')
}  

