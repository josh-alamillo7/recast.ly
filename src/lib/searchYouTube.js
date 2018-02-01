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

var getVideoInformation = (videoId, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos/',
    data: {
      id: videoId,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet,contentDetails,statistics'
    },
    success: function(results) {
      callback(results.items[0]);
    },
  });
    
};


window.searchYouTube = searchYouTube;
window.getVideoInformation = getVideoInformation;
