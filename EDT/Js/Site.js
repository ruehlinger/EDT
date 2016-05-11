$(document).ready(function () {
    "use strict";

    var $btnSearch = $("#btnSearch");
    $btnSearch.live("click", function () {
        alert("Search feature is unavailable.");
    }).css("cursor", "pointer").attr({ 'data-toggle': "tooltip", title: "Search" }).tooltip(
    {
        delay: {
            show: 10,
            hide: 0
        },
        placement: "bottom"
    }


    );

    //data-toggle="tooltip" target="_blank"
    //title="Evaluation Dashboard" 
    ///////////////////////////////////////////////
    $(".fb-ico a").tooltip({
        placement: "bottom",
        delay: {
            show: 10,
            hide: 0
        }
    });


    $(".site-title a").tooltip({
        placement: "bottom",
        delay: {
            show: 10,
            hide: 0
        }
    });

    $("#newsBalloonRemove").tooltip({
        placement: "bottom",
        delay: {
            show: 10,
            hide: 0
        }
    });
    $("#newsBalloonRestore").tooltip({
        placement: "bottom",
        delay: {
            show: 10,
            hide: 0
        }
    });

    $("#logoVBA").tooltip({
        placement: "bottom",
        delay: {
            show: 10,
            hide: 0
        }
    });

    $("#logoEDT").tooltip({
        placement: "right",
        delay: {
            show: 10,
            hide: 0
        }
    });

    $(".thumbnail").tooltip({
        delay: {
            show: 10,
            hide: 0
        }
    });

    $(".play").tooltip({
        delay: {
            show: 10,
            hide: 0
        }
    });
    $(".pause").tooltip({
        delay: {
            show: 10,
            hide: 0
        }
    });

    $(".nav-custom a").tooltip();
    $(".nav-btm-custom a").tooltip({
        placement: "bottom"
    });
    //$(".thumbnail").css({ "border-style": "solid", "background-color": "#7cc0d9" });


    $('a.thumbnaildisabled').click(function (event) {
        event.preventDefault(); // Prevent link from following its href
    })/*.css("cursor", "not-allowed")*/;

    var arrColors = new Array(
        { color: "#ebea56", background: "#7c356d" },
        { color: "#fff", background: "#150c3f" },

        { color: "#000", background: "#6c6200" },
        { color: "#fff", background: "#3486eb" },

        { color: "#fff", background: "#3486eb" },
        { color: "#fff", background: "#150c3f" }

        );

    //todo: Tiles Operations
    var $chbxTileStyle = $("#chbxTileStyle");

    var $delay = 800;
    $chbxTileStyle.removeAttr("checked");


    var colBufr;

    var arrHeaders = $(".metro-header");
    var $curHeader;
    var cnt = 0;
    $(arrHeaders).each(function () {
        $curHeader = $(this);
        $curHeader.css({ "color": arrColors[cnt]["color"], "background-color": arrColors[cnt]["background"], "border-color": arrColors[cnt]["background"] });
        $curHeader.next().children(".fdw-background").css("background-color", arrColors[cnt]["background"]);

        $curHeader.hover(
        function () {
            if ($chbxTileStyle.is(":checked")) {
                colBufr = $(this).css("background-color");
                $(this).next().children(".fdw-background").animate({
                    opacity: ".8",
                    marginTop: "-14"
                }, $delay * 1, "easeOutSine");

            } else {
                //$(this).next().children(".fdw-background").css({ "margin-top": "-14px", "background-color":"black" }).animate({
                //    opacity: ".8"
                //}, $delay);

            }
        },
        function () {
            if ($chbxTileStyle.is(":checked")) {

                $(this).next().children(".fdw-background").css("background-color", colBufr).animate({
                    opacity: "0",
                    marginTop: "-130"
                }, $delay * .5, "easeInSine");
            } else {
                //$(this).next().children(".fdw-background").css("margin-top", "-130px").animate({
                //    opacity: "0"
                //},$delay);
            }
        }
        );

        cnt++;
    });


    var arrTiles = $(".fdw-background").parent();
    var $curTile;
    cnt = 0;

    $(arrTiles).each(function () {
        $curTile = $(this);
        $curTile.css("cursor", "pointer").hover(
        function () {
            if ($chbxTileStyle.is(":checked")) {
                colBufr = $(this).prev().css("background-color");
                $(this).children(".fdw-background").css("background-color", colBufr).animate({
                    opacity: ".8",
                    marginTop: "-14"
                }, $delay * 1, "easeOutSine");
            } else {
                //$(this).children(".fdw-background").css("margin-top", "-14px").animate({
                //colBufr = $(this).children(".fdw-background").css("background-color");
                $(this).children(".fdw-background").css({ "margin-top": "-14px", "background-color": "black" }).animate({
                    opacity: ".8"
                }, $delay);
            }

        },
        function () {
            if ($chbxTileStyle.is(":checked")) {
                $(this).children(".fdw-background").animate({
                    opacity: '0',
                    marginTop: "-130"
                }, $delay * .5, "easeInSine");
            } else {
                $(this).children(".fdw-background").animate({
                    opacity: "0"
                }, $delay, function () {
                    $(this).css("background-color", colBufr);
                });
            }
        }
            );
    });



    $('.chevronbar li').css('width', 98.0 / ($('.chevronbar li').length * 1.0) + "%");

    var $curChev;
    var arrChevs = $('.chevronbar li').not(".last");

    $(arrChevs).each(function () {
        $curChev = $(this);
        $(this).css("cursor", "pointer").hover(
            function () {
                $(this).addClass("active");
            },
            function () {
                $(this).removeClass("active");
            }
                );
    });


    function adjustViewports() {
        alert("Ajusting viewports...");
        var $lft = $(".indxLft");
        var $rght = $(".indxRight");
        var hl = $lft.height();
        var hr = $rght.height();
        var bp;

        if (hl > hr) {

            $rght.height(hl);

        } else if (hr > hl) {
            bp = hr - hl;
            $lft.height(hr);
            $lft.css("background-position-y", bp);
        }
    }

});

var _sliderInterval;
var _startSliderInterval;
var _nextSliderInterval;
jQuery(document).ready(function () {
    /* This code is executed after the DOM has been completely loaded */

    jQuery('#slides .slide').css({ position: 'absolute', top: 0, left: 0, display: 'none' }).eq(0).css('display', 'block').attr('data-selectedslide', 'true');

    jQuery('#menu ul li a').click(function (e, keepScroll) {

        /* On a thumbnail click */

        jQuery('li.menuItem').removeClass('act').addClass('inact');
        jQuery(this).parent().addClass('act');

        var pos = jQuery(this).parent().prevAll('.menuItem').length;

        // fade out previous slide
        jQuery('div[data-selectedslide="true"]').attr('data-selectedslide', null).fadeOut(450);

        e.preventDefault();
        ///* Prevent the default action of the link */
        var anchor = jQuery('a[name="' + jQuery(this).attr('href').substr(1) + '"]');
        var slide = anchor.next();
        slide.detach();
        anchor.after(slide);
        slide.attr('data-selectedslide', 'true').fadeIn(450);
        slide.children('p').focus();

        // Stop the auto-advance if an icon has been clicked:
        if (!keepScroll) {
            clearInterval(_sliderInterval);
            _sliderInterval = null;
        }


    });

    jQuery('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
    /* On page load, mark the first thumbnail as active */



    /*****
	 *
	 *	Enabling auto-advance.
	 *
	 ****/

    var current = 1;
    function autoAdvance() {
        if (current == -1) return false;

        jQuery('#menu ul li a').eq(current % jQuery('#menu ul li a').length).trigger('click', [true]);	// [true] will be passed as the keepScroll parameter of the click function on line 28
        current++;
    }

    // The number of seconds that the slider will auto-advance in:

    var changeEvery = 5;

    _startSliderInterval = function () {
        _sliderInterval = setInterval(autoAdvance, changeEvery * 500);
    };
    _startSliderInterval();

    

    /* End of customizations */
});



function stopMainSlider() {
    if (_sliderInterval) {
        clearInterval(_sliderInterval);
        _sliderInterval = null;
    }
};

function startMainSlider() {
    if (!_sliderInterval) {
        _startSliderInterval();
    }
};
