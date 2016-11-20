chrome.browserAction.onClicked.addListener(function(activeTab){
  
  var currentUrl=activeTab.url;
  
  /*url must be from youtube*/
  if(currentUrl.indexOf("youtube") !== -1)
  {
      /*get youtube id*/
       var startOfId=currentUrl.indexOf("=");
       var idOfSong=currentUrl.slice(startOfId,currentUrl.length);
       var newURL = "http://talala.xp3.biz//index.html?youtubeId"+idOfSong;
        chrome.tabs.create( { url: newURL} ); 
  }
  else
  {
      alert("Url must be from youtube, not this: "+activeTab.url);
  }

});