class App extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData,
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(video) {
    // console.log(arguments);
    this.setState({
      currentVideo: video
    });
  }
   
  render() {
  
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
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
