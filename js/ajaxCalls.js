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


function getCategorie(categoria,callback){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getCategorie.php", //Relative or absolute path to file.php file
        data: {categoria:categoria},
        success: function(response) {
            var categorie=JSON.parse(response);
            var title;
            var categoria;
            var html;
            for(var i=0;i<categorie.length;i++){
                title=categorie[i].title;
                categoria=categorie[i].categoria;
                html=categorie[i].html;
                $(".mainTitle").html(title);
                $(".categories"+i).html(categoria);
                $(".html"+i).html(html);
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}

function getAllDevices(callback){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getAllDevices.php",
        success: function(response) {
            var res=JSON.parse(response);
            var allDevices_img;
            for(var i=0;i<res.length;i++){
                allDevices_img=res[i].image;
                $(".allDevices_img"+i).html(allDevices_img);
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


function getAllSL(callback){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getAllSL.php",
        success: function(response) {
            var res=JSON.parse(response);
            var allSL_img;
            for(var i=0;i<res.length;i++){
                allSL_img=res[i].image;
                $(".allSL_img"+i).html(allSL_img);
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}