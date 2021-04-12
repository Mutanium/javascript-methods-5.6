/* Opdracht 0: voorbeeld */
// Verwijder het laatste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Vanille extract' en [ 'Eieren', 'Bloem', 'Bakpoeder' ]

const cookieIngredients = ["Eieren", "Bloem", "Bakpoeder", "Vanille extract"];

const lastItem = cookieIngredients.pop(); //verwijdert eerste item en returned die
console.log(lastItem);
console.log(cookieIngredients);

/* Opdracht 1: */
// Voeg een nieuw item toe aan onderstaande array en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Hawai', 'Margherita', 'Salami' ]

const pizzas = ["Hawai", "Margherita"];
pizzas.push("Napolitana"); //toevoegen aan het eind
console.log(pizzas);


/* Opdracht 2: */
// Verwijder het éérste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Noten' en [ 'Eieren', 'Bloem', 'Cacao', 'Chocoladestukjes', 'Bakpoeder' ]

const brownieIngredients = ["Noten", "Eieren", "Bloem", "Cacao", "Chocoladestukjes", "Bakpoeder"];

const firstitem = brownieIngredients.shift(); //haalt eerste waarde weg en returned die
console.log(firstitem);
console.log(brownieIngredients);

/* Opdracht 3: */
// Draai de volgorde van onderstaande array met namen om en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Piet', 'Jan', 'Henk' ]

const names = ["Henk", "Jan", "Piet"];
names.reverse(); //draai de array om
console.log(names);



/* Opdracht 4: */
// Onderstaande array bevat een lijst met plaatsnamen. Voeg de naam "Amsterdam" toe tussen Utrecht en Maastricht.
// ---- Verwachte uitkomst: [ 'Utrecht', 'Amsterdam', 'Maastricht', 'Eindhoven' ]

const cities = ["Utrecht", "Maastricht", "Eindhoven"];
cities.splice(1,0,"Amsterdam"); //startplek, aantal weghalen, item(s) toevoegen
console.log(cities);


