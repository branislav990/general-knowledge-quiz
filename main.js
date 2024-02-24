import { pitanja, permutacija } from "./modules/resources.js";


permutacija(pitanja);


// DOM
const btnOdgovori = document.createElement('button');
btnOdgovori.textContent = 'Pošalji odgovore';
btnOdgovori.id = 'posaljiOdgovore';
const btnPitanja = document.createElement('button');
btnPitanja.innerHTML = 'Nova<br>pitanja';
btnPitanja.id = 'novaPitanja';
const btnContainer = document.createElement('div');
btnContainer.classList.add('dugmad');
btnContainer.append(btnOdgovori, btnPitanja);

const main = document.querySelector('main');
const form = document.querySelector('form');
const svaPitanja = document.querySelector('.sva-pitanja');
form.appendChild(btnContainer);
main.appendChild(form);



let kreirajPitanja = niz => {
    // Iteriraj kroz prvih 5 pitanja u nizu i postavi ih kao naslov
    for (let i = 0; i < 5; i++) {
        permutacija(pitanja[i].odgovori); // permutuj odgovore
        const sectPitanjeObjekat = document.createElement('section');
        sectPitanjeObjekat.classList.add('pitanjeObjekat');
        const pitanje = document.createElement('h3');
        pitanje.textContent = `${i+1}. ${pitanja[i].tekst}`;
        sectPitanjeObjekat.appendChild(pitanje);
        
        // Iteriraj kroz ponuđene odgovore, ubaci svaki u paragraf i dodaj u section
        niz[i].odgovori.forEach((odg, index) => {
            let pOdg = document.createElement('p');
    
            let radioInputOdgovor = document.createElement('input');
            radioInputOdgovor.type = 'radio';
            radioInputOdgovor.name = `pitanje${i+1}`;
            radioInputOdgovor.value = odg;
            radioInputOdgovor.id = `odgovor${i+1}-${index+1}`;
            if (index == 0) {
                radioInputOdgovor.checked = true;
            }
    
            let radLabel = document.createElement('label');
            radLabel.textContent = odg;
            radLabel.setAttribute('for', `odgovor${i+1}-${index+1}`);

            let spanLabel = document.createElement('span');
            radLabel.appendChild(spanLabel);
    
            pOdg.append(radioInputOdgovor, radLabel);
            sectPitanjeObjekat.appendChild(pOdg);
        });
        
        svaPitanja.appendChild(sectPitanjeObjekat);
    }
    form.prepend(svaPitanja);
}

kreirajPitanja(pitanja);


// Button "Pošalji odgovore"
btnOdgovori.addEventListener('click', (e) => {
    e.preventDefault();
    let radioChecked = document.querySelectorAll('input[type="radio"]:checked');
    // Iteriraj kroz čekirane radio button-e i poveži ih sa objektom preko teksta pitanja
    radioChecked.forEach((check, ind) => {
        let tacno = false;
        let naslovPitanja = check.parentElement.parentElement.firstChild; // dohvati tekst pitanja iz h3 naslova
        pitanja.forEach(pit => {
            if (naslovPitanja.textContent.includes(pit.tekst) && check.value == pit.tacan_odgovor) {
                tacno = true;
            }
        });
        let slika = document.createElement('img');
        let sect = check.parentElement.parentElement;
        if (tacno) {
            sect.style.boxShadow = '6px 6px 6px #008300';
            slika.src = 'styles/images/correct.png';
            slika.alt = 'tačno';
            check.nextElementSibling.firstElementChild.appendChild(slika);
        } else {          
            sect.style.boxShadow = '6px 6px 6px #E21313';
            slika.src = 'styles/images/wrong.png';
            slika.alt = 'netačno';
            check.nextElementSibling.firstElementChild.appendChild(slika);
        }
    });

    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(rad => {
        rad.disabled = true;
    });

    btnOdgovori.style.visibility = 'hidden';
});


// Button "Nova pitanja"
btnPitanja.addEventListener('click', event => {
    event.preventDefault();

    permutacija(pitanja);
    let postojecaPitanja = document.querySelectorAll('.pitanjeObjekat');
    
    if (postojecaPitanja) {
        postojecaPitanja.forEach(pit => {
            svaPitanja.removeChild(pit);
        });
    }

    kreirajPitanja(pitanja);
    main.scrollIntoView({ behavior: 'smooth' });
    btnOdgovori.style.visibility = 'visible';   
});
