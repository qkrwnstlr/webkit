var listArea = document.querySelector("#listArea");
var listItemTemplate = document.querySelector("#listItemTemplate").innerHTML;
var addData = document.querySelector("#addData");
var addBtn = document.querySelector("#addBtn");
var deleteBtn = document.querySelector("#deleteBtn");

var listDatas = [
	{'no' : 0, 'contents' : '1', 'isDone' : false},
	{'no' : 1, 'contents' : '2', 'isDone' : false},
	{'no' : 2, 'contents' : '3', 'isDone' : false},
	{'no' : 3, 'contents' : '4', 'isDone' : false},
	{'no' : 4, 'contents' : '5', 'isDone' : false},
]

initList();
addBtn.onclick = addListData;
deleteBtn.onclick = deleteListDatas;

function initList() {
	clearList();
	listDatas.forEach((listData) => {
		listArea.innerHTML += makeListItem(listData);
	});
	liList = listArea.getElementsByTagName("li");
}

function addListData() {
	if(addData.value != '') listDatas.push({'no' : listDatas.length, 'contents' : addData.value, 'isDone' : false});
	initList();
}

function deleteListDatas() {
	var liList = listArea.getElementsByTagName("li");
	listDatas.forEach((listData) =>	{
		if(liList[listData.no].querySelector(".checkBox").checked) listData.isDone = !listData.isDone;
	});
	initList();
}

function makeListItem(listData) {
	if(listData.isDone) return listItemTemplate.replace("{contents}", `<del>${listData.contents}</del>`);
	else return listItemTemplate.replace("{contents}", listData.contents);
}

function clearList() {
	listArea.innerHTML = '';
}