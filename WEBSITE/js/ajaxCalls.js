
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


function getCategoriesAS(categoria,callback) {

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getCategoriesAS.php", //Relative or absolute path to file.php file
        data: {categoria: categoria},
        success: function (response) {
            var res = JSON.parse(response);
            var title;
            var link;
            var category;
            var purp;
            var impl;
            category = res[0].categoria;
            $(".page-header").append('Assistance Services: '+category+' services');
            for (var i = 0; i < res.length; i++) {
                title = res[i].titolo;
                impl = res[i].implement;
                purp = res[i].purpouse;
                link = res[i].link;
                category = res[i].categoria;
                if (impl == 1)
                    $(".grid").append('<div class="col-md-6 serviceAS ' + category + ' ' + purp + ' "> <div class="panel panel-default implemented"> <div class="panel-heading "> <h4>' + title + '</h4> </div> <div class="panel-body"> ' + link + '</div> </div> </div>');
                else
                    $(".grid").append('<div class="col-md-6 serviceAS ' + category + ' ' + purp + '"> <div class="panel panel-default"> <div class="panel-heading "> <h4>' + title + '</h4> </div> <div class="panel-body"> ' + link + '</div> </div> </div>');
            }
            // initIsotope();
            callback();
        },
        error: function (request, error) {
            console.log("Error");
        }

    });
}




function getASCategoryMobile(categoria,callback) {

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getASCategoryMobile.php", //Relative or absolute path to file.php file
        data: {categoria: categoria},
        success: function (response) {
            var res = JSON.parse(response);
            var title;
            var link;
            var category;
            var purp;
            var impl;
            category = res[0].categoria;
            $(".page-header").append('Assistance Services: Mobile Services');
            for (var i = 0; i < res.length; i++) {
                title = res[i].titolo;
                impl = res[i].implement;
                purp = res[i].purpouse;
                link = res[i].link;
                category = res[i].categoria;
                if (impl == 1)
                    $(".grid").append('<div class="col-md-6 serviceAS ' + category + ' ' + purp + ' "> <div class="panel panel-default implemented"> <div class="panel-heading "> <h4>' + title + '</h4> </div> <div class="panel-body"> ' + link + '</div> </div> </div>');
                else
                    $(".grid").append('<div class="col-md-6 serviceAS ' + category + ' ' + purp + '"> <div class="panel panel-default"> <div class="panel-heading "> <h4>' + title + '</h4> </div> <div class="panel-body"> ' + link + '</div> </div> </div>');
            }
            callback();
        },
        error: function (request, error) {
            console.log("Error");
        }

    });
}

function getCategoryAS(id,callback){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getCategoryAS.php", //Relative or absolute path to file.php file
        data: {id:id},
        success: function(response) {
            var risp=JSON.parse(response);
            var title;
            var desc;
            var faq;
            var purp;
            purp=risp[0].purpouse;
            if(purp!="mobile"){
                $(".backTo").append('<a href="#allAssistance" class="btn btn-default"><i class="fa fa-fw fa-arrow-left"></i>Back to Assistance Services</a>');
            }else{
                $(".backTo").append('<a href="#allAssistance" class="btn btn-default"><i class="fa fa-fw fa-arrow-left"></i>Back to Assistance Services</a>');
                $(".need-device").append('<a href="#neededDev&assistance" class="btn btn-default"><i class="fa fa-fw fa-mobile-phone"></i>Needed Devices</a>');
            }
            for(var i=0;i<risp.length;i++){
                title=risp[i].titolo;
                link=risp[i].link;
                desc=risp[i].descrizione;
                faq=risp[i].faq;
                $(".page-header").append(title);
                $(".desc").append(desc);
                $(".faq").append(faq);
                }
                callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


function getDevice(id,callback){
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getDevice.php", //Relative or absolute path to file.php file
        data: {id:id},
        success: function(response) {
            var risp=JSON.parse(response);
            var title;
            var car;
            var desc;
            var prezzo;
            var link;
            var link1;
            var link2;
            for(var i=0;i<risp.length;i++){
                title=risp[i].titolo;
                car=risp[i].specifiche;
                desc=risp[i].descrizione;
                prezzo=risp[i].prezzo;
                link=risp[i].link;
                link1=risp[i].link1;
                link2=risp[i].link2;
                console.log(link);
                $(".image-device").append(link);
                $(".image-device1").append(link1);
                $(".image-device2").append(link2);
                $(".page-header").append(title);
                $(".car").append('<p>'+car+'</p>'+'<h3>PREZZO:'+prezzo+'€</h3>'+'<a href="#" class="btn btn-default">BUY</a>');
                $(".desc").append('<p>'+desc+'</p>');
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


function getPageSL(id,callback){
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getPageSL.php", //Relative or absolute path to file.php file
        data: {id:id},
        success: function(response) {
            var risp=JSON.parse(response);
            var title;
            var desc;
            var spec;
            var link;
            var categoria;
            categoria=risp[0].categoria;
            console.log(categoria);
            if(categoria=="entertainment"){
                $(".backTo").append('<a href="#categorySL&entertainment" class="btn btn-default"><i class="fa fa-fw fa-arrow-left"></i>Back to Entertainment</a>');
            }else{
                $(".backTo").append('<a href="#categorySL&plans" class="btn btn-default"><i class="fa fa-fw fa-arrow-left"></i>Back to Plans</a>');
                $(".need-device").append('<a href="#neededDev&timYoung" class="btn btn-default"><i class="fa fa-fw fa-mobile-phone"></i>Needed Devices</a>');
            }
            for(var i=0;i<risp.length;i++){
                title=risp[i].titolo;
                desc=risp[i].descrizione;
                spec=risp[i].specifiche;
                link=risp[i].link;
                $(".backTo").append('<h1 class="page-header" style="color: darkblue; animation: fadeIn 400ms">'+title+'</h1>');
                $(".img-SL-implemented").append(link);
                $(".off").append(desc);
                $(".att").append(spec);
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
            var prezzo;
            var prezzoSconto;
            for(var i=0;i<res.length;i++){
                allDevices_img=res[i].link;
                title=res[i].titolo;
                prezzo=res[i].prezzo;
                prezzoSconto=res[i].prezzoSconto
                console.log(prezzoSconto);
                if(prezzoSconto){
                    $(".allDevices_img"+i).html(allDevices_img+'<h3 align="center">'+title+'</h3>'+'<h4 align="center">'+'before:'+prezzo+'€'+'</h4>'+'<h4 align="center" style="color: darkred">NOW:'+prezzoSconto+'€'+'</h4>');
                }else
                    $(".allDevices_img"+i).html(allDevices_img+'<h3 align="center">'+title+'</h3>'+'<h4 align="center">'+prezzo+'€'+'</h4>');
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


function getAllNeededDevices(special,callback){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getAllDevices.php",
        success: function(response) {
            var res=JSON.parse(response);
            var allDevices_img;
            var title;
            var prezzo;
            var prezzoSconto;
            var type=special;
            console.log(type);
            if(special=='assistance')
                $(".page-header").html('Needed Device for: Assistance Service');
            else
                $(".page-header").html('Needed Device for: TimYoung');

            for(var i=0;i<res.length;i++){
                allDevices_img=res[i].link;
                title=res[i].titolo;
                prezzo=res[i].prezzo;
                prezzoSconto=res[i].prezzoSconto
                console.log(prezzoSconto);
                if(prezzoSconto){
                    $(".allDevices_img"+i).html(allDevices_img+'<h3 align="center">'+title+'</h3>'+'<h4 align="center">'+'before:'+prezzo+'€'+'</h4>'+'<h4 align="center" style="color: darkred">NOW:'+prezzoSconto+'€'+'</h4>');
                }else
                    $(".allDevices_img"+i).html(allDevices_img+'<h3 align="center">'+title+'</h3>'+'<h4 align="center">'+prezzo+'€'+'</h4>');
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


function getAllAS(callback){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getAllAS.php",
        success: function(response) {
            var res=JSON.parse(response);
            var title;
            var link;
            var category;
            var purp;
            var impl;
            for(var i=0;i<res.length;i++){
                title=res[i].titolo;
                impl=res[i].implement;
                purp=res[i].purpouse;
                link=res[i].link;
                category=res[i].categoria;
                if(impl==1)
                    $(".grid").append('<div class="col-md-6 serviceAS '+category+' '+purp+' "> <div class="panel panel-default implemented"> <div class="panel-heading "> <h4>'+title+'</h4> </div> <div class="panel-body"> '+link+'</div> </div> </div>');
                else
                $(".grid").append('<div class="col-md-6 serviceAS '+category+' '+purp+'"> <div class="panel panel-default"> <div class="panel-heading "> <h4>'+title+'</h4> </div> <div class="panel-body"> '+link+'</div> </div> </div>');
            }
            // initIsotope();
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
            var title;
            var link;
            for(var i=0;i<res.length;i++){
                title=res[i].titolo;
                link=res[i].link;
                $(".allSL"+i).append(link+'<h3 align="center">'+title+'</h3>');
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}

function getHigh(callback){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getHigh.php",
        success: function(response) {
            var res=JSON.parse(response);
            var title;
            var link;
            var impl;
            for(var i=0;i<res.length;i++){
                title=res[i].titolo;
                link=res[i].link;
                impl=res[i].implement;
                if(impl==0)
                    $(".grid").append('<div class="col-md-4" style="margin-bottom: 20px"> <div class="panel panel-default"> <div class="panel-heading "> <h4>'+title+'</h4> </div> <div class="panel-body">'+link+' </div> </div> </div>');
                else
                    $(".grid").append('<div class="col-md-4" style="margin-bottom: 20px"> <div class="panel panel-default implemented"> <div class="panel-heading "> <h4>'+title+'</h4> </div> <div class="panel-body">'+link+' </div> </div> </div>');

            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}



function getCategorySL(categoria,callback){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getCategorySL.php", //Relative or absolute path to file.php file
        data: {categoria:categoria},
        success: function(response) {
            var categorie=JSON.parse(response);
            var title;
            var link;
            var ref;
            var nomeCategoria;
            var dist;
            for(var i=0;i<categorie.length;i++){
                title=categorie[i].titolo;
                ref=categorie[i].referiment;
                link=categorie[i].link;
                dist=categorie[i].dist;
                nomeCategoria=categorie[i].nomeCat;
                $(".page-header").html(nomeCategoria);
                $(".grid").append('<div class="serviceSL '+dist+'"><a href="#'+ref+'">'+link+'</a><h3 align="center">'+title+'</h3></div>');
            }
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    })
};