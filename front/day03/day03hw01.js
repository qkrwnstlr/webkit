var listArea = document.querySelector("#listArea");
var listItemTemplate = document.querySelector("#listItemTemplate").innerHTML;
var addData = document.querySelector("#addData");
var addBtn = document.querySelector("#addBtn");

var listDatas = [
	{'no' : 0, 'contents' : '1', 'isDone' : false},
	{'no' : 1, 'contents' : '2', 'isDone' : false},
	{'no' : 2, 'contents' : '3', 'isDone' : false},
	{'no' : 3, 'contents' : '4', 'isDone' : false},
	{'no' : 4, 'contents' : '5', 'isDone' : false},
]

initList();
addBtn.onclick = addListData;

function initList() {
	clearList();
	listDatas.forEach((listData) => {
		listArea.innerHTML += makeListItem(listData);
	});
	liList = listArea.getElementsByTagName("li");
	for(var i = 0; i < liList.length; i++) {
		liList[i].querySelector(".deletBtn").id = i;
		liList[i].querySelector(".deletBtn").addEventListener("click", function () {
			deleteListData(listDatas[Number(this.id)]);
		});
	}
}

function addListData() {
	if(addData.value != '') listDatas.push({'no' : listDatas.length, 'contents' : addData.value, 'isDone' : false});
	initList();
}

function deleteListData(listData) {
	var liList = listArea.getElementsByTagName("li");
	if(liList[listData.no].querySelector(".checkBox").checked) listDatas[listData.no].isDone = !listDatas[listData.no].isDone;
	initList();
}

function makeListItem(listData) {
	if(listData.isDone) return listItemTemplate.replace("{contents}", `<del>${listData.contents}</del>`);
	else return listItemTemplate.replace("{contents}", listData.contents);
}

function clearList() {
	listArea.innerHTML = '';
}