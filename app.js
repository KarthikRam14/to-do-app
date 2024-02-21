var listOfActivities = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click() {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  input.value = "";
  renderList();
}

function renderList() {
  todolist.innerHTML = " ";
  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

function deleteItem(i) {
  listOfActivities.splice(i, 1); //splice is used here inorder to remove one element at the specified index
  renderList();
}

function editItem(i) {
  var newValue = prompt("Please insert your new value"); //using prompt here reduces a bit of code instead of displaying a box and then storing the input value, I am directly taking this value
  listOfActivities.splice(i, 1, newValue);
  renderList();
}
