/*jslint browser: true*/
/*jslint node: true */
/*global $, jQuery, alert*/
//JavaScript document for index-jQueryFunctions.html
"use strict";

$(document).ready(function () {
    //changes image src attribute on click of image
    $(".ninjaCat").click(function () {
        $(this).attr('src', $(this).attr('data-alt-src'));
    });
});