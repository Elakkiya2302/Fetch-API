var res = fetch("https://restcountries.com/v3.1/all");
res.then((data)=>{
    return data.json()
}).then((data1)=> foo(data1)).catch((error)=>console.log(error));

var container = document.createElement("div");
container.className ="container";

var row = document.createElement("div");
row.className = "row";
 
function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
    var col = document.createElement("div");
    col.className = "col-lg-4";
    col.innerHTML=`<div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Restcountries Data</div>
  <div class="card-body text-primary">
    <h5 class="card-title">${data1[i].name.common}</h5>
        <p class="card-text">${data1[i].capital}</p>
    <p class="card-text">${data1[i].flags.png }</p>
        <p class="card-text">${data1[i].region}</p>
    <p class="card-text">${data1[i].latlng}</p>
        <p class="card-text">${data1[i].cca3}</p>

    

  </div>`
  
  row.append(col);
  container.append(row);
  document.body.append(container);   
}
}
  

