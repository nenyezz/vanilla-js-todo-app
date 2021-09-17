let addToDoButton = document.getElementById('addToDo');
let toDocontainer = document.getElementById('toDocontainer');
let inputfield = document.getElementById('inputfield');


addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputfield.value;
    toDocontainer.appendChild(paragraph);
    inputfield.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
    toDocontainer.removeChild(paragraph);
    })
})