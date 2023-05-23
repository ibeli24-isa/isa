$(document).ready(function() 
{
//alert("Voy a programar en JS");
        $(".objetivo").hide();

const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

/*================================================*/
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});


//funcion para mostrar html
const showHTML = () => {

    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }


    //limpiar html
    rowProduct.innerHTML = '';

     let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

    containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

         total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
           });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};


/*================================================*/
document.addEventListener('keyup', e =>{
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.item').forEach(articulos =>{
            articulos.textContent.toLowerCase().includes(e.target.value)
            ? articulos.classList.remove('filtro')
            : articulos.classList.add('filtro');

        })
    }
})


    const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () =>{
    slider.scrollLeft -= 300
})

   
next.addEventListener('click', () =>{
    slider.scrollLeft += 300
})



$(".publicacion").on("click",function()
    {
       
         var texto1 = $(".comentario").val(); 
         var texto2 = $(".comentario_2").val();
         //var texto + texto = "hola";
         // alert(texto1 + " " + texto2);
         //var result =   $(".objetivo").val();
         $(".objetivo").show()
          

           $(".res").html("de: "+texto1+"<br>"+"comentario:"+texto2)
           
            let co = document.createElement("co");
            let valoringresado = document.getElementById("nuevoComentario").value;
            let text = document.createTextNode(valoringresado);
            li.appendChild(text);

            if(valoringresado === ''){
                alert("Ingrese un comentario")
            } else{
                document.getElementById("comentarios").appendChild(li);
            }

            document.getElementById("nuevoComentario").value = "";
            co.className = "comentario";
    });

        
              $(".pago").on("click",function()
          {
            
        $(".gracias").show(); 
            }); 

       
         $(".gracias").click(function()
      {
        $(".gracias").slideUp('5000');
      });



});