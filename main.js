
class Criptomoneda{
    constructor (id, titulo, imagen, precio){
        this.id = id
        this.titulo = titulo
        this.imagen = imagen
        this.precio = precio
    }
}

const bitcoin = new Criptomoneda(1, "Bitcoin", "img/opengraph.png", 79000)
const ethereum = new Criptomoneda(2, "Ethereum", "img/eth.png", 9000)
const ada = new Criptomoneda(3, "Cardano", "img/ada.png", 0.5)
const bnb = new Criptomoneda(4, "BNB", "img/bnb.png", 12000)

const criptomonedas = [bitcoin, ethereum, ada, bnb]


const divCriptomonedas = document.getElementById("divCriptomonedas")

async function infoapi(linkApi,indice){
    const infoapi = await fetch(linkApi)
    const criptoParseado = await infoapi.json()
    criptomonedas[indice].precio = criptoParseado.ask
   

    
    divCriptomonedas.innerHTML += `
    <div id= "cripto${criptomonedas[indice].id}" class="criptos" >
        <p class="titulo"> ${criptomonedas[indice].titulo} </p>
        <img class="imagenes" src= ${criptomonedas[indice].imagen} </img>
        <p class="texto" >Precio: ${criptomonedas[indice].precio} </p>
        <button class="botonComprar1">Comprar</button>
        <button class="button-add" onclick="add('${criptomonedas[indice].titulo}', '${criptomonedas[indice].precio}')">Agregar al carrito</button>
    </div>
    `
}

let carrito = [];
let total = 0;


const checkout = document.getElementById("checkout")


function add (cripto, precio){
    carrito.push(cripto);
    console.log(carrito)
   
    total += Number(precio)
  
    checkout.innerHTML = `Pagar $${total}`
}


infoapi('https://criptoya.com/api/ripio/btc', 0).then
infoapi('https://criptoya.com/api/ripio/eth', 1).then
infoapi('https://criptoya.com/api/ripio/ada', 2).then



const botonComprar = document.getElementById("botonComprar")
botonComprar.addEventListener("click", () => {
    let cript = carrito.join(", ")
    Swal.fire({
        title: `Quieres comprar ${cript} por un total de $${total}`,
        showDenyButton: true,
        confirmButtonText: 'Sí, comprar',
        denyButtonText: `No, cancelar`,
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Tu compra fue exitosa!')
        } else if (result.isDenied) {
          Swal.fire('Tu compra fue cancelada.')
        }
    })
})

const botonVender = document.getElementById("botonVender")
botonVender.addEventListener("click", () =>{
    Swal.fire({
        icon: 'success',
        title: 'Vendiste',
        text: 'Tu venta ha sido finalizada!',
        footer: '<a>Mas informacion</a>'
    })
})



