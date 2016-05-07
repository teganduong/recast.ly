var searchYouTube = (options, callback) => {

  options = {
    key: options.key,
    q: options.query,
    maxResults: options.max
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    cache: false,
    data: options,
    success: function(data) {
      getYoutubeVideos(data);
      callback(data);
    }.bind(this),
    error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
    }.bind(this)
  });
};

window.searchYouTube = searchYouTube;
