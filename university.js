$(document).ready(function(){

   universityList( $( "#test option:selected").val())
        


    $( ".target" ).change(function() {
    
        $( "select option:selected" ).each(function(e) {
            $("#uniBtn").html("Universitys In " + this.value);
            $("#universityList").html("");
            universityList(this.value);
          });
    
      });

      $("#uniBtn").html("Universitys In Canada");

      function universityList(countryName) {
        $.get("http://universities.hipolabs.com/search?country=" + countryName , function(data,staus){
            if (staus == "success" && data != null && data != undefined) {
                for (let index = 0; index < data.length; index++) {
                    $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);
                }
            } else {
                $("universityList").append("I sent out")
            }
        });
      }

  

});
