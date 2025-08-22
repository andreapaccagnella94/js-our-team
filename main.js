console.log("hi");

// markup da inserire testato su HTML
/*

<div class="col">
    <div class="card bg-dark" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-4">
                <img src="./assets/img/female1.png" class="img-fluid rounded-start" alt="...">
            </div>
                <div class="col-8">
                    <div class="card-body">
                        <h3 class="card-title text-white">Card title</h3>
                        <p class="card-text text-white">This is a wider</p>
                        <p class="card-text"><small class="text-white">Last updated 3 ago</small></p> mins
                    </div>
                </div>
        </div>
    </div>
</div>

*/

// array copiato dallo script su assets
const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "assets/img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "assets/img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "assets/img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "assets/img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "assets/img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "assets/img/female3.png"
    }
];

/*
Dato un array di oggetti rappresentante un team di un’azienda,
creare una pagina dedicata  in cui mostrare una card per ciascun componente.

(trovate l’array del team all’interno della cartella in allegato)

Bonus

Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare
il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se
volete sentirvi parte del team! 😀)

Buon divertimento e confermate lettura come al solito :babyyoda:
*/


// selezionare nodi della Dom

const rowEl = document.getElementById("my-team")

// prendo i dati del form della DOM

const formEl = document.querySelector('form')
const nameFieldEl = document.getElementById('name')
const roleFieldEl = document.getElementById('role')
const emailFieldEl = document.getElementById('email')
const imageFieldEl = document.getElementById('image')



renderTeam(teamMembers)



// event listener del form
formEl.addEventListener('submit', function (e) {
    // preveniamo comportamento di default
    e.preventDefault()

    // prendo gli elementi
    /* 
    per vedere alcune cose del form
    console.dir(e.target); 
    */

    const name = nameFieldEl.value
    const role = roleFieldEl.value
    const email = emailFieldEl.value
    const image = imageFieldEl.value

    // creo un oggetto
    const newMember = {
        name,
        role,
        email,
        image,
    }

    /*
    verifico
    console.log(newMember);
    */

    // push nell'array
    teamMembers.push(newMember)

    // aggiorno la Dom per far vedere tutto
    renderTeam(teamMembers)
})


// ciclo all'interno dell'array con una funzione
function renderTeam(teamMembers) {
    rowEl.innerHTML = ''
    for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];

        /*  // esempio dei nomi che vedo dentro il mio array di oggetto
        console.log(member.name); */

        // recupero i dati ad ogni iterazioen che andranno 
        // a popolare il mio markup (funzione)
        // creare variabili per le proprietà -> destrutturo
        const { name, role, email, img } = member

        /* // esempio sempre di nomi ma con constante derivata dalla destrutturazione
        console.log(name); */

        // aggiungere i dati alla "nuova Dom" 
        // constante per il markup nuovo
        /* const cardMarkupString = `
        <div class="col">
        <div class="card bg-dark" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-4">
        <img src="${img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-8">
        <div class="card-body">
        <h3 class="card-title text-white">${name}</h3>
        <p class="card-text text-white">${role}</p>
        <p class="card-text"><small class="text-white">${email}</small></p> mins
        </div>
        </div>
        </div>
        </div>
        </div>
        `
        // verifico che il mio markup sia popolato bene
        console.log(cardMarkupString);
        
        // rowEl.insertAdjacentHTML("beforeend", cardMarkupString) */

        // faccio con la funzione dopo aver destrutturato

        const cardMarkupString = generateCardMarkup(name, role, email, img)

        rowEl.insertAdjacentHTML("beforeend", cardMarkupString)

    }
}






// la mia funzione per generare markup

function generateCardMarkup(name, role, email, img) {
    return `
    <div class="col">
    <div class="card bg-dark" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-4">
                <img src="${img}" class="img-fluid rounded-start" alt="...">
            </div>
                <div class="col-8">
                    <div class="card-body">
                        <h3 class="card-title text-white">${name}</h3>
                        <p class="card-text text-white">${role}</p>
                        <p class="card-text"><small class="text-white">${email}</small></p> mins
                    </div>
                </div>
        </div>
    </div>
</div>
    `
}