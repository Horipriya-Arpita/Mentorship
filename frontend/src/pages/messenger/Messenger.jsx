
import "./messenger.scss"
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";

export default function Messenger(){
    return (
        
        
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own = {true}/>
                        <Message />
                        <Message own = {true}/>
                        <Message />
                        <Message own = {true}/>
                    </div>
                    <div className="chatBoxBottom">
                        <textarea
                            className="chatMessageInput"
                            placeholder="write something..."
                            // onChange={(e) => setNewMessage(e.target.value)}
                            // value={newMessage}
                        ></textarea>
                        <button className="chatSubmitButton">
                            Send
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="chatOnline">
                <div className="chatOnlineWrapper">Online</div>
            </div> */}
        </div>
        
    )
}