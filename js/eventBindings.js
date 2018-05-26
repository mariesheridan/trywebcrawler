$(document).ready(function() {
    var paramsFormID = "#parameters";
    $(paramsFormID).on("submit", function(e){
        e.preventDefault();
        var url = $(paramsFormID).find("input[name='url']").first().val();
        var depth = $(paramsFormID).find("input[name='depth']").first().val();
        var includeAssets = $(paramsFormID).find("input[name='include-assets']").first().is(':checked');
        Crawler.crawl(url, depth, includeAssets);
    });
});
