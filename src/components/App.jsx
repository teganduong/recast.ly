class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0]
    };

  }

  onVideoEntryClick(video) {
    this.setState({
      currentVideo: video
    });  
  }

  componentDidMount() {
    this.getYoutubeVideos({key:YOUTUBE_API_KEY, query:'react', max:10 },() => {});
  }
  
  getYoutubeVideos(options,callback) {
    var data = searchYouTube(options,callback);
    console.log(data);
    this.setState({videos: data});
  }
  
  
  render() {
    return (
    <div>
      <Nav getYoutubeVideos = {this.getYoutubeVideos.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
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
