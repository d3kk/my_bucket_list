// store data
var myList = (JSON.parse(localStorage.getItem("myData")) || [])

// create new items (click the button then show pop up)
function createItem(){
	var newItem = {text: window.prompt("Add new bucket list goal"), style:"none"}
	myList.push(newItem)
	localStorage.setItem("myData", JSON.stringify(myList))
	printItem(newItem)
}
// print (show/list) items
function printItem(item){
	//create the html
	var p = document.createElement ("p")
	p.innerHTML = item.text
	p.className = item.style
	p.onclick = function(){
		this.className = item.style = (this.className == "none") ? "strike" : "invisible"
		localStorage.setItem("myData", JSON.stringify(myList))
	}
	//add the html to the page
	document.getElementById("myDiv").appendChild(p)
}
// loop and print list
for (x=0; x < myList.length; x++) {printItem(myList[x])}
