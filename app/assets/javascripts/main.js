function random_compliment(event) {
    var ui_config = {
    services_compact: 'facebook, myspace, igoogle, netvibes, windows, dashboard, more'
    };
    compliment = compliments[Math.floor(Math.random() * compliments.length)];
    console.log(compliment.phrase);
    $(".compliment").html(compliment.phrase);
    $(".better a").attr("href", compliment.link);
    $("body").css("background-color", compliment.color);
    // stWidget.addEntry({
    //              "service":"sharethis",
    //              "element":document.getElementById('st'),
    //             "url":"http://emergencycompliment.com",
    //              "title":compliment.phrase,
    //              "type":"custom",
    //              "summary": compliment.phrase
    // });
}


function init() {
    random_compliment();
    $(".more").on("click", function(event){
        event.preventDefault();
        random_compliment();
    });
}

$(document).ready(function() {
    init();
});
