const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// MILESTONE 1
// Partendo dalla seguente struttura dati ,
// mostriamo in pagina tutte le icone disponibili come da layout.

//Dichiaro una costante per indicare l'elemento HTML dove stamperò le icone
const iconsContainer = $("#icons-container");

//Chiamo la funzione printIcons per stampare le icone
printIcons(icons, iconsContainer);


// MILESTONE 2
// Coloriamo le icone per tipo

// MILESTONE 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone



// Funzioni

//Creo la funzione printIcon per stampare a schermo le varie icone dell'iconsArray

//array --> è l'array con gli oggetti che voglio stampare
//container --> è l'elemento html dove stamperò gli oggetti dell'array sopracitato
function printIcons(array, container) {

    //Ciclo tutti gli elementi dell'array
    array.forEach((element) => {

        //Per ogni elemento quindi creo una costante.
        const {name, prefix, family} = element;

        //Creo un template literal con il codice HTML e le costanti con le info dei vari oggetti
        const iconToPrint = `
            <div class="icon" style="color: blue">
                <i class="${family} ${prefix}${name}"></i>

                <div class="icon-name">
                    ${name.toUpperCase()}
                </div>
            </div>
        `;

        //Stampo quindi il template literal nel container ad ogni elemento ciclato
        container.append(iconToPrint);

    });
}
