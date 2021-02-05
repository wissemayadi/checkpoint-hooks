import React from 'react'
import ReactPlayer from 'react-player';
import "./index.css";
const Description = ({movies , match}) => {
    
    var descrip=movies.find((el)=>el.name===match.params.name)
    // var movieDesc;
    // if(descrip)
    // movieDesc=<div>
    // <p>{descrip.description}</p>
    // <p>{descrip.trailer}</p>
    // </div>;
    // else <div><h2>film does not exist</h2></div>
    return (
        <div className="description">
     {console.log(descrip)}
     <h4>{descrip.name}</h4>
    <h4>{descrip.description}</h4>
    <div className="video">
    <ReactPlayer url={descrip.trailer}
  
    
    />
</div>
        </div>
    )
}

export default Description
