var Search = ({youtubeSearch}) => {
//ES6 SHORTHAND SYNTAX
//var props = {'a': 1, 'b': 2}
//var {a,b} = props
//a is now 1, b is now 2

  var onChangeFunction = function(event) {
    
    youtubeSearch(event.target.value);
  
  };
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={ onChangeFunction }/>
      <button className="btn hidden-sm-down" >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
