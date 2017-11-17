$('button').on('click', function () {
    var x = $(this).data("search");

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x +
        "&api_key=LrNfSCaBFhw5EWI7KTET75DCATEBmOvl";
    console.log(queryURL);

    $.ajax({ url: queryURL, method: 'GET' })
        .done(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                $('#movie-button-display').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                $('#movie-button-display').prepend("<img src='" + response.data[i].images.
                    downsized.url + "'>");
            }

        })

});
//I have repeated code that adds double buttons


$(document).on("ready", function() {
    var topics = ["Mr. Robot", "Atlanta", "Master of None", "Billions"];

    function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty()
        for (var index = 0; index < arrayToUse.length; index++) {
            var button = $("<button>");
            button.addClass(classToAdd);
            button.attr("data-type", arrayToUse[index])
            button.text(arrayToUse[index])
            $(areaToAddTo).append(button)
        }
    }

    $(document).on("click", ".movie-button", function() {
        $("#movies").empty()
        $(".movie-button").removeClass("active")
        $(this).addClass("active")
        
        var type = $(this).attr("data-type")
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=LrNfSCaBFhw5EWI7KTET75DCATEBmOvl";

        $.ajax({ 
            url: queryURL, 
            method: 'GET' 
        })
        .done(function (response) {
            console.log(response);
            var results = response.data
            for (var index = 0; index < array.length; index++) {
            var movieDiv = $("<div class=\"movie-item\">")

            var rating = results[index].rating

            var p = $("<p>").text("Rating: " + rating);

            var animated = results[index].images.fixed_height.url
            var still = results[index].images.fixed_height_still.url

            var movieImage = $("<img>")
            // append relevant information to movieimage then append it all to moviediv
            // then append movie div to the body or a div inside body
                
            }
            
        });
        // create event listener that pauses and starts gifs
        
    }) 
    

    populateButtons(topics, "movie-button", "#movie-button-display");
});
