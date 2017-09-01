var OwlCarousel = function () {
    return {
        initOwlCarousel: function () {
            $('.owl-ts-v1').owlCarousel({
                loop: true,
                margin: 0,
                responsive: {
                    0: {
                        items: 1
                    }
                },
                nav: true,
                dots: false,
                navText: ["", ""],
                navContainerClass: 'owl-buttons',
            });

            $('.owl-clients-v1').owlCarousel({
                items: 1,
                autoPlay: 5000,
                loop: true,
                margin: 0,
                responsive: {
                    300: {
                        items: 2
                    },
                    600: {
                        items: 1
                    },
                    900: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1100: {
                        items: 1
                    },
                },
                nav: true,
                dots: false,
                navText: ["", ""],
                navContainerClass: 'owl-buttons',
            });            
            
            $('.owl-slidertop-v1').owlCarousel({
                items: 1,
                autoPlay: 5000,
                loop: true,
                margin: 0,
                responsive: {
                    300: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    900: {
                        items: 4
                    },
                    1000: {
                        items: 1
                    },
                    1100: {
                        items: 1
                    },
                },
                nav: true,
                dots: true,
            });
            
            
            

            
            
            
        }
    };
}();