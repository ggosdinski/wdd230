const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

/* button.addEventListener('click', function(){
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
 */



button.addEventListener('click', () => {
  if (input.value != '') {  
    displayList(input.value); 
    chaptersArray.push(input.value); 
    setChapterList(); 
    input.value = ''; 
    input.focus(); 
  }
});


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; 
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); 
    input.focus()
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1);
chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}