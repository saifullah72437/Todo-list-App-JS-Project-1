let searchBox = document.querySelector('#search-box');
let itemContainer = document.querySelector('#items');

searchBox.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        addNewItem(this.value);
        this.value = '';
    }
})

let addNewItem = function(item){
    let new_item = document.createElement('li');
    new_item.innerHTML = `${item} <i class="fa fa-times"></i>`;

    // click on cross will remove the current node
    new_item.querySelector('i').addEventListener('click', function(){
        new_item.remove();
    })

    // click on element will add toggle classList to the current element
    new_item.addEventListener('click', function(){
        this.classList.toggle('done')
    })

//    in last it will append the click to the todo box
    itemContainer.appendChild(new_item)


}

