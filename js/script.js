// Lista Cognomi
var cognomi = ['Pesce', 'Castenetto', 'Passaro', 'Grimaldi', 'Rossi', 'Verdi', 'Bianchi'];
cognomi.sort();
console.log(cognomi);
var numeroCognomi = cognomi.length;
console.log(numeroCognomi);
// Chiedere all’utente il cognome
var chiediCognome = prompt('Scrivi il tuo cognome');
console.log(chiediCognome);
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
cognomi.push(chiediCognome);
// Stampa la lista ordinata alfabeticamente.
cognomi.sort();
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

// con il ciclo for
for (var i = 0; i < cognomi.length; i++) {
    // document.getElementById('lista-cognomi').innerHTML += (i + 1) + "." + cognomi[i] + "<br>";
    if (chiediCognome == cognomi[i]) {
        console.log(i + 1);
        document.getElementById('numeo-lista').innerHTML = (i + 1) + "." + chiediCognome;
    }
};

// con il ciclo while
// var i = 0;
// while (i < cognomi.length) {
//       console.log(cognomi[i]);
//       posizioneCognome++;
//       console.log(posizioneCognome);
//       document.getElementById('lista-cognomi').innerHTML += posizioneCognome + "." + cognomi[i] + "<br>";
//       i++;
// }
