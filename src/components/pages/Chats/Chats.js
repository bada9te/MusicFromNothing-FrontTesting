import Topbar from "../../top-bar/top-bar";
import LeftbarChats from "../../left-bar-chats/left-bar-chats";
import MessagesView from "../../messages-view/messages-view";
import RightBarUserInfo from "../../right-bar-user-info/right-bar-user-info";

import '../scroll-bar.css'

const Chats = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Chats" username="UserName" where="chats"/>
                </div>
                <div className="row">
                    <div className="col overflow-auto p-0">
                        <LeftbarChats/>
                    </div>
                    <div className="col-8 overflow-auto p-0">
                        <MessagesView/>
                    </div>
                    <div className="col overflow-auto p-0">
                        <RightBarUserInfo/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Chats;