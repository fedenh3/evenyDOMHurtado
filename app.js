const contenedor = document.querySelector(".flex-container");

function crearCuadro(nombre,modelo,precio){
	img = "<img class='cuadro-img' src='cuadro1.jpg'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
	let modeloRandom = Math.round(Math.random()*100);
	let precioRandom = Math.round(Math.random()*10000+250);
	let cuadro = crearCuadro(`cuadro ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
	div.tabIndex = i;
	div.classList.add(`item-${i}`,'flex-item');
	div.innerHTML = cuadro [0] + cuadro[1] + cuadro[2] + cuadro[3];
	documentFragment.appendChild(div);
	
}


contenedor.appendChild(documentFragment);
