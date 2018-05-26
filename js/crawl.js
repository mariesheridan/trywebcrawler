var Crawler = {

    startCrawl: function(paramsFormID) {
        var url = $(paramsFormID).find("input[name='url']").first().val();
        var depth = $(paramsFormID).find("input[name='depth']").first().val();
        var includeAssets = $(paramsFormID).find("input[name='include-assets']").first().is(':checked');
        this.crawl(url, depth, includeAssets);
    },

    crawl: function(url, depth, includeAssets) {
        console.log('crawl:');
        console.log('url: ' + url);
        console.log('depth: ' + depth);
        console.log('includeAssets: ' + includeAssets);
    }
};
