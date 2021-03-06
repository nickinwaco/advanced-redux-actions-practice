import {connect} from "react-redux";

import {videoScale} from "../actions/index";
import ScaleVideo from "../components/ScaleVideo";



function mapDispatchToProps (dispatch){
  return {
    set: function(user) {
      let action = videoScale(user)
      dispatch(action);
    }
  }

}


export default connect(null, mapDispatchToProps)(ScaleVideo);
