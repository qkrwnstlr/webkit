playBtnList = document.getElementsByClassName('palyBtn');
	for(var btn of playBtnList){
		btn.addEventListener('click', function() {
		point = this.innerHTML.split(',');
		console.log(point);
		document.getElementById('box').style.left = `${point[0]}px`;
		document.getElementById('box').style.top = `${point[1]}px`;
	});
}