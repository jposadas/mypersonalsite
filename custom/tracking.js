(function($) {

    $(document).ready(function() {

        $.ajax({
            type: "GET",
            url: "custom/tracklist.json",
            dataType: "json"
        }).done(function(data) {
            console.log(data);
        });

    });

})(jQuery);