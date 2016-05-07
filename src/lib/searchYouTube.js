var searchYouTube = (options, callback) => {

  options = {
    q: options.query,
    maxResults: options.max,
    key: options.key,
    part: 'snippet'
  };
  var myData;
 
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    cache: false,
    data: options,
    success: function(data) {
      //getYoutubeVideos(data);
      myData = data.items;
      callback(data);
    }.bind(this),
    error: function(xhr, status, err) {
      console.log('fail');
      console.error(this.props.url, status, err.toString());
    }.bind(this)
  });

  return myData;
};

window.searchYouTube = searchYouTube;
