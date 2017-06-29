/*jslint browser: true*/
/*jslint node: true */
/*global $, jQuery, alert*/
//JavaScript document for index-jQueryFunctions.html
"use strict";

$(document).ready(function () {
    // window.alert("Houston, we have contact!"); //for checking connection to .js file
    //GLOBAL ACTIONS
    //on hover: list item background-color changes to lightyellow
    $("ul li").hover(
        function () {
            $(this).css({
                "border-bottom": "1px solid white",
                "border-left": "2px solid white",
                "border-top": "1px solid white",
                "border-right": "1px solid white"
            });
        },
        function () {
            $(this).css({
                "border-bottom": "",
                "border-left": "",
                "border-top": "",
                "border-right": ""
            });
        }
    );

    //Set buttons to a random color from an array of colors
    var colors = ["lightcoral", "lightblue", "lightgoldenrodyellow", "lightgreen", "lightpink", "lightsalmon", "lightskyblue"],
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    $("button").css("background-color", randomColor);

    //addClass button highlights the <p> with id#overachieve
    $("#addClass").click(function () {
        $("#overachieve").addClass("highlight");
    });

    //after button inserts text "noon delight" after the section header
    $("#after").click(function () {
        $(".skyRocketsInFlight").after("<h2>-noon delight!</h2>");
    });

    //append button inserts text "icitis" after section header
    $("#append").click(function () {
        $("#appendix").append("icitis!");
    });

    //attr button tells the user what the img src is
    $("#attr").click(function () {
        var imgSource = $("#jQueryLogo").attr("src");
        $("#checkSource").text("The image source attribute is set to '" + imgSource + "'.");
    });
});

/*
NOTES:

Given an unordered list with list elements, this use of .addClass adds the class "item-0" to the first, "item-1" to the second, and so on. 
    $( "ul li" ).addClass(function( index ) {
    return "item-" + index;
    });


*/