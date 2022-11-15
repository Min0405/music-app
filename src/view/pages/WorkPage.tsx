// import Navbar1 from "../components/Navbar/Navbar1/Navbar1";
import WorkHeader from '../components/WorkPage/WorkHeader/WorkHeader';
// import CommPost from "../components/CommunityPage/CommPost";
// import CommProfile from "../components/CommunityPage/CommProfile/CommProfile";
// import CommuMore from "../components/MainPage/More/CommuMore";
import WorkPost from '../components/WorkPage/WorkPost';
import More from '../components/MoreButton/More';


import './WorkPage.scss'

const WorkPage = () => {
  return (
    <div className="Works">
      <WorkHeader />
      <WorkPost />
      <More />
    </div>
  )
}
export default WorkPage;