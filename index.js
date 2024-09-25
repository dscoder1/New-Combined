//const API_KEY="a8a201de"
const searchbox=document.querySelector("#SearchBox")
const searchbutton=document.querySelector("#SearchButton")
let container=document.querySelector(".Container") 
const getdata= async(movie) =>{
    container.innerHTML=""
    let fetchdata=await fetch(`https://www.omdbapi.com/?apikey=a8a201de &t=${movie}`)
    let jsondata= await fetchdata.json()
console.log(jsondata)
let div1=document.createElement("div")
div1.classList.add("Container")
div1.innerHTML=`
 
<img src=${jsondata.Poster} alt=" " id="imageCont">
 
<div class="Details">
<p id="name">Movie Name:${jsondata.Title}<p></br>
<p>Released Date:${jsondata.Released}<p>
<p>Movie Time:${jsondata.Runtime}<p>
<p>Movie Type:${jsondata.Genre}<p>
<p>Movie Director:${jsondata.Director}<p>
<p>Movie Actors:${jsondata.Actors}<p>
<p>Movie Description:${jsondata.Plot}<p>
<p>Movie Language:${jsondata.Language}<p>
<p>Movie Country:${jsondata.Country}<p>
<p>Movie Rating:${jsondata.imdbRating}<p>
<p>Movie BoxOffice Collection:${jsondata.BoxOffice}<p>
<p>Movie Type:${jsondata.Type}<p>
</div>
`
container.appendChild(div1)
searchbox.value="Search Your Movie..."
}  
searchbutton.addEventListener("click",function(){
    let moviename=searchbox.value;
    if(moviename!=""){
        getdata(moviename); 
    }
    else{   
let div=document.createElement("div")
div.innerHTML=`<h1>Fill The Search Box To Find<h1>`
container.appendChild(div)

    }
    

})

