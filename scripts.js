
const myFunction = () => {
	const x = document.getElementById('siteNav');
	if (x.className === "fullNav") {
		x.className += " responsive";
	} else {
		x.className = "fullNav";
	}
}



const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');
const pic4 = document.getElementById('pic4');
const picsArr = [pic1, pic2, pic3, pic4];

const heroPic = document.getElementById('heroPic');

const heroPics = ['./images/nike-air-max.png', './images/white-nikes.jpg', './images/train-track-shoes.jpg', './images/girl-shoes.jpg'];

const pic1Click = () => {
	heroPic.src = heroPics[0];
	pic1.style.fill = '#4CFF5C';
	pic2.style.fill = '#D3D3D3';
	pic3.style.fill = '#D3D3D3';
	pic4.style.fill = '#D3D3D3';
	document.getElementById('productName').textContent = 'Nike Air Max 180';
	document.getElementById('carouselBrand').textContent = 'Nike';
};

const pic2Click = () => {
	heroPic.src = heroPics[1];
	pic2.style.fill = '#4CFF5C';
	pic1.style.fill = '#D3D3D3';
	pic3.style.fill = '#D3D3D3';
	pic4.style.fill = '#D3D3D3';
	document.getElementById('productName').textContent = 'Nike Roshe Runners';
	document.getElementById('carouselBrand').textContent = 'Nike';
};

const pic3Click = () => {
	heroPic.src = heroPics[2];
	pic3.style.fill = '#4CFF5C';
	pic1.style.fill = '#D3D3D3';
	pic2.style.fill = '#D3D3D3';
	pic4.style.fill = '#D3D3D3';
	document.getElementById('productName').textContent = 'Converse Chuck Taylor';
	document.getElementById('carouselBrand').textContent = 'Converse';
};

const pic4Click = () => {
	heroPic.src = heroPics[3];
	pic4.style.fill = '#4CFF5C';
	pic1.style.fill = '#D3D3D3';
	pic2.style.fill = '#D3D3D3';
	pic3.style.fill = '#D3D3D3';
	document.getElementById('productName').textContent = 'Adidas Superstars';
	document.getElementById('carouselBrand').textContent = 'Adidas';
};

pic1.onclick = pic1Click;
pic2.onclick = pic2Click;
pic3.onclick = pic3Click;
pic4.onclick = pic4Click;

const right = document.getElementById('topCarrot');
const left = document.getElementById('bottomCarrot');

const toggleRight = () => {
	let activeCirIndex;
	for (let i = 0; i < picsArr.length; i++) {
		if (window.getComputedStyle(picsArr[i]).getPropertyValue("fill") === "rgb(76, 255, 92)") {
			activeCirIndex = i;
		}
	}
	switch(activeCirIndex) {
		case 0:
		pic2Click();
		break;
		case 1:
		pic3Click();
		break;
		case 2:
		pic4Click();
		break;
		case 3:
		pic1Click();
		break;
	}	
};

const toggleLeft = () => {
	let activeCirIndex;
	for (let i = 0; i < picsArr.length; i++) {
		if (window.getComputedStyle(picsArr[i]).getPropertyValue("fill") === "rgb(76, 255, 92)") {
			activeCirIndex = i;
		}
	}
	switch(activeCirIndex) {
		case 0:
		pic4Click();
		break;
		case 1:
		pic1Click();
		break;
		case 2:
		pic2Click();
		break;
		case 3:
		pic3Click();
		break;
	}	
};

right.onclick = toggleRight;
left.onclick = toggleLeft;
