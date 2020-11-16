// Lista Cognomi
var cognomi = ['Pesce', 'Castenetto', 'Passaro', 'Grimaldi', 'Rossi', 'Verdi', 'Bianchi'];
cognomi.sort();
console.log(cognomi);
var numeroCognomi = cognomi.length;
console.log(numeroCognomi);
// Chiedere all’utente il cognome,
var chiediCognome = prompt('Scrivi il tuo cognome');
console.log(chiediCognome);
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
cognomi.push(chiediCognome);
console.log(numeroCognomi);
// Stampa la lista ordinata alfabeticamente.
cognomi.sort();
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
var posizioneCognome = 0;
for (var i = 0; i < cognomi.length; i++) {
    console.log(i, cognomi[i]);
    posizioneCognome = posizioneCognome + 1;
    console.log(posizioneCognome);
    document.getElementById('lista-cognomi').innerHTML += posizioneCognome + "." + cognomi[i] + "<br>";
}
