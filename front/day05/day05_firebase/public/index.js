var itemNames = ["img01", "img02", "img03", "img04"];
		var slider = document.getElementById('slider');
		var lists = document.getElementById('lists');
		var leftBtn = document.getElementById('leftBtn');
		var rightBtn = document.getElementById('rightBtn');
		var message = document.querySelector("#box > .message");

		itemNames.forEach((elemnt) => {
			var newLi = document.createElement('li');
			var newImg = document.createElement('img');
			newImg.src = `images/${elemnt}.jpg`;
			newImg.style.width = '420px';
			newImg.style.height = '280px';
			newImg.style.objectFit = 'cover';
			newImg.className = 'itemImg';
			newLi.appendChild(newImg);
			lists.appendChild(newLi);
		});

		var x = 0;
		
		rightBtn.onclick = () => {
			x -= 420;
			if(x < -1260){
				x = -1260;
				message.innerText = "마지막입니다!";
				message.style.display = "block";
				// 일정 시간 후 동작, 다음줄로 바로 넘어감
				setTimeout(()=>{message.style.display = "none";}, 1000)
			}
			lists.style.left = `${x}px`;
		};

		leftBtn.onclick = () => {
			x += 420;
			if(x > 0){
				x = 0;
				message.innerText = "처음입니다!";
				message.style.display = "block";
				setTimeout(()=>{message.style.display = "none";}, 1000)
			}
			lists.style.left = `${x}px`;
		};