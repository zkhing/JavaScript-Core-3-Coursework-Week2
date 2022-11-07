// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (dogImage) {
//     const container = document.getElementById("container");

//     
//     img.src = 
  
//     li.appendChild(img);
//     ul.appendChild(li);
//     container.appendChild(ul)

//   });


const btn = document.getElementById("btnClick")
const image = document.getElementById("image")

btn.addEventListener('click', function(){
    fetch("https://dog.ceo/api/breeds/image/random")
       .then(res => res.json())
       .then(result =>{
        //console.log(result)
        image.src = result.message
   })
       .catch(err =>console.log(err))
})