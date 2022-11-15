import React, { Component } from "react";
import { BiPlusCircle, BiSearch} from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import './SearchComp.scss'

class SearchComp extends Component {
  render() {

    return (

      <div className="SearchComp">

          <div className="addbar">
            <BiPlusCircle className="plus" />
          </div>
          <div className="searchbar">
            <BiSearch className="searchicon"/>
          </div>

      </div>

    )

  }
  
}

export default SearchComp;