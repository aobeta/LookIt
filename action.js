function check(e,val){
if(e.which === 13 || e.keyCode === 13){
    var val = e.target.value
    var url = "https://wordsapiv1.p.mashape.com/words/"+val;
    $.ajax({
      type: "GET",
      beforeSend: function(request){
        request.setRequestHeader("X-Mashape-Key", "Abdm4OXNIDmshklXZq801hMlC2rcp1");
      },
      url: url,
      dataType: "json",
      success : function(data){
          $("#content").css("display", "block")
          var def = JSON.parse(data);
          var results = def.results;
          for(obj in results){
            $("#content").text(obj.definition);
          }
      },
      error: function(xhr,textStatus){
        $("#content").text(textStatus);
      }
    });

  }

}

function checkE(e){
  if(e.which === 13 || e.keyCode === 13){
    document.getElementById("content").innerHTML = "YOU PRESSED ENTER";
  }
}

fuction display(){
    document.getElementById("content").innerHTML = "YOU PRESSED ENTER";
}
