$(document).ready(function(){
   $("p, q").fadeOut(1000); 
    $("p, q").show(1000);
    
    $(".back-vid").bgVideo({fadeIn: 1000});
   
    $(function() {
       jQuery.scrollByPages();
    });
    /*$("button").click(function() {
        $(".div1").load("ajax.txt", function(responseTxt, statusTxt, xhr) {
            if(statusTxt == "success") 
                alert("File loaded successfully");
                if(statusTxt == "error")
                    alert("Error: " + xhr.status + ':' + xhr.statusText);
            });
    });*/
    
   /* $("button").click(function() {
     $.get("ajax.txt",  function(data, value) {
       alert("Data: " + data + "Value: " + value); 
    });   
    });*/
    
   /* $("button").click(function() {
      $(".demo").load("demo.txt");
    });*/
    
   /* $("button").click(function(){
    $.get("demo_test.asp", function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);
        });
});*/
    
    /*$("button").click(function() {
       $.post("demo_test_postLocal.asp",
          {
              name: "Donald",
              city: "Duckburg"
          },
              function(data, status) {
           alert("Data: " + data + "\nStatus: " + status);
       }); 
    });*/
  
});


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "demo_test_postLocal.asp", true);
  xhttp.send();
    
    
}
