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
    $.getScript('js/ajaxCalls.js', function () {
        $(".main").load(page + '.html', function () {
            switch (page) {
                case 'home':
                    click();
                    break;
                case 'deviceCat':
                    console.log(page);
                    var categoria='';
                    categoria+=page;
                    getDeviceCat(categoria, function () {
                        click();
                    });
                    break;
                case 'categories':
                    getCategorie(special);
                default:
                    click();
            }
            window.scrollTo(0, 0);
        });
    });
}

