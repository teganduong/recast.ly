var searchYouTube = (options, callback) => {

  options = {
    q: options.query,
    maxResults: options.max,
    key: options.key,
    part: 'snippet',
    type: 'video'
  };
 
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    cache: false,
    data: options,
    success: function(data) {
      console.log('here is the data',data);
      callback(data.items);
    },
    error: function(xhr, status, err) {
      console.log('fail');
    }
  });
};

window.searchYouTube = searchYouTube;
