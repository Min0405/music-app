// import React, { Component } from "react";
// import { BiPlusCircle, BiSearch} from 'react-icons/bi'
// import { AiFillHeart } from 'react-icons/ai'

import './CategorieComp.scss'

interface CategorieCompProps {
    categorieText: string;
}

const CategorieComp = ({ categorieText }: CategorieCompProps) => {

    return (

      <div className="CategorieComp">

          <div className="Categorie">
              <button className="Cate">#{categorieText}</button>
          </div>



      </div>

    )

}

export default CategorieComp;