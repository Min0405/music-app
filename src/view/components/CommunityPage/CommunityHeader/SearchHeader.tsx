import React, { Component } from "react";
// import { BiPlusCircle, BiSearch} from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import CategorieComp from "../../CategorieComponent/CategorieComp";
import SearchComp from "../../SearchComponent/SearchComp";

import './SearchHeader.scss'

class SearchHeader extends Component {
  render() {

    return (

          <div className="SearchHeader">

            <SearchComp />

            <div className="categorie">
              <CategorieComp categorieText="review"/>
              <CategorieComp categorieText="Q&A"/>
              <CategorieComp categorieText="k-pop"/>
              <CategorieComp categorieText="취미"/>
              <CategorieComp categorieText="입시"/>
            </div>
            <div className="categorie2">
              <CategorieComp categorieText="base"/>
              <CategorieComp categorieText="guitar"/>
              <CategorieComp categorieText="vocal"/>
              <CategorieComp categorieText="piano"/>
            </div>

          </div>

    )

  }
  
}

export default SearchHeader;