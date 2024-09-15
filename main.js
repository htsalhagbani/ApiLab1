let url="https://coffee.alexflipnote.dev/random.json"
let image=document.getElementById('image');
let continer=document.getElementById('continer');

function update(){
fetch(url)
.then((Response)=>Response.json())
.then((data)=>{
    console.log(data);
    image.src=data.file;
    continer.appendChild(image);
  
})

}

setInterval(update, 3000);


