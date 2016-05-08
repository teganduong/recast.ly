class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0],
      details: ''
    };
    // console.log(props);
  }


  onVideoEntryClick(video) {
    this.setState({
      currentVideo: video
    });  
  }

  updateVideo(data) {
    this.setState({videos: data});
  }

  updateDetails(data) {
    var details = data.snippet.description;
    this.setState({details: details});
    console.log('details', details);
  }
  
  componentDidMount() {
    this.youtubeSearch('');
  }

  youtubeSearch(query) {
    this.props.searchYouTube({query: query, max: 10, key: YOUTUBE_API_KEY}, this.updateVideo.bind(this));
  }

  singleVideoSearch() {
    detailedVideoSearch({key: YOUTUBE_API_KEY, id: this.state.currentVideo.id.videoId}, this.updateDetails.bind(this));
  }
  
  render() {
    return (
    <div>
      <Nav youtubeSearch = { _.debounce( this.youtubeSearch.bind(this), 500 )}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
        <VideoDetails 
          video={this.state.currentVideo}
          singleVideoSearch={this.singleVideoSearch.bind(this)}
          details={this.state.details}
        />
      </div>

      <div className="col-md-5">
        <VideoList 
          videos={this.state.videos} 
          onVideoEntryClick = {this.onVideoEntryClick.bind(this)}
        />
      </div>
    </div>
    );
  }

  
} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
