import './ListAlbum.scss'

import { BiAddToQueue } from 'react-icons/bi'
// import { Url } from 'url';

interface ListAlbumProps {
    Listusername: string;
    Listtitle: string;
    Listiimg: string;
}

const ListAlbum = ({ Listusername, Listtitle, Listiimg }: ListAlbumProps) => {

  return (

    <div className='ListAlbum'>


        <img className='List-Album' src={Listiimg} alt="phot" />


      <div className='ListAlbum-contents'>

        <div className='List-Text'>
          <h1 className='List-username'>{Listusername}님의</h1>
          <h1 className='List-title'>{Listtitle} 플레이리스트</h1>
        </div>

        <BiAddToQueue className='List-add-icon'/>
      </div>

    </div>
  )
} 

export default ListAlbum;