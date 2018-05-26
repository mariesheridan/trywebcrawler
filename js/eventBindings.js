$(document).ready(function() {
    $('#parameters').on('submit', function(e){
        e.preventDefault();
        console.log("hit");
        Crawler.startCrawl('#parameters');
    });

    $('#submit-parameters').on('click', function(e){
        e.preventDefault();
        console.log("hit");
        Crawler.startCrawl('#parameters');
    });
});
