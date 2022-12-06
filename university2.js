$(document).ready(function(){

    universities($( "#test option:selected" ).val());

    $(".target").change(function(){
        $( "select option:selected" ).each(function() {
            $("#uni-name-btn").html("Universitys In " + this.value);
            universities(this.value);
            $("#universityList").html("")
          });
    });

    $("#uni-name-btn").html(" Universitys in " + countryName );

    

    function universities(countryName) {
        $.get("http://universities.hipolabs.com/search?country=" + countryName, function(data, status){
            if (status == "success" && data != "null" && data != "undefined") {
                for (let index = 0; index < data.length; index++) {
                    $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action" > ${data[index].name} </a>`);
                    
                }
            } else{
                $("#universityList").append("I have sent out a get request, but it seems that I have been left on read!");
            }
        });
    }


});

