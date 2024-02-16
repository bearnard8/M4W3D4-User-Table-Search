//Variabili globali

//Corpo della tabella
const tableBody = document.getElementById("tablebody");

//Input di ricerca
const searchInput = document.getElementById("search-input").value;

//Array di users

//Call di fetch globale con creazione iniziale della tabella
window.onload = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        createTable(users);
    } catch (error) {
        console.log(error);
    }
}

//Funzione di creazione della tabella

function createTable (users) {

    let count = 1;
    users.forEach(user => {
        let newRow = document.createElement("tr");
        let num = document.createElement("th");
        num.innerText = count;
        let name = document.createElement("td");
        name.innerText = user.name;
        let username = document.createElement("td");
        username.innerText = user.username;
        let email = document.createElement("td");
        email.innerText = user.email;

        tableBody.appendChild(newRow);
            newRow.appendChild(num);
            newRow.appendChild(name);
            newRow.appendChild(username);
            newRow.appendChild(email);

        count++;
    });
}

//Funzione di filtraggio


function filterUsers () {

    //Parametro di filtraggio
    const searchParam = document.getElementById("param-selection").value;
    let filteredResults = [];

    if (searchParam === "Name") {
        console.log(searchParam);
    } else if (searchParam === "Username") {
        console.log(searchParam);
    } else if (searchParam === "e-Mail") {
        console.log(searchParam);
    }

    createTable(filteredResults);
}