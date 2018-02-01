class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideo: {
        id: {
          videoId: ''
        },
        snippet: {
          title: '', 
          description: ''
        }
      },
      videoList: [],
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }
  
  componentDidMount() {
    // console.log(this.props);
    // do a youtube search here
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: 'tiny pandas',
      maxResults: 5
    }, (function(data) {
      this.setState({
        currentVideo: data[0],
        videoList: data
      });
    }).bind(this));
    
    // populate the VideoList with a default search
  }
  
  handleOnKeyUp(event) {
    // console.log('handleOnKeyUp', searchTerm.target.value);
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: event.target.value,
      maxResults: 5
    }, (function(data) {
      this.setState({
        currentVideo: data[0],
        videoList: data
      });
    }).bind(this));
  }
  
  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
   
  render() {
  
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleOnKeyUp={this.handleOnKeyUp} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}  />
          </div>
          <VideoList videos={this.state.videoList} handleClick = {this.handleClick}/>
        </div>
      </div>
    );
  
  }
  
  

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
