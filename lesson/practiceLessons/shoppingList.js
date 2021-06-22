let groceryList = [
    'apples ',
    'oranges ',
    'pears ',
    'avocados ',
    'bananas ',
]

function addGroceries(){
    let newGroceries = document.getElementById("groceryInput").value;
    groceryList.push(newGroceries);
    displayList();
}

function displayList(){
    for (let i = 0; i < groceryList.length; i++) {
        document.getElementById("displayList").innerHTML += groceryList[i];
    }   
}