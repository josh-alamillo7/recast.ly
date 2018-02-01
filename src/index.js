ReactDOM.render(<App searchYouTube={_.throttle(searchYouTube, 500)} getVideoInformation={getVideoInformation} />, document.getElementById('app'));

