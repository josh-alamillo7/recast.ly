var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    data: {
      part: 'snippet',
      key: options.key || window.YOUTUBE_API_KEY,
      q: options.query || 'baby elephants',
      maxResults: options.max || '5',
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: function(results) {
      // console.log(results);
      callback(results.items);
    },
  });
};

window.searchYouTube = searchYouTube;
