import './MiniProfile.scss'

import { HiOutlineUser, HiOutlineUsers } from 'react-icons/hi'
import { BiUserPlus } from 'react-icons/bi'

interface MiniProfileProps {
  mininame: string;
}

const MiniProfile = ({ mininame }: MiniProfileProps ) => {

  return(
    <div className='MiniProfile'>

      <div className='Mini-Profile'>

        <div className='mini-header'>

          <div className='mini-top'>
            <h1 className='mini-username'>{ mininame }</h1>
            <BiUserPlus className='List-add-user'/>
          </div>

          <div className='mini-follow'>

            <div className='mini-following'>
              <HiOutlineUser className="mini-lowing-icon"/>
              <h1 className='mini-lowing'>Following</h1>
              <h1 className='mini-lowing-number'>00명</h1>
            </div>

            <div className='mini-follower'>
              <HiOutlineUsers className="mini-lower-icon"/>
              <h1 className='mini-lower'>Followers</h1>
              <h1 className='mini-lower-number'>00명</h1>
            </div>

          </div>

        </div>

        <div className='Mini-bio'>
          <h1 className='mini-bio-text'>describe yourself...</h1>
        </div>

      </div>
    </div>
  )
}

export default MiniProfile;