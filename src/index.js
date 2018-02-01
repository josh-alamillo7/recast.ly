ReactDOM.render(<App searchYouTube={_.throttle(searchYouTube, 500)} />, document.getElementById('app'));

