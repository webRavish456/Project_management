
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import MeetingScheduled from "../MeetingScheduled/MeetingScheduled";
const LayoutMeetingScheduled=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            
            <MeetingScheduled className="meetingscheduled" />
            
            
            
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutMeetingScheduled;