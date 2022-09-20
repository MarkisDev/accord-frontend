import React, {useState} from 'react'
import CreateRoomContext from '../../../Context/CreateRoomContext'
import JoinRoomContext from '../../../Context/JoinRoomContext';
import CreateRoom from './CreateRoom'
import JoinRoom from './JoinRoom'
import './popup.css'
import useChat from '../../../hooks/useChat';

export default function Popup(){

    const { setInfo } = useChat();

    const [activeTab, setActiveTab] = useState("tab1");
    const [ roomName, setRoomName ] = useState('');
    const [ joinCode, setjoinCode ] = useState();

    // const pop = useContext(InfoContext)

    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    function pop(){
        setInfo(prevState => !prevState)
    }

    return(
        <div className="popup" onClick={(e)=> e.currentTarget === e.target && pop()}>
            <div className="popup-container">  
                <div className="Tabs">
                    {/* Tab nav */}
                    <ul className="nav">
                        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Create Room</li>
                        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Join Room</li>
                    </ul>
                    <div className="outlet">
                        {activeTab === "tab1" ? 
                            <CreateRoomContext.Provider value={{ roomName, setRoomName }}>
                                <CreateRoom />
                            </CreateRoomContext.Provider>
                                : 
                            <JoinRoomContext.Provider value={{ joinCode, setjoinCode }}>
                                <JoinRoom />
                            </JoinRoomContext.Provider>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}