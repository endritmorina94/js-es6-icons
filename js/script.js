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

// MILESTONE 1:
// Partendo dalla seguente struttura dati ,
// mostriamo in pagina tutte le icone disponibili come da layout.

//Dichiaro una costante per indicare l'elemento HTML dove stamperò le icone
const iconsContainer = $("#icons-container");

//Chiamo la funzione printIcons per stampare le icone
// printIcons(icons, iconsContainer);




// MILESTONE 2:
// Coloriamo le icone per tipo

//Creo l'array con i vari type, grazie alla funzione filterType()
const typesArray = filterType(icons);

//Dichiaro un nuovo array tramite la funzione addColor che mi aggiungerà i colori ad ogni elemento in base al tipo
const coloredIcons = addColors(icons, colors);

//Richiamo la funzione printIcons con il nuovo array compreso dei colori
printIcons(coloredIcons, iconsContainer);




// MILESTONE 3:
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

//Dichiaro una costante per indicare l'elemento HTML dove stamperò i vari type degli oggetti
const options = $("#type");

//Aggiungo le options al select mediante la funzione addOptions()
addOptions(typesArray, options)

//Al cambio del valore di options..
$(options).change(function () {

    //Metto il valore delle options in una costante
    const optionVal= options.val();

    //Metto in una costante l'array con gli oggetti in base al tipo
    const arrayPerType = iconsArrayByType(coloredIcons, optionVal);

    //Cancello il container
    iconsContainer.html("");

    //Se il valore di options è vuoto stampo tutte le icone
    if (optionVal == "") {

        //Stampo le icone
        printIcons(coloredIcons, iconsContainer);

    //Altrimenti le stampo in base al tipo
    } else {

        //Stampo le icone
        printIcons(arrayPerType, iconsContainer);

    }

});


// ---------- FUNZIONI ----------

//Creo la funzione printIcon per stampare a schermo le varie icone dell'iconsArray
//array --> è l'array con gli oggetti che voglio stampare
//container --> è l'elemento html dove stamperò gli oggetti dell'array sopracitato
function printIcons(array, container) {

    //Ciclo tutti gli elementi dell'array
    array.forEach((element) => {

        //Per ogni elemento quindi creo una costante.
        const {name, prefix, family, color} = element;

        //Creo un template literal con il codice HTML e le costanti con le info dei vari oggetti
        const iconToPrint = `
            <div class="icon" style="color: ${color}">
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


//Creo una funzione che mi tornerà un array con tutti i type degli oggetti, non ripetuti
//array --> è l'array dal quale estrapoleremo i type
function filterType(array) {

    //Dichiaro un array vuoto per poterci poi mettere i type
    const typeFilteredArray= [];

    //Ciclo gli elementi dell'array
    array.forEach((element) => {

        //Dichiaro il valore di type in una costante
        const elementType = element.type;

        //Se il valore non esiste già nell'array typeFilteredArray allora verrà pushato
        if (!typeFilteredArray.includes(elementType)) {
            typeFilteredArray.push(elementType);
        }

    });

    //Torno l'array con i type
    return typeFilteredArray;

}


//Creo una funzione che mi aggiunge la chiave color ad ogni elemento dell'array
//array --> è l'array che verrà copiato e dal quale cloneremo gl'elementi
//colorsArray --> è l'array con i colori
function addColors(array, colorsArray) {



    //Creo una nuova costante
    const arrayWithColors = array.map((element) => {

        //Mediante lo spread clono tutti gli oggetti di array
        const newObj = {
            ...element
        };

        //Dichiaro in una costante l'idice del type di ogni elemento rispetto all'array typesArray
        const typeIndex = typesArray.indexOf(element.type);

        //Setto il color all'oggetto usando l'indice del type come indice nell'array dei colori ColorsArray
        newObj.color = colorsArray[typeIndex];

        //Torno il nuovo oggetto
        return newObj;

    });

    //Alla fine del ciclo la funzione torna il nuovo array con i colori agli oggetti
    return arrayWithColors;

}


//Creo una funzione che aggiungerà le options nell'HTML in base ai type degli oggetti
//arrayTypes --> è l'array con i type degli ogetti che ho precedentemente ottenuto mediante la funzione filterType()
//container --> è l'elemento HTML all'interno del quale aggiungerò le options
function addOptions(arrayTypes, container) {

    //Ciclo l'array con i type
    arrayTypes.forEach((element) => {

        //Creo un template literal con l'HTML che verrà poi aggiunto al container
        const newOption = `
        <option value="${element}">${element}</option>
        `;

        //Aggiunto il template literal al container ad ogni iterazione
        container.append(newOption);

    });

}

//Creo una funzione che crea un array con gli oggetti in base al type
//array --> è l'array dal quale prendo gli oggetti
//type --> sarà il valore type degli oggetti che intendiamo mettere nell'array
function iconsArrayByType(array, type) {

    //Creo un array che filtra l'array con tutti gli oggetti
    const iconsByType = array.filter((element) => {

        //Torno nell'array/pusho gli elementi che hanno il valore della chiave type uguale al type argomento della funzione
        return element.type == type;

    });

    //Alla fine del ciclo torno l'array con gli oggetti filtrati per type
    return iconsByType;

}
