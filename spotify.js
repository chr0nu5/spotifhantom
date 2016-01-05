var page = require('webpage').create();

page.open('https://play.spotify.com', function() {
  page.viewportSize = {
    width: 1280,
    height: 1024
  };
  page.evaluate(function() {
    var ev = document.createEvent("MouseEvents");
    ev.initEvent("click", true, true);
    document.querySelector("a[id='has-account']").dispatchEvent(ev);

    document.getElementById("login-usr").value = "bloom_im";
    document.getElementById("login-pass").value = "deustriuno";

    document.querySelector("button[type='submit']").click();

  });
  setTimeout(function(){
    page.render("spotify-progress.png");
    console.log(page.content);
    phantom.exit();
  },5000);
});
