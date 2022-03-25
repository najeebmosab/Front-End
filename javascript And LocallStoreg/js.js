var nameWebsite = document.getElementById("textNameWebSite");
var textUrlWebSite = document.getElementById("textUrlWebSite");

if(localStorage.getItem("ourData") == null)
{
    listNameAndUrl = [];
}
else
{
    listNameAndUrl = JSON.parse(localStorage.getItem("ourData"));
    display();
}

var listNameAndUrl = [] ;

function Add() {
    
    var product =  
    {
        name:nameWebsite.value,
        url:textUrlWebSite.value,
    };
    listNameAndUrl.push(product);
    display();
    localStorage.setItem("ourData",JSON.stringify(listNameAndUrl));
    nameWebsite.value = '';
    textUrlWebSite.value  ='';
    
}


function display() {
    
    var temp ='';
    for(var i =0 ; i < listNameAndUrl.length;i++)
    {
        temp+=`
        <span>${i+1}</span>
        <div class="container my-5">
        <div class="row py-3">
        <div class="d-flex justify-content-center">
        <div class="col-lg-4 col-md-3 justify-content-start " style="font-size:35px;">
            ${listNameAndUrl[i].name}
        </div>

        <div class="col-lg-3 col-md-2 justify-content-end">
            <button onclick="deletesite(${i})" id="btn-yellow">
                delete
            </button>
            <a  href="${listNameAndUrl[i].url}" >
            <button id="btn-red"> view</button>
            </a>
        </div>

        <div class="" >
        
        </div>
    </div>
    </div>
    </div>
    <hr/>
    `        
    }

    document.getElementById("data").innerHTML = temp;
}

function deletesite (index)
{
    listNameAndUrl.splice(index,1);
    localStorage.setItem('ourData',JSON.stringify(listNameAndUrl))
    display()
}
