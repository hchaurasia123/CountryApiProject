let searchbtn=document.getElementById("search")
let countryInp=document.getElementById("country");
searchbtn.addEventListener("click",()=>{
    let countryName=countryInp.value;
    let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response)=>response.json())
    .then((data)=>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join());
        res.innerHTML=`
        <img src="${data[0].flags.svg}" class="flag-img">
         <h2>${data[0].name.common}</h2>
         <div className="warper">

         <div className="datawraper">
         <h4>Capital:</h4>
         <span>${data[0].capital[0]}</span>
         </div>
          </div>

           <div className="warper">

         <div className="datawraper">
         <h4>Continent:</h4>
         <span>${data[0].continents[0]}</span>
         </div>
          </div>

            <div className="warper">

         <div className="datawraper">
         <h4>Population</h4>
         <span>${data[0].population}</span>
         </div>
          </div>
      
          
            <div className="warper">

         <div className="datawraper">
         <h4>Currency : </h4>
         <span>${data[0].currencies[Object.keys(data[0].currencies)].name
         }
    -     ${Object.keys(data[0].currencies)[0]}
         </span>
         </div>
          </div>


           <div className="warper">

         <div className="datawraper">
         <h4>  Common Langauge: </h4>
         <span>${Object.values(data[0].languages).toString().split(",").join(", ")}
         </span>
         </div>
          </div>


          

        `;
          
        
        
        
        
        
        
     
        
    }).catch(()=>{
      if(countryName.length==0){
        res.innerHTML=`<h3>The Input filed Can be empty</h3>`
      }
      else{
        res.innerHTML=`<h3>Please Enter Valid Country Name </h3>`
      }
    })
    

})