$(document).ready(function(){
   $("p, q").fadeOut(1000); 
    $("p, q").show(1000);
    
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
    
    $("button").click(function() {
       $.post("ftp://u235934299.test@codedecode.esy.es/tribute.js", 
             {
           name: "Prashanth Reddy",
           wifeName: "Priyanka Diddi",
           city: "Hyderabad"
       },
              function(data, status) {
           alert("Data: " + data + "\nStatus " + status);
       }); 
    });
});
