//* TABLEAU DES APPRENANTS
const eleves = [{
    "prenom" : "Thierry",
    "avatar" : "https://icotar.com/avatar/thierry.svg"
},
{
    "prenom" : "Lazare",
    "avatar" : "https://icotar.com/avatar/lazare.svg"
},
{
    "prenom" : "Nassim",
    "avatar" : "https://icotar.com/avatar/nassim.svg"
},
{
    "prenom" : "Ivan",
    "avatar" : "https://icotar.com/avatar/ivan.svg"
},
{
    "prenom" : "Claude",
    "avatar" : "https://icotar.com/avatar/claude.svg"
},
{
    "prenom" : "Gabriel",
    "avatar" : "https://icotar.com/avatar/gabriel.svg"
},
{
    "prenom" : "Amina",
    "avatar" : "https://icotar.com/avatar/amina.svg"
},
{
    "prenom" : "Halima",
    "avatar" : "https://icotar.com/avatar/halima.svg"
},
{
    "prenom" : "Yang",
    "avatar" : "https://icotar.com/avatar/yang.svg"
},
{
    "prenom" : "Huong",
    "avatar" : "https://icotar.com/avatar/huong.svg"
},
{
    "prenom" : "Aymen",
    "avatar" : "https://icotar.com/avatar/aymen.svg"
},
{
    "prenom" : "Harris",
    "avatar" : "https://icotar.com/avatar/harris.svg"
},
{
    "prenom" : "Mathias",
    "avatar" : "https://icotar.com/avatar/mathias.svg"
},
{
    "prenom" : "Bagrat",
    "avatar" : "https://icotar.com/avatar/bagrat.svg"
},
{
    "prenom" : "Adam",
    "avatar" : "https://icotar.com/avatar/adam.svg"
},
{
    "prenom" : "Inès",
    "avatar" : "https://icotar.com/avatar/ines.svg"
},
{
    "prenom" : "Seif",
    "avatar" : "https://icotar.com/avatar/seif.svg"
},
{
    "prenom" : "Mathieu",
    "avatar" : "https://icotar.com/avatar/mathieu.svg"
},
{
    "prenom" : "Laetitia",
    "avatar" : "https://icotar.com/avatar/laetitia.svg"
},
{
    "prenom" : "Juliette",
    "avatar" : "https://icotar.com/avatar/juliette.svg"
},
{
    "prenom" : "Jean-Emmanuel",
    "avatar" : "https://icotar.com/avatar/djem.svg"
},
{
    "prenom" : "Ida",
    "avatar" : "https://icotar.com/avatar/ida.svg"
},
{
    "prenom" : "Benn",
    "avatar" : "https://icotar.com/avatar/benn.svg"
},
{
    "prenom" : "Abdulrahman",
    "avatar" : "https://icotar.com/avatar/rahman.svg"
}
];

/*      MODELE HTML POUR AFFICHAGE DES GROUPES (dans <div id="groupes">)

        <div class="groupe">    //* DIV GLOBALE POUR 1 GROUPE
            <h2>Groupe #NUMERODUGROUPE</h2>
            <div class="membres">   //* DIV CONTENANT LES MEMBRES DU GROUPE
                <div class="eleve">                     //*
                    <img src="#ELEVES.AVATAR" alt="">   //* 1 DIV POUR CHAQUE ELEVE (à multiplier)
                    <h3>#ELEVES.PRENOM</h3>             //*
                </div>                                  //*
            </div>
        </div>
*/

// NOMBRE DE PERSONNES DANS LA PROMO
const nbre = eleves.length;
console.log(nbre);

// POUR L'ALEATOIRE :
// Boucle "for" sur le nombre de groupes à faire
// dedans autre boucle "for" sur le nombre d'élèves à mettre pour 1 groupe
// faire "shuffle(eleves)"  → pour mélanger aléatoirement les items du tableau
// afficher le dernier élément du tableau (avatar + prénom) dans l'élément HTML correspondant
// puis eleves.pop()        → pour retirer le dernier élément du tableau

// fonction pour shuffle du tableau,
// trouvée là → https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
const tableauShuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// fonction qui permet de générer des groupes en HTML
const affichageGroupes = (combienDeGroupes, combienDePersonnes, numGroupe) => {

    for (let i = 0; i < combienDeGroupes; i++) {          // 12 groupes

        const divGroupe = document.createElement('div');        // je créé la div "groupe"
        divGroupe.className = "groupe";                         // et lui donne la classe "groupe"
        let divGroupes = document.querySelector("#groupes");    // je l'insère dans "#groupes"
        divGroupes.appendChild(divGroupe);                      // déjà créée à la base
        const h2 = document.createElement('h2');    // je créé mon h2
        h2.innerHTML = `Groupe ${i + 1}`;           // j'insère le texte de mon h2
        if(numGroupe === 5){ // hack pour nommer le groupe dans le cas où on veut 5 personnes par groupe (car il reste un groupe de 4 personnes...)
            h2.innerHTML = `Groupe 5`;
        }
        else if(numGroupe === 3){ // hack pour nommer le groupe dans le cas où on veut 9 personnes par groupe (car il reste un groupe de 6 personnes...)
            h2.innerHTML = `Groupe 3`;
        }       
        divGroupe.appendChild(h2);                  // j'insère mon h2 dans "groupe"

        const divMembres = document.createElement('div');   // je créé la div "membres"
        divMembres.className = "membres";                   // et lui donne la classe "membres"
        divGroupe.appendChild(divMembres);                  // j'insère "membres" dans "groupe"

        for (let x = 0; x < combienDePersonnes; x++) {  // groupes de x personnes
            tableauShuffle(eleves); // je mélange les items du tableau

            const divEleve = document.createElement('div'); // je créé la div "eleve"
            divEleve.className = "eleve";                   // et lui donne la classe "eleve"
            divMembres.appendChild(divEleve);               // j'insère "eleve" dans "membres"

            const img = new Image();                            // je créé mon image
            img.src = `${eleves[eleves.length - 1].avatar}`;    // lui attribue sa source en prenant celle du dernier élément du tableau des élèves
            divEleve.appendChild(img);                          // j'insère mon image dans "eleve"

            const h3 = document.createElement('h3');                // je créé mon h3
            h3.innerHTML = `${eleves[eleves.length - 1].prenom}`;   // j'insère le texte dans le h3 inclus dans le dernier élément du tableau des élèves
            divEleve.appendChild(h3);                               // j'insère le h3 dans "eleve"

            eleves.pop();   // je retire le dernier élément du tableau pour ne pas le retrouver dans la prochaine itération de la boucle    
        }
    }
}

const recupBouton = document.querySelector("#boutonNombre"); // je stocke l'emplacement du bouton qui va récupérer la valeur de l'input
const inputNombreSaisi = document.querySelector("#nbreSaisi"); // je stocke l'emplacement de l'input

// j'affiche dynamiquement le nombre d'élèves du tableau et les instructions.
const nbreElevesDansLaClasse = document.querySelector("#nbreElevesClasse").innerHTML = `Il y a <strong>${eleves.length} élèves</strong> dans la classe. Saisi un nombre <strong>entre 2 et ${eleves.length / 2}</strong> stp.`;

// Quand je clique sur le bouton pour générer des groupes en récupérant le chiffre saisi dans l'input
recupBouton.addEventListener("click", () => {

    // je change la classe de mon input + bouton à "invisible" et je fais apparaitre le bouton de reload
    boutonReload.classList.toggle("invisible");
    recupBouton.classList.toggle("invisible");
    inputNombreSaisi.classList.toggle("invisible");

    // je transforme en INT le nombre saisi dans le input
    const recupNbreGroupe = parseInt(inputNombreSaisi.value);

    // AFFICHAGE DES GROUPES
    const groupe = () => {
        // VARIABLE CONTENANT LE NOMBRE DE GROUPE CALCULE SELON LE NOMBRE D'ELEVES TOTAL DIVISE PAR LE NOMBRE D'ELEVES SOUHAITES DANS LE GROUPE PAR L'UTILISATEUR (input dans le HTML)
        const combienDeGroupes = (Math.floor(nbre / recupNbreGroupe));
        
        //* JE VERIFIE QUE LES VALEURS SAISIES SONT BONNES
        if(recupNbreGroupe <= 1  || recupNbreGroupe >= 13 || isNaN(recupNbreGroupe)){
            // SI C'EST PAS BON, ALORS MESSAGE D'ERREUR
            document.querySelector("#result").innerHTML = `<p>Merci de bien vouloir saisir <strong>un chiffre</strong> entre <strong>2 et 12</strong></p>`;
        }
        //* VERIFIER SI LA TAILLE DES GROUPES EST DIVISIBLE PAR LE NOMBRE D'APPRENANTS (pour un nombre inégal de membres des groupes)
        else if(nbre % recupNbreGroupe === 0){ // si le reste de la division (modulo) du nombre d'élèves total divisé par le nombre d'élèves souhaité par groupe = zéro, on peut faire des groupes égaux en nombre d'élèves
            // ALORS J'AFFICHE UN MESSAGE
            document.querySelector("#result").innerHTML = `<p>Comme il y a ${nbre} élèves. En faisant des groupes de <strong>${recupNbreGroupe} personnes</strong>, il faudra faire <strong>${combienDeGroupes} groupes</strong>.</p>`;
            // ET J'APPLIQUE LA FONCTION DEFINIE PLUS HAUT
            affichageGroupes(combienDeGroupes, recupNbreGroupe);
        }
        //* DANS LE CAS DE 5 PERSONNES PAR GROUPE (4 groupes de 5 pers. + 1 groupe de 4 pers.)
        else if(recupNbreGroupe === 5){
            let reste = nbre % recupNbreGroupe;
            document.querySelector("#result").innerHTML = `<p>Comme il y a ${nbre} élèves. En faisant des groupes de <strong>${recupNbreGroupe} personnes</strong>, il faudra faire <strong>${combienDeGroupes} groupes</strong> + 1 groupe de <strong>${reste} personnes</strong>.</p>`;
            // ET J'APPLIQUE LA FONCTION DEFINIE PLUS HAUT
            affichageGroupes(combienDeGroupes, recupNbreGroupe);
            // ET J'APPLIQUE A NOUVEAU LA FONCTION POUR GENERER 1 GROUPE DE 4 PERSONNES QUI S'APPELLERA "Groupe 5"
            affichageGroupes(1, 4, 5);
        }
        //* DANS LE CAS DE 7 PERSONNES PAR GROUPE (alors il vaut mieux faire des groupes de 8 personnes ^^)
        else if(recupNbreGroupe === 7){
            let reste = nbre % recupNbreGroupe;
            document.querySelector("#result").innerHTML = `<p>Comme il y a ${nbre} élèves. En faisant des groupes de <strong>${recupNbreGroupe} personnes</strong>, il faudra faire <strong>${combienDeGroupes} groupes</strong> + 1 groupe de <strong>${reste} personnes</strong>.</p><p>Il sera plus pertinent de faire des groupes de <strong>8 personnes</strong> :-)</p>`;
        }
        //* DANS LE CAS DE +10 PERSONNES PAR GROUPE (alors il vaut mieux faire 2 groupes de 12 personnes ^^)
        else if(recupNbreGroupe >= 10){
            let reste = nbre % recupNbreGroupe;
            document.querySelector("#result").innerHTML = `<p>Comme il y a ${nbre} élèves. En faisant des groupes de <strong>${recupNbreGroupe} personnes</strong>, il faudra faire <strong>${combienDeGroupes} groupes</strong> + 1 groupe de <strong>${reste} personnes</strong>.</p><p>Il sera plus pertinent de faire 2 groupes de <strong>12 personnes</strong> :-)</p>`;
        }
        //*  DANS LE CAS DE 9 PERSONNES PAR GROUPE (2 groupes de 9 pers. + 1 groupe de 6 pers.)
        else if(recupNbreGroupe === 9){
            let reste = nbre % recupNbreGroupe;
            document.querySelector("#result").innerHTML = `<p>Comme il y a ${nbre} élèves. En faisant des groupes de <strong>${recupNbreGroupe} personnes</strong>, il faudra faire <strong>${combienDeGroupes} groupes</strong> + un groupe de <strong>${reste} personnes</strong>.</p>`;
            // ET J'APPLIQUE LA FONCTION DEFINIE PLUS HAUT
            affichageGroupes(combienDeGroupes, recupNbreGroupe);
            // ET J'APPLIQUE A NOUVEAU LA FONCTION POUR GENERER 1 GROUPE DE 6 PERSONNES QUI S'APPELLERA "Groupe 3"
            affichageGroupes(1, 6, 3);
        }
    }
    groupe(); // on applique la fonction "groupe()"
})

//* fonction pour recharger la page
const boutonReload = document.querySelector("#reload");
boutonReload.addEventListener("click", () => {
    document.location.reload();    
})