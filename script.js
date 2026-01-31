//definitions des variables
var button = document.querySelector('button');
var image = document.querySelector('.image');

//fonction pour afficher l'image
button.onclick= function(){
   //le lien de l'api
    let url = 'https://dog.ceo/api/breeds/image/random';

    //recuperation des images

    fetch(url).then((response)=>
        response.json().then((data)=> {
            image.innerHTML=` <img src =" ${ data.message}">`
        }))
}




