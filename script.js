let Form_submit = document.getElementById("Form");
let input_list = document.getElementById("input_list");
let submit_button = document.getElementById("submit_button");
let list = document.getElementById("list");

Form_submit.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input_list.value.length === 0) {
    alert("Empty fields Cannot be added");
  } else {
    let list_item = document.createElement("li");

    let text = document.createElement("span");
    text.innerText = input_list.value;
    list_item.appendChild(text);
    // Edit Button
    let Edit_btn = document.createElement("button");
    Edit_btn.innerHTML = "Edit";
    Edit_btn.style.backgroundColor = "green";
    Edit_btn.style.color = "white";
    Edit_btn.style.padding = "6px";
    Edit_btn.style.borderRadius = "5px";
    list_item.appendChild(Edit_btn);

    Edit_btn.addEventListener("click", () => {
      let cnfrm = window.confirm("Press confirm to Edit Activity");
      if (cnfrm) {
        input_list.value = text.innerText; // Populate the input field with the current text
        list_item.remove(); // Remove the current list item to edit it
      } else {
        alert("You Cancelled");
      }
    });

    // Delete Button
    let Delete_btn = document.createElement("button");
    Delete_btn.innerHTML = "Delete";
    Delete_btn.style.backgroundColor = "red";
    Delete_btn.style.color = "white";
    Delete_btn.style.borderRadius = "5px";
    Delete_btn.style.padding = "6px";

    list_item.appendChild(Delete_btn);

    Delete_btn.addEventListener("click", () => {
      let cnfrm = window.confirm("Are you sure Delete Acitivity?");
      if (cnfrm) {
        list_item.remove();
        alert("Deleted successfully");
      } else {
        alert("Cancelled");
      }
    });

    let div_Element = document.createElement("div");
    div_Element.className = "side_values";
    div_Element.append(Edit_btn, Delete_btn);
    list_item.append(div_Element);

    // Append the list item to the UL
    list.appendChild(list_item);

    // Clear the input field
    input_list.value = "";
  }
});

function change() {
  input_list.style.backgroundColor = "blue";
  input_list.style.color = "white";
}
function change2() {
  input_list.style.backgroundColor = "white";
  input_list.style.color = "black";
}
