var page = require('webpage').create();
page.open('https://play.spotify.com', function() {
  page.includeJs("https://code.jquery.com/jquery-1.11.3.min.js", function() {
    page.evaluate(function() {
      $("#has-account").click();
      page.render('spotify-progress.png');
    });
    phantom.exit()
  });
});
