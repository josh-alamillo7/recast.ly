var VideoDetails = (props) => (
  <div className="video-details" onClick={() => props.handleVideoDetailsClick()}>
    {'Comments: ' + Number(props.videoDetails.statistics.commentCount).toLocaleString() + ' '}
    {'Likes: ' + Number(props.videoDetails.statistics.likeCount).toLocaleString() + ' '}
    {'Dislikes: ' + Number(props.videoDetails.statistics.dislikeCount).toLocaleString() + ' '}
    {'Views: ' + Number(props.videoDetails.statistics.viewCount).toLocaleString()}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoDetails = VideoDetails;
