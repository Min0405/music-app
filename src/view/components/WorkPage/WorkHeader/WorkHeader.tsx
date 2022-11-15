import React, { Component } from "react";
// import { BiPlusCircle, BiSearch} from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import CategorieComp from "../../CategorieComponent/CategorieComp";
import SearchComp from "../../SearchComponent/SearchComp";

import './WorkHeader.scss'

class WorkHeader extends Component {
  render() {

    return (

          <div className="WorkHeader">

            <SearchComp />

            <div className="WorkCategorie">
              <CategorieComp categorieText="pop"/>
              <CategorieComp categorieText="가요"/>
              <CategorieComp categorieText="k-pop"/>
              <CategorieComp categorieText="r&b"/>
              <CategorieComp categorieText="jazz"/>
            </div>
            <div className="WorkCategorie2">
              <CategorieComp categorieText="base"/>
              <CategorieComp categorieText="guitar"/>
              <CategorieComp categorieText="vocal"/>
              <CategorieComp categorieText="piano"/>
            </div>

          </div>

    )

  }
  
}

export default WorkHeader;