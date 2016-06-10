function click() {
    
    window.onpopstate = function() {
        var url = window.location.href;
        var args = url.split('#')[1];
        var page = args.split('&')[0];
        if(page!='') {
            var newElm = $('li[class*="'+page+'_page"]');
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
    $.getScript('js/ajaxCalls.js', function(){
        $( ".main" ).load(page+'.html', function() {
            switch (page) {
                case 'home':
                    clickPageLinks();
                    break;
                case 'categories':
                    getCategorie(function () { clickPageLinks(); });
                    break;
                case 'classes_al':
                    getCorsi(function () { clickPageLinks(); });
                    break;
                case 'classes_lvl':
                    getCorsiPerLivello(function () { clickPageLinks(); });
                    break;
                case 'classes_cat':
                    getCorsiCat(special,function () { clickPageLinks(); });
                    break;
                case 'single_class':
                    getCorso(special,function () { clickPageLinks(); });
                    break;
                case 'trainers':
                    getIstruttori(function () { clickPageLinks(); });
                    break;
                case 'single_trainer':
                    getIstruttore(special,function () { clickPageLinks(); });
                    $.getScript("js/externalAPIs.js", function() {
                        getTweets();
                    });
                    break;
                case 'pricing':
                    $.getScript("js/externalAPIs.js", function() {
                        facebookInit();
                        facebookPrepare();
                    });
                    break;
                case 'contact':
                    $.getScript("js/externalAPIs.js", function() {
                        initializeMap();
                    });
                    getInfo('6');
                    break;
                default:
                    clickPageLinks();
            }
    window.scrollTo(0,0);
}
