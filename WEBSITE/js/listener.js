function click() {
    
    window.onpopstate = function() {
        var url = window.location.href;
        var args = url.split('#')[1];
        var page = args.split('&')[0];
        var index='';
        console.log(args.split('&')[1]);
        if(page=='categories'){
            if(args.split('&')[1]=='devices')
                index='0';
            else
                index='1';
        }
        
        if(page!='') {
            var newElm = $('li[class*="'+page+index+'_page"]');
            console.log(newElm);
            var prevElm = $('li[class*="active"]');
            prevElm.removeClass('active');
            newElm.addClass('active');
            handle(args);
        }
    };

}


function handle(args) {
    var parts = args.split('&');
    var page = parts[0];
    var special = parts[1];
    $.getScript('js/ajaxCalls.js', function () {
        $(".main").load(page + '.html', function () {
            switch (page) {
                case 'home':
                    click();
                    break;
                case 'categories':
                    getCategorie(special, function () {
                        click();
                    });
                    break;
                case 'categoriesSL':
                    getCategorie(special, function () {
                        click();
                    });
                    break;
                case 'catAS':
                    getASCategoryMobile(special, function () {
                        click();
                    });
                    break;
                case 'categoriesAssistance':
                    getCategorie(special, function () {
                        click();
                    });
                    break;
                case 'categoriesAS':
                    getCategoriesAS(special, function () {
                        click();
                        initIsotope();
                    });
                    break;
                case 'categorySmartphone':
                    getAllDevices(function () {
                        click();
                    });
                    break;
                case 'categoryPromo':
                    getAllDevices(function () {
                        click();
                    });
                    break;
                case 'categoryAS':
                    getCategoryAS(special, function () {
                        click();
                    });
                    break;
                case 'categoryTablet' :
                    getAllDevices(function () {
                        click();
                    });
                    break;
                case 'allDevices':
                    getAllDevices(function () {
                        click();
                    });
                    break;
                case 'allSL':
                    getAllSL(function () {
                        click();
                    });
                    break;
                case 'allAssistance':
                    getAllAS(function () {
                        click();
                        initIsotope();
                    });
                    
                    break;
                case 'pageSL':
                    getPageSL(special, function () {
                        click();
                    });
                    break;
                case 'neededDev':
                    getAllNeededDevices(special, function () {
                        click();
                    });
                    break;
                case 'ASHigh':
                    getHigh(function () {
                        click();
                    });
                    break;
                case 'devicePage':
                    getDevice(special,function () {
                        click();
                    });
                    break;
                case 'categorySL':
                    getCategorySL(special,function () {
                        click();
                    });
                default:
                    click();
            }
            window.scrollTo(0, 0);
        });
    });
}

