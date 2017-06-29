/*jslint browser: true*/
/*jslint node: true */
/*global $, jQuery, alert*/
//JavaScript document for index-jQueryFunctions.html
"use strict";

$(document).ready(function () {
    //hide images on click of image
    $(".ninjaCat").click(function () {
        $(this).hide();
    });
    //retore all images on click of button
    $("button").click(function () {
        $(".ninjaCat").show();
    });
});