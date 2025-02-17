const $ = (selector) => document.querySelector(selector);
const URL = "http://localhost:8080/finalProjectCaC/sneakers";

const getSneakers = async () => {
    const URL = "http://localhost:8080/finalProjectCaC/sneakers";
    const data = await fetch(URL);
    const dataParse = await data.json();

    return dataParse;
}

const deleteSneaker = (e) => {
    const OPTIONS = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e.id_sneaker)
    }

    const isAccept = confirm(`Desea eliminar el producto ${e.brand} ${e.model}`);
    if(isAccept) {
        fetch(URL, OPTIONS)
        .then(res => "Se elimino el producto correctamente!")
        .then(e => location.reload())
        .catch(e => {
            console.log(e);
            alert("Ocurrio un error al eliminar un producto!")
        })
    }
}

const handlerSneakerCard = (obj) => {
    const card = document.createElement('div');
    card.classList.add('card')

    const img = document.createElement('img');
    img.src = obj.img

    const title = document.createElement('h4');
    title.textContent = `${obj.brand} ${obj.model}`

    const price = document.createElement('p');
    price.textContent = `$ ${obj.price}`;

    const containerBtns = document.createElement('div');
    containerBtns.classList.add('card-btns');

    // const btnUpdate = document.createElement('button');
    // btnUpdate.textContent = "Editar";
    // btnUpdate.classList.add('btn', 'btn-edit');
    // containerBtns.appendChild(btnUpdate);

    const btnDelete = document.createElement('button');
    btnDelete.textContent = "Eliminar";
    btnDelete.classList.add('btn', 'btn-delete');
    containerBtns.appendChild(btnDelete);
    

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(containerBtns);

    return card;
} 

document.addEventListener("DOMContentLoaded", async () => {
    const sneakers = await getSneakers();
    console.log(sneakers);

    const container = $('.container-products');
    const dFrag = document.createDocumentFragment();

    for (let i = 0; i < sneakers.length; i++) {
        const e = sneakers[i];

        const card = handlerSneakerCard(e);

        const btnDelete = card.querySelector('.btn-delete');
        
        btnDelete.onclick = function() {
            deleteSneaker(e);
        }

        dFrag.appendChild(card)

    }
    container.appendChild(dFrag);
});

const validateForm = (form) => {
    let inputs = form.querySelectorAll('input, textarea');

    for (let i = 0; i < inputs.length; i++) {
        if(!inputs[i].value) {
            return false;
        };   
    }
    return true;
}

const form = $('#post-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const elements = form.elements;
    const btn = document.getElementById('btn-submit')
    btn.setAttribute('disabled', true);

    const obj = {};

    console.log(elements);
    if(!validateForm(form)){
        alert("Por favor, complete los campos!");

        return;
    };

    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];

        if(e.name) {
            obj[e.name] = e.value;
        }
    }

    const OPTIONS = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
    }

    fetch(URL, OPTIONS)
        .then(res => {
            console.log(res);
            btn.removeAttribute('disabled');
            form.reset();
        })
        .catch(e => {
            console.log(e)
            alert('Ocurrio un error');
            btn.removeAttribute('disabled');

        });
    console.log(obj);

});
