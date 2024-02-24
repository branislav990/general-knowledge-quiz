// Pitanja
let pitanje1 = {
    tekst: 'Kako se zove najviša planina na svetu?',
    odgovori: ['Alpi', 'Kilimandžaro', 'Himalaji', 'Elbrus'],
    tacan_odgovor: 'Himalaji'
};

let pitanje2 = {
    tekst: 'Zaokruži zemlju koja nije članica EU?',
    odgovori: ['Belgija', 'Švajcarska', 'Poljska', 'Hrvatska'],
    tacan_odgovor: 'Švajcarska'
};

let pitanje3 = {
    tekst: 'Porodično uredjenje kada žena ima više muževa naziva se?',
    odgovori: ['poliandrija', 'melanholija', 'monogamija', 'megalopolis'],
    tacan_odgovor: 'poliandrija'
};

let pitanje4 = {
    tekst: 'Kako se zvao apostol Pavle pre nego što je postao Isusov učenik?',
    odgovori: ['Josif', 'Avram', 'Savle', 'Matej'],
    tacan_odgovor: 'Savle'
};

let pitanje5 = {
    tekst: 'Šta je potrebno biljkama za proces fotosinteze?',
    odgovori: ['kiseonik, voda i sunčeva svetlost', 'minerali, kiseonik i sunčeva svetlost', 'ugljen dioksid, voda i sunčeva svetlost', 'minerali, ugljen dioksid i sunčeva svetlost'],
    tacan_odgovor: 'ugljen dioksid, voda i sunčeva svetlost'
};

let pitanje6 = {
    tekst: 'Koja je najduža reka u Africi?',
    odgovori: ['Nil', 'Tigar', 'Amazon', 'Gang'],
    tacan_odgovor: 'Nil'
};

let pitanje7 = {
    tekst: 'U kom gradu se nalazi sedište Ujedinjenih nacija?',
    odgovori: ['Njujorku', 'Briselu', 'Cirihu', 'Vašingtonu'],
    tacan_odgovor: 'Njujorku'
};

let pitanje8 = {
    tekst: 'Rimski broj C je broj:',
    odgovori: ['50', '1000', '100', '500'],
    tacan_odgovor: '100'
};

let pitanje9 = {
    tekst: 'Ko je napisao satiričnu komediju „Rodoljupci“?',
    odgovori: ['Branilsav Nušić', 'Radoje Domanović', 'Jakov Ignjatović', 'Jovan Sterija Popović'],
    tacan_odgovor: 'Jovan Sterija Popović'
};

let pitanje10 = {
    tekst: 'Ko je režirao film „Let iznad kukavičijeg gnezda“?',
    odgovori: ['Stiven Spilberg', 'Kventin Tarantino', 'Miloš Forman', 'Vudi Alen'],
    tacan_odgovor: 'Miloš Forman'
};

let pitanje11 = {
    tekst: 'Koji od sledećih romana je napisao Dostojevski?',
    odgovori: ['Tri ratna druga', 'Čarobni breg', 'Zli dusi', 'Rat i mir'],
    tacan_odgovor: 'Rat i mir'
};

let pitanje12 = {
    tekst: 'Koji je karakterističan simptom Opsesivno-kompulsivnog poremećaja ličnosti?',
    odgovori: ['halucinacije', 'ritualno ponašanje', 'fobije', 'prisilne misli i radnje'],
    tacan_odgovor: 'ritualno ponašanje'
};

let pitanje13 = {
    tekst: 'Gde živi lama?',
    odgovori: ['Evropi', 'Australiji', 'Južnoj Americi', 'Aziji'],
    tacan_odgovor: 'Južnoj Americi'
};

let pitanje14 = {
    tekst: 'Film “Kum” režirao je:',
    odgovori: ['Serđo Leone', 'Mario Puzo', 'Frensis Ford Kopola', 'Stiven Spilberg'],
    tacan_odgovor: 'Frensis Ford Kopola'
};

let pitanje15 = {
    tekst: 'Za koji padež se postavlja pitanje "od koga, od čega"?',
    odgovori: ['genitiv', 'dativ', 'lokativ', 'akuzativ'],
    tacan_odgovor: 'genitiv'
};

let pitanje16 = {
    tekst: 'Davidova zvezda je simbol koji se nalazi na zastavi:',
    odgovori: ['Izraela', 'Nemačke', 'Norveške', 'Makedonije'],
    tacan_odgovor: 'Izraela'
}

let pitanje17 = {
    tekst: 'Delo Kroz vasionu i vekove napisao je naš čuveni naučnik:',
    odgovori: ['Milutin Milanković', 'Mihajlo Pupin', 'Nikola Tesla', 'Jovan Cvijić'],
    tacan_odgovor: 'Milutin Milanković'
}

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10, pitanje11, pitanje12, pitanje13, pitanje14, pitanje15, pitanje16, pitanje17];


// Izmešaj pitanja i odgovore
let permutacija = niz => {
    for (let i = niz.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [niz[i], niz[j]] = [niz[j], niz[i]];
    }
}


export { pitanja, permutacija };