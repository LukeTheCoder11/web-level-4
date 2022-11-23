$(document).ready(function() {

    changefact();
    setInterval(changefact,5000);

    function changefact(){
        $.get("https://catfact.ninja/fact", function(data, status){
        $("#cat-fact").html(data.fact);
        });
    }
});