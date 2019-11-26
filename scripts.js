
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
};

const pic2Click = () => {
	heroPic.src = heroPics[1];
	pic2.style.fill = '#4CFF5C';
	pic1.style.fill = '#D3D3D3';
	pic3.style.fill = '#D3D3D3';
	pic4.style.fill = '#D3D3D3';
};

const pic3Click = () => {
	heroPic.src = heroPics[2];
	pic3.style.fill = '#4CFF5C';
	pic1.style.fill = '#D3D3D3';
	pic2.style.fill = '#D3D3D3';
	pic4.style.fill = '#D3D3D3';
};

const pic4Click = () => {
	heroPic.src = heroPics[3];
	pic4.style.fill = '#4CFF5C';
	pic1.style.fill = '#D3D3D3';
	pic2.style.fill = '#D3D3D3';
	pic3.style.fill = '#D3D3D3';
};

pic1.onclick = pic1Click;
pic2.onclick = pic2Click;
pic3.onclick = pic3Click;
pic4.onclick = pic4Click;

const toggleRight = document.getElementById('topCarrot');
const toggleLeft = document.getElementById('bottomCarrot');

const toggleClick = () => {
	console.log(pic1.style.fill);
	/*for (let i = 0; i < picsArr.length; i++) {

	}*/
	
};

toggleRight.onclick = toggleClick;
