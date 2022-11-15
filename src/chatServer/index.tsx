import './css/Rename.scss';
// import { send } from 'process';
// import { send } from 'process';

function chat () {
  return (
    <div>
    <div className="wrapper">
        <div className="user-container">
            <label htmlFor="nickname">대화명</label>
            <input type="text" id="nickname" />
        </div>
        <div className="display-container">
            <ul className="chatting-list">
                
            </ul>
        </div>
        <div className="input-container">
            <span>
                <input type="text" className="chatting-input" onKeyPress={(e) => {if(e.key==='13'){send()}}}/>
                <button className="send-button">전송</button>
            </span>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.4.0/socket.io.js" integrity="sha512-nYuHvSAhY5lFZ4ixSViOwsEKFvlxHMU2NHts1ILuJgOS6ptUmAGt/0i5czIgMOahKZ6JN84YFDA+mCdky7dD8A==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    <script src="js/chat.js"></script>
    </div>
  )

}

export default chat;
