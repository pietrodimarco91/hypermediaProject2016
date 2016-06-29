var $grid;

function initIsotope() {
    // init Isotope
    $grid = $('.grid').isotope({
        itemSelector: '.serviceAS',
        layoutMode: 'fitRows'
    });

// store filter for each group
    var filters = {};

    $('.filters').on('click', '.button', function () {
        // get group key
        var $this = $(this);
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[filterGroup] = $this.attr('data-filter');
        // combine filters
        var filterValue = concatValues(filters);
        // set filter for Isotope
        console.log(filterValue);
        $grid.isotope({filter: filterValue});
    });

// change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
}

// flatten object by concatting values
function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
        value += obj[prop];
    }
    return value;
}

