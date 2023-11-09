const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

button.addEventListener('click', function(){
    if (input.value.trim() === '') {
        alert('Please, enter a valid chapter.');
        input.focus();
      } else {
        const li = document.createElement("li");
        const deletebutton = document.createElement("button");
        li.textContent = input.value;
        deletebutton.textContent = "❌";
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = "";
      }
});