// MA FEUILLE JS - VARIABLES & CONSTANTE - 02 CONCATENATION- SEMA

// alert("le ficher fonctionne");

// EXEMPLE DE CONCATENATION HABITUTELLE :

let chaine = "Je suis l'autre chaine de caractère";
console.log(chaine);

let nouvelleChaine = "Chaine précédente : " + chaine; 
// Ici je concatène avec le + 
console.log(nouvelleChaine);

let degres = 6; 

let temperature = "Il fait " + degres + " degrès"; 
console.log(temperature);


// EXEMPLE DE CONCATENATION AVEC LA 3EME METHODE : 

degres = 30; 

temperature = `Il fait : ${degres} degrès`; 
console.log(temperature);


