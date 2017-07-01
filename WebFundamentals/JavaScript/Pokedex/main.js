/*jslint browser: true*/
/*jslint node: true */
/*jslint plusplus: true */
/*global $, jQuery, alert*/

//JavaScript document for index-Pokedex.html
"use strict";

$(document).ready(function () {
    var i, n, pic, html_str, t;
    
    for (i = 1; i < 152; i++) {
        $('#pokemon').append("<img src='http://pokeapi.co/media/img/" + i + ".png' idNum=" + i + ">");
        // console.log("<img src='http://pokeapi.co/media/img/" + i + ".png'>");    //For debugging
    }

    //Inserting code into div with #pokedex
    $("img").click(function () {
        n = $(this).attr("idNum"); //using n to set up callback for specific JSON requests
        pic = $(this).attr("src"); //using pic to set up callback for img
        $.get("http://pokeapi.co/api/v1/pokemon/" + n + "/", function (res) { //pass in URL with var n; declare variable res
            html_str = ""; //declare var html_str as empty string so that we can use it for callback
            html_str += "<h2>" + res.name + "</h2>"; //starts with target Pokemon name
            html_str += "<img src='" + pic + "'>";
            html_str += "<h4>Types:</h4>"; //starts HTML string with "<h4>Types</h4>"
            html_str += "<ul>"; //next string inserted is "<ul>"
            for (t = 0; t < res.types.length; t++) { //this for loop lists all values under Pokemon type
                html_str += "<li class='" + res.types[t].name + "'>" + res.types[t].name + "</li>"; //adds string "<li>pokemonType</li>"
            }
            html_str += "</ul>"; //adds closing tag </ul>
            html_str += "<h4>Height:</h4>";
            html_str += "<p>" + (res.height * 10) + " cm</p>";
            html_str += "<h4>Weight:</h4>";
            html_str += "<p>" + (res.weight / 10) + " kg</p>";

            $("#pokedex").html(html_str); //calls the function
        }, "json");
    });

    $("html, body, h1").click(function () {
        $("#pokedex").html("<h2>Pokédex</h2><h4>Click on a pokémon to learn more about it</h4>");
    });

    //on hover: image background-color changes to white
    $("img").hover(
        function () {
            $(this).css({
                "border": "1px solid lightcoral",
                "border-radius": "50%"
            });
        },
        function () {
            $(this).css({
                "border": "",
                "border-radius": ""
            });
        }
    );

    //pokedex float

});