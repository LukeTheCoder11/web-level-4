
$(document).ready(function() {   
    $("#button1").click(function() {
        $("#div1").load("text.txt");
    });

        $("#button3").click(function() {
            $.get("https://uyghur.ai/course/data/uyghur-ai-welcome.txt",function(data,status){
                $("#div1").html(data);
            });
        });

  });
  

