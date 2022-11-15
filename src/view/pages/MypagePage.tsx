// import Navbar4 from "../components/Navbar/Navbar4/Navbar4";

import MyProfile from "../components/MypagePage/MyPageProfile/MyProfile";
import MyPlaylist from "../components/MypagePage/MyPagePlaylist/MyPlaylist";
import MyWork from "../components/MypagePage/MyPageWork/MyWork";
import More from "../components/MoreButton/More";


import './MypagePage.scss'

const MypagePage = () => {
  return (
    <div className="Mypage">
      <MyProfile />
      <MyPlaylist />
      <MyWork />
      <More />
    </div>
  )
}
export default MypagePage;