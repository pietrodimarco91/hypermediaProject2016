
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
            var title;
            for(var i=0;i<res.length;i++){
                allDevices_img=res[i].link;
                title=res[i].titolo;
                $(".allDevices_img"+i).html(allDevices_img+'<h3 align="center">'+title+'</h3>');
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
            var allSL;
            var title;
            for(var i=0;i<res.length;i++){
                allSL=res[i].link;
                title=res[i].titolo;
                $(".allSL"+i).html(allSL+'<h3 align="center">'+title+'</h3>');
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}