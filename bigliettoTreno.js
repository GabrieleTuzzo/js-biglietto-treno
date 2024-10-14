console.log("Biglietto Treno")

// Inizializzo una variabile costante per indicare il prezzo di base al km
const basePrice = 0.21  // int

// Inizializzo due variabili costanti per indicare lo sconto da applicare in base all'età dell'utente
const discount20 = 20   // int
const discount40 = 40   // int

// Istanzio le variabili per salvare i dati dell'utente e del prezzo finale
let userAge, userTravel, finalPrice
// Inizializzo una variabile per il costo da rimuovere dal finalPrice in base allo sconto
let discountedPrice = 0 // int

// Salvo i dati richiesti in input nelle variabili
userAge = prompt("Inserire età utente")             // string
userTravel = prompt("Inserire km da percorrere")    // string

// Converto i dati salvati in input da string a int
userAge = parseInt(userAge)
userTravel = parseInt(userTravel)

// Calcolo il prezzo di base moltiplicando il prezzo al km * i kilometri da effettuare
finalPrice = basePrice * userTravel

// SE l'utente è minore di 18 anni
//      -> Calcolo il 20% del prezzo finale e lo salvo in una variabile
// ALTRIMENTI SE l'utente è oltre i 65 anni
//      -> Calcolo il 40% del prezzo finale e lo salvo in una variabile
if (userAge < 18) {
    discountedPrice = finalPrice * discount20 / 100
    // console.log(discountedPrice)
} else if (userAge > 65) {
    discountedPrice = finalPrice * discount40 / 100
    // console.log(discountedPrice)
}

// Calcolo la differenza tra lo sconto in euro da togliere e il prezzo finale in base allo sconto
finalPrice = finalPrice - discountedPrice

// Stampo il messaggio con il prezzo arrotondato con 2 cifre dopo la virgola
console.log("Il prezzo è di " + finalPrice.toFixed(2) + " €")