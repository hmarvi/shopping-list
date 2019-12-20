var btn = document.createElement("BUTTON");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem= document.querySelectorAll(".toggle");
var deleteBut=document.querySelectorAll('.delBut')

//Checking the input length
function inputLength() {
	return input.value.length;
}

function createListElement() {
	btn.innerHTML = "Delete";
    btn.classList.add("delBut");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML=li.innerHTML+ "";
	li.appendChild(btn);
	ul.appendChild(li);
	li.classList.add("toggle");
	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function toggle_(){
deleteBut.forEach(item =>{
	item.addEventListener("click", function(){
		item.parentElement.remove();
	})
})
}

function deleteBtn(){
listItem.forEach(item =>{
	item.addEventListener("click", function(){
		if (item.classList.contains("done")){
			item.classList.remove("done")
		} else{
		item.classList.add("done")
	}
	})
})
}
 
 toggle_();
 deleteBtn();
