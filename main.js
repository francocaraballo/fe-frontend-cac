const $ = (selector) => document.querySelector(selector);

window.addEventListener("DOMContentLoaded", async () => {
    const sneakers = await getSneakers();
    console.log(sneakers);

    const container = $('.container-products');
    const dFrag = document.createDocumentFragment();

    for (let i = 0; i < sneakers.length; i++) {
        const e = sneakers[i];

        const card = handlerSneakerCard(e);
        dFrag.appendChild(card)
        
    }

    container.appendChild(dFrag);


})



const getSneakers = async () => {
    const URL = "http://localhost:8080/finalProjectCaC/sneakers";
    const data = await fetch(URL);
    const dataParse = await data.json();

    return dataParse;
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

    const btnUpdate = document.createElement('button');
    btnUpdate.textContent = "Editar";
    btnUpdate.classList.add('btn', 'btn-edit');
    containerBtns.appendChild(btnUpdate);

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

