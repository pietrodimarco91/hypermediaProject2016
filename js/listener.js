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
                case 'categorySmartphone':
                    getAllDevices(function () {
                        click();
                    });
                case 'categoryTablet':
                    getAllDevices(function () {
                        click();
                    });
                case 'allDevices':
                    getAllDevices(function () {
                        click();
                    });
                case 'allSL':
                    getAllSL(function () {
                        click();
                    });
                default:
                    click();
            }
            window.scrollTo(0, 0);
        });
    });
}

