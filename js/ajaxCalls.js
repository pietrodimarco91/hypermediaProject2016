/**
 * Created by pietro on 10/06/16.
 */

function getDeviceCat(categoria,callback){

 
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getDeviceCat.php", //Relative or absolute path to file.php file
        data: {categoria:categoria},
        success: function(response) {
            console.log(response);
            var categorie=JSON.parse(response);
            var nome;
            var descrizione;
            for(var i=0;i<categorie.length;i++){
                nome=categorie[i].nome;
                descrizione=categorie[i].descrizione;
                $(".mainTitle").html(nome);
                $(".descrizione").html(descrizione);
            }

            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}