(function($, window, document, undefined) {
    'use strict';

    var gridContainer = $('#grid-container'),
        filtersContainer = $('#filters-container'),
        wrap, filtersCallback;


    /*********************************
        init cubeportfolio
     *********************************/
    gridContainer.cubeportfolio({
        layoutMode: 'grid',
        rewindNav: true,
        scrollByPage: false,
        defaultFilter: '*',
        animationType: 'slideLeft',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 800,
            cols: 3
        }, {
            width: 500,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'overlayBottomPush',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100
    });


    // init cubeportfolio
    $('#js-grid-tabs').cubeportfolio({
        filters: '#js-filters-tabs',
        defaultFilter: '.academic',
        animationType: 'fadeOut',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: '',
    });

    
    // init cubeportfolio
    $('#js-grid-tabs-services').cubeportfolio({
        filters: '#js-filters-tabs-services',
        defaultFilter: '.writing',
        animationType: 'fadeOut',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: '',
    });

    

})(jQuery, window, document);
