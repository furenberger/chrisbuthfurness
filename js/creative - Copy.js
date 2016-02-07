/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
var IMAGE_JSON = "images.js";
var EXHIBITIONS_JSON = "exhibitions.js";

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    //Image loading
    if ('content' in document.createElement('template')) {
        // Templates are supported.
        // Initialize images
        $.getJSON(IMAGE_JSON, function (json) {
            // Get a reference to the div anchor in the main DOM.
            var portfolioImages = document.getElementById('portfolio-image-template-div');

            /*
            <template id="portfolio-template">
                <div class="portfolio-box-template col-lg-4 col-sm-6">
                    <div class="portfolio-box">
                        <img src="" class="img-responsive portfolio-image" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="portfolio-title">
                                    portfolio-title
                                </div>
                                <div class="portfolio-media text-faded">
                                    portfolio-media
                                </div>
                                <div class="portfolio-size text-faded">
                                    portfolio-size
                                </div>
                                <div hidden class="portfolio-category">
                                    portfolio-category
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            */

            // loop through the results in the json object
            $.each(json.photos, function (i, photo) {
                if (photo.active === true) {
                    var template = document.getElementById('portfolio-template').content.cloneNode(true);
                    template.querySelector('.portfolio-image').src = photo.src;

                    template.querySelector('.portfolio-title').innerHTML = photo.title;
                    template.querySelector('.portfolio-media').innerHTML = photo.media;
                    template.querySelector('.portfolio-size').innerHTML = photo.size;
                    template.querySelector('.portfolio-category').innerHTML = photo.category;
                    template.querySelector('.portfolio-box-template').className += photo.category;
                    portfolioImages.appendChild(template);
                }
            });
        });





        // Initialize exhibitions
        $.getJSON(EXHIBITIONS_JSON, function (json) {
            // Get a reference to the div anchor in the main DOM.
            var exhibitions = document.getElementById('exhibitions-template-div');

            /*
            <template id="exhibition-template">
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
                        <h3 class="exhibition-title">Sturdy Templates</h3>
                        <p class="text-muted exhibition-text">Our templates are updated regularly so they don't break.</p>
                    </div>
                </div>
            </template>
            */

            // loop through the results in the json object
            $.each(json.exhibitions, function (i, exhibition) {
                if (exhibition.active === true) {
                    var template = document.getElementById('exhibition-template').content.cloneNode(true);
                    template.querySelector('.exhibition-title').innerHTML = exhibition.title;
                    template.querySelector('.exhibition-date').innerHTML = exhibition.date;
                    template.querySelector('.exhibition-text').innerHTML = exhibition.text;
                    exhibitions.appendChild(template);
                }
            });
        });

    }
    else
    {
        // Templates are not supported.
    }
})(jQuery); // End of use strict
