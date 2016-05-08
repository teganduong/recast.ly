var detailedVideoSearch = (options, callback) => {

  options = {
    id: options.id,
    key: options.key,
    maxResults: 1,
    part: 'snippet,contentDetails',
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    dataType: 'json',
    cache: false,
    data: options,
    success: function(data) {
      callback(data.items[0]);
      // $('.video-full-details').html(data.items[0].snippet.description);
    },
    error: function(xhr, status, err) {
      console.log('fail');
    }
  });
};

window.detailedVideoSearch = detailedVideoSearch;
