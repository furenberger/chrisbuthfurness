/* --- index.js --- */

$( function(){

    "use strict"; // Start of use strict

    var console = window.console || { log: function () {} };

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


  var $grid;
  var IMAGE_JSON = "js/json/images.js";
    var EXHIBITIONS_JSON = "js/json/exhibitions.js";

    $.getJSON(EXHIBITIONS_JSON, function (json) {
        // Get a reference to the div anchor in the main DOM.
        var exhibitionsContainer = document.getElementById('exhibitions-div');

        /*
         <div class="col-lg-3 col-md-6 text-center">
             <div class="service-box">
                 <h3 class="exhibition-title">California Water Media</h3>
                 <p class="text-muted exhibition-text">January 9 through February 7, 2016</p>
                 <p class="exhibition-date">Sebastopol Center for the Arts, Sebastopol, CA</p>
             </div>
         </div>
         */

        // loop through the results in the json object
        $.each(json.exhibitions, function (i, exhibition) {
            if (exhibition.active === true) {
                $('<div/>').prop('class','col-lg-3 col-md-6 text-center')
                    .append($('<div/>').prop('class','service-box')
                        .append($('<h3/>').html(exhibition.title).prop('class','exhibition-title'))
                        .append($('<p/>').html(exhibition.date).prop('class','text-muted exhibition-text'))
                        .append($('<p/>').html(exhibition.text).prop('class','exhibition-date')))

                    .appendTo(exhibitionsContainer);
            }
        });
    }).success(function() {
        //nothing special required...
    });

  $.getJSON(IMAGE_JSON, function (json) {
    // Get a reference to the div anchor in the main DOM.
    var linksContainer = document.getElementById('portfolio-div'), baseUrl="";

    // loop through the results in the json object
    $.each(json.photos, function (i, photo) {
      if (photo.active === true) {
        /*
         <div class="grid-item Empty-Spaces" style="position: absolute; left: 572px; top: 286px;">
            <a href="img/portfolio-full/Blue_Light.jpg" title="Blue Light" class="data-lightbox" data-lightbox="true">
            <img src="img/portfolio-thumb/Blue_Light.jpg"></a>
             <div>Blue Light</div>
             <div>Watercolor on archival paper</div>
             <div>30 x 22 in unframed</div>
         </div>
        */
        $('<div/>')
            .prop('class','grid-item '+ photo.category + '')
            .append($('<a/>')
                .append($('<img>').prop('src', photo.srcthumb))
                .prop('href', photo.srcfull).prop('title', photo.title).prop('class','data-lightbox').attr('data-lightbox',photo.active))
            .append($('<div/>').html(photo.title))
            .append($('<div/>').html(photo.media))
            .append($('<div/>').html(photo.size))

            .appendTo(linksContainer);
      }
    });
  }).success(function(){


      // init Isotope
      $grid = $('.grid').isotope({
          layoutMode: 'packery',
          itemSelector: '.grid-item',
          packery: {
              gutter: '.gutter-sizer'
          },

      });

      // layout Isotope after each image loads
      $grid.imagesLoaded().progress( function() {
          $grid.isotope('layout');
      });


      $(".data-lightbox").fancybox();


      // filter functions
      var filterFns = {
          // show if number is greater than 50
          numberGreaterThan50: function() {
              var number = $(this).find('.number').text();
              return parseInt( number, 10 ) > 50;
          },
          // show if name ends with -ium
          ium: function() {
              var name = $(this).find('.name').text();
              return name.match( /ium$/ );
          }
      };

      // bind filter button click
      $('.filters-button-group').on( 'click', 'button', function() {
          var filterValue = $( this ).attr('data-filter');
          // use filterFn if matches value
          filterValue = filterFns[ filterValue ] || filterValue;
          $grid.isotope({ filter: filterValue });
      });
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
          var $buttonGroup = $( buttonGroup );
          $buttonGroup.on( 'click', 'button', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $( this ).addClass('is-checked');
          });
      });
  });
  

  
});