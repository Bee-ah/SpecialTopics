function dragStart(event){

    console.log(event.dataTransfer);
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.color = 'black';//para mudar o style

}

function dragOver(event){
    event.preventDefault();//preveni que haja muitas instancias dessa função
}

function drop(event){
    const id = event.dataTransfer.getData('text');
    console.log(id);
    const draggableElement = document.getElementById(id);//elemento arrastável
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);//cópia do elemento

    event.dataTransfer.clearData();

}