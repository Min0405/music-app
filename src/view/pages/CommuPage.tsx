// import Navbar1 from "../components/Navbar/Navbar1/Navbar1";
import SearchHeader from "../components/CommunityPage/CommunityHeader/SearchHeader";
import CommPost from "../components/CommunityPage/CommPost";
// import CommProfile from "../components/CommunityPage/CommProfile/CommProfile";
import CommuMore from "../components/MainPage/More/CommuMore";

import './CommuPage.scss'

const CommuPage = () => {
  return (
    <div className="Commu">
      {/* <Navbar1 /> */}
      <SearchHeader />
      <CommPost />
      <div className="CommuMore">
        <CommuMore />
      </div>
      
    </div>
  )
}
export default CommuPage;