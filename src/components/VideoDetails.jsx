var VideoDetails = ({video, singleVideoSearch, details}) => {

  return (
  <div>
    Video Details! Yay!
    {video.snippet.description}
    <div className="video-full-details">
      <button type="submit" onClick={ singleVideoSearch }>More details</button>
    </div>
    <div>
    {details}
    </div>

  </div>
  );
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;
