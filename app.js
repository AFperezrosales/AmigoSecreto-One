const array= [];

function agregarAmigo(){
    
    let amigo = document.getElementById('amigo');
    let list = document.getElementById('listaAmigos');
    list.innerHTML="";
    if(amigo.value== ''){
        alert('El campo no debe estar vacio')
        
    }else{
        array.push(amigo.value);
        console.log(array);
        document.getElementById
    }
    for (let index = 0; index < array.length; index++) {
        let li = document.createElement('li');
        li.textContent = array[index];
        list.appendChild(li);
    }
    amigo.value="";
}


function sortearAmigo() {

    if(array.length === 0){
        alert("debe ingresar datos para poder hacer el sorteo");
        return;
    }


    let numeroAleatorio = Math.floor(Math.random() * (array.length- 0 + 1)) + 0;
    console.log(numeroAleatorio);
    let result= document.getElementById('resultado');
    let list = document.getElementById('listaAmigos');
    list.innerHTML="";
    let li = document.createElement('li');
    li.textContent = array[numeroAleatorio];
    result.appendChild(li);
    array.length=0;

}