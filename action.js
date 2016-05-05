

function checkE(e){

  if(e.which === 13 || e.keyCode === 13){

    var content= document.getElementById("content");
    
    clearContent(content);

    content.style.opacity = "1";
    content.style.height = "auto";
    //content.textContent = e.target.value;

    //getting request
    var request = new XMLHttpRequest();
    var url = "https://wordsapiv1.p.mashape.com/words/"+e.target.value;
    request.open("GET",url , true );
    request.setRequestHeader("X-Mashape-Key", "Abdm4OXNIDmshklXZq801hMlC2rcp1UoSzwjsnA6bRIeYXsbIf");
    //request.responseType = "json";

    request.onreadystatechange = function (){


      if(request.readyState == 4 && request.status == 200 ){
        var data = JSON.parse(request.responseText);
        var res = data.results;
        var max = res.length > 3 ?   3:res.length;
        for(var i = 0; i < max; i++){
          var span = document.createElement("span");
          span.textContent = res[i].partOfSpeech;
          span.style.color = "#FF0000";

          content.appendChild(span);
          content.appendChild(document.createElement("br"));
          content.appendChild(document.createTextNode(res[i].definition));
          content.appendChild(document.createElement("br"));
          content.appendChild(document.createElement("br"));

        }
      }else if (request.readyState == 4 && request.status == 404) {
        var h3 = document.createElement("H3");
        h3.style.color = "red";
        var str = e.target.value+" is not a word please enter a proper english word";
        h3.appendChild(document.createTextNode(str));
        content.appendChild(h3);
      }

    };
    request.send();
  }
}


function clearContent(content){
  while (content.hasChildNodes()) {
    content.removeChild(content.childNodes[0]);
  }
}


//document.getElementById("clicka").onclick = display;
document.getElementById("search").onkeypress = checkE;
