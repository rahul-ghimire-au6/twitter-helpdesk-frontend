import React, { Component, Fragment } from "react";
import LeftNav from "./component/left_nav/left_nav";
import "./home.css";
import Input159 from "./component/input/input";
import {
  ControlOutlined,
  CaretDownOutlined,
  DownOutlined,
  PaperClipOutlined
} from "@ant-design/icons";
import friend1 from "./assests/img/friend1.jpg";
import friend2 from "./assests/img/friend2.jpg";
import friend3 from "./assests/img/friend3.jpg";
import friend4 from "./assests/img/friend4.jpg";
import friend5 from "./assests/img/friend5.jpg";
import friend6 from "./assests/img/friend6.jpg";
import dirtyroom from './assests/img/dirtyroom.png';
import chatgirl from './assests/img/chatgirl.png';

class Backup159 extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Fragment>
        <LeftNav profilepic="https://pbs.twimg.com/profile_images/750017076287250432/auHBa8hg_normal.jpg" />
        <div className="main-container">
          {/* start of top nav bar */}
          <div className="top-nav">
            <div>
              <p style={{ marginBottom: "0.1em" }}>Updates</p>
              <div className="update-underline"></div>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "3em" }}>
                Session: <span>34 minutes</span>
              </p>
              <p>
                User: <span>Ann Tsibulski</span>
              </p>
            </div>
          </div>
          {/* end of top nav bar */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
              <div>
                <h1>Conversations</h1>
              </div>
              <div className="input-icons">
                <i className="fa fa-search" style={{ color: "gray" }}></i>
                <Input159
                  typevalue="text"
                  placeholdervalue="Quick search"
                  classnamevalue="quick_search"
                />
              </div>
              <div className="filter">
                <ControlOutlined style={{ marginLeft: "0.8em" }} />
                <span style={{ marginLeft: "0.6em" }}>Filter</span>
              </div>
            </div>
            <div className="online-container">
              <div className="online-dot"></div>
              <div className="online-text">
                <span>Online</span>
              </div>
              <div className="online-arrow">
                <CaretDownOutlined />
              </div>
            </div>
          </div>
          {/* end */}
          {/* start of main contain */}
          <div className="sub-main-container">
            {/* chat list */}
            <div>
              {/* box1 */}
              <div className="friend-info">
                <div style={{ display: "flex" }}>
                  <img
                    src={friend1}
                    alt="friend1"
                    className="friend-info-img"
                  />
                  <span className="friend-info-text1">Mbah Enow</span>
                </div>
                <div>
                  <p className="friend-info-text2">
                    Hello there! May I ask a flavor?
                  </p>
                </div>
              </div>
              {/* end */}
              {/* box2 */}
              <div
                className="friend-info"
                style={{ backgroundColor: "#F7F6F3" }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    src={friend3}
                    alt="friend3"
                    className="friend-info-img"
                  />
                  <span className="friend-info2-text1">Ea Tipene</span>
                  <div
                    className="online-dot"
                    style={{ marginLeft: "0.5em", marginTop: "0.9em" }}
                  ></div>
                  <div className="red-notification">
                    <span
                      style={{
                        position: "relative",
                        bottom: "0.1em",
                        fontSize: "0.8em",
                      }}
                    >
                      2
                    </span>
                  </div>
                </div>
                <div>
                  <p className="friend-info2-text2">You: Hello dear Ea!</p>
                  <span className="friend-info2-text3">
                    Sorry for inconviences. I am...
                  </span>
                </div>
              </div>
              {/* end   */}
              {/* box3 */}
              <div className="friend-info">
                <div style={{ display: "flex" }}>
                  <img
                    src={friend2}
                    alt="friend1"
                    className="friend-info-img"
                  />
                  <span className="friend-info-text1">Vicente de la Cruz</span>
                </div>
                <div>
                  <p className="friend-info2-text2">Hello dear!</p>
                </div>
                <span className="friend-info2-text3">
                  Sorry for inconviences. I am...
                </span>
              </div>
              {/* end   */}
              {/* box4 */}
              <div className="friend-info">
                <div style={{ display: "flex" }}>
                  <img
                    src={friend4}
                    alt="friend1"
                    className="friend-info-img"
                  />
                  <span className="friend-info-text1">Wen Yahui</span>
                </div>
                <div>
                  <p className="friend-info2-text2">Hello dear!</p>
                </div>
                <span className="friend-info2-text3">
                  Sorry for inconviences. I am...
                </span>
              </div>
              {/* end   */}
              {/* start of expired */}
              <div style={{ display: "flex", marginTop: "0.5em" }}>
                <div className="expired-dash-left"></div>
                <div className="expired-text">Expired chats</div>
                <div className="expired-dash-right"></div>
              </div>
              {/* end */}
              {/* box4 */}
              <div className="friend-info">
                <div style={{ display: "flex" }}>
                  <img
                    src={friend5}
                    alt="friend1"
                    className="friend-info-img"
                  />
                  <span className="friend-info-text1">Amelia Cabal</span>
                </div>
                <div>
                  <p className="friend-info2-text2">
                    I'm sorry, could you bring me a cup of coffee!
                  </p>
                </div>
              </div>
              {/* end   */}
              {/* box5 */}
              <div className="friend-info">
              <div style={{ display: "flex" }}>
                  <img
                    src={friend6}
                    alt="friend6"
                    className="friend-info-img"
                  />
                  <span className="friend-info-text1">Jennifer Reid</span>
                </div>
                <div>
                  <p className="friend-info2-text2">Hello dear!</p>
                </div>
                <span className="friend-info2-text3">
                  Sorry for inconviences. I am...
                </span>
              </div>
              {/* end   */}
            </div>
            {/* end */}
            {/* chat div */}
            <div style={{ display: "flex" }}>
              {/* chat div 1 */}
              <div>              
                <div className="chat-div">
                      {/* start of chat nav */}
                  <div className='chat-nav'>
                    <div style={{display:'flex'}}>
                      <div>
                      <img src={friend3} alt='friend2' className='friend-info-img' />
                      </div>                    
                    <span style={{marginLeft:'0.5em',marginTop:'1em',fontWeight:'500'}}>Ea Tipene</span>
                    <div className='online-dot2'>
                    </div>
                    </div>                    
                    <div>
                    <p>Room 102</p>
                    </div>
                    <div style={ { display:'flex' }}>
                    <p style={{color:'gray'}}>Oct1</p><div style={{marginLeft:'0.5em',marginRight:'0.5em',border:'1px solid gray',width:'0.5em',height:'0em',marginTop:'1.7em'}}></div><p style={{color:'gray'}}>Oct 12</p>
                    </div>
                    <div style={{marginTop:'1em',backgroundColor:'#d3d3d3',width:'6em',height:'1.5em',paddingRight:'0.5em',paddingLeft:'0.5em', borderRadius:'1em'}}>
                    <span style={{fontWeight:'500'}}>Create a task</span>
                    </div>
                    </div>
                    {/* end */}
                      <div style={{color:'gray', marginTop:'1em',marginLeft:'5em'}}>Today</div>
                      <div style={{marginLeft:'2.4em',marginRight:'3em'}}>              
                      <div style={{display:'flex', justifyContent:'space-between'}} >
                        <div style={{display:'flex'}}>
                        <div>
                        <img src={friend3} alt='friend2' className='friend-info-img' />
                        </div>
                        <div>
                        <p style={{paddingLeft:'0.5em',fontWeight:'500',marginBottom:'0em',paddingBottom:'0em'}}>Hi there!</p>
                        <p style={{fontWeight:'500',marginTop:'0.2em', marginLeft:'0.5em', marginBottom:'0.2em'}}>I have a problem in my room, it needs to be cleaned</p>
                        <img src={dirtyroom} alt='dirtyroom'/>                        
                        </div>
                        </div>
                        <div>
                          <p style={{color:'gray'}}>10:34</p>
                          </div>                      
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',marginLeft:'2em'}}>
                        <p style={{fontWeight:'500',marginTop:'0.2em', marginLeft:'0.5em', marginBottom:'0.2em'}}>This is what I see! Not good!</p>
                        <p style={{color:'gray',marginTop:'0em'}}>10:35</p>
                        </div>
                        <div style={{display:'flex'}}>
                          <div>
                          <img src={chatgirl} alt='chatgirl' style={{marginTop:'1em',marginLeft:'0.5em'}}/>
                          </div>
                          <div>
                            <p style={{color:'#BE2C22', fontWeight:'500',marginLeft:'0.5em'}}>Ann Tsibulski</p>
                            </div>
                            <div>
                              <p style={{marginLeft:'0.5em', color:'gray',fontWeight:'500'}}>(you) assigned to this conversation</p>
                              </div>
                          </div>

                          <div style={ { display:'flex',justifyContent:'space-between'}}>
                            <div style={{display:'flex'}}>
                              <div>
                            <img src={friend5} alt='friend2' className='friend-info-img' />
                            </div>
                            <div>
                              <p style={{fontWeight:'500',marginLeft:'0.5em',marginTop:'0.7em',marginBottom:'0em'}}>Hello dear Ea!</p>                            
                              </div>
                            <div>
                              </div>
                            </div>
                            <div>
                              <p style={{color:'gray',marginTop:'0em'}}>10:35 (Reaction 10 sec)</p>
                              </div>
                            </div>
                            <div style={{marginLeft:'2.5em'}}>
                            <p style={{fontWeight:'500',marginTop:'0em'}}>Sorry for inconviences. I am sending our manager Maria Peterson to your<br/>room 102</p>
                            </div>
                            {/* end */}
                            {/* start of input type text */}
                            <div style={{display:'flex', marginTop:'5em'}}>
                              <div style={{marginTop:'2em'}}>
                            <img src={friend5} alt='friend2' className='friend-info-img' />
                            </div>
                            <div>
                              {/* start */}
                              <div className="input-icons2">
                              <i style={{ color: "gray" }}><PaperClipOutlined style={{fontSize:'1.3em'}}/></i>
                              <Input159
                              typevalue="text"
                              placeholdervalue="Reply..."
                              classnamevalue="attach_reply"
                                />
                              </div>
                              {/* end */}
                              </div>
                            </div>
                              {/* end */}
                            
                      

                          
                          

                        </div>


                </div>
              </div>
              {/* end */}
              {/* friend info 1 */}
              <div>
                <div className="friend-detail">
                  <div className='cloxe'><span style={{marginLeft:'0.4em'}}>X</span></div>
                  <div>
                  <div style={{display:'flex',justifyContent:'center',marginBottom:'0em'}}>
                  <img src={friend3} alt='friend2' className='friend-detail-img'/>                
                  </div>                  
                    <div style={ { marginRight:'2em', display:'flex',justifyContent:'center' }}>
                  <h3 style={{marginBottom:'0em',marginTop:'0.5em',paddingBottom:'0em'}}>Ea Tipene</h3>
                  </div>
                  <div style={{marginRight:'2em',display:'flex',justifyContent:'center'}}>                                
                  <p style={{marginTop:'0.2em' ,marginBottom:'0em',paddingBottom:'0em',color:'limegreen'}}>online</p>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',marginTop:'0.5em',marginRight:'1em'}}>
                    <div className='call159'><i style={{marginTop:'0.2em',marginRight:'0.2em'}} className="fa fa-phone" aria-hidden="true"></i><span>Call</span></div>
                    <div className='email159'><i style={{marginTop:'0.2em',marginRight:'0.2em'}} className="fa fa-envelope" aria-hidden="true"></i><span>Email</span></div>
                    </div>                                     
                  </div>
                  <center><div style={{marginTop:'0.5em'}}>
                    <div><span className='text101'>Room</span><span style={{fontWeight:'500'}}>102</span></div>
                    <div style={{marginTop:'0.5em'}}><span className='text102'>Category</span><span style={{fontWeight:'500'}}>Standard</span></div>
                    <div style={{marginTop:'0.5em'}}><span className='text103'>Country</span><span style={{fontWeight:'500'}}>Canada</span></div>
                  </div></center>
                </div>                  
                {/* end */}
                <div className="task-div">
                  <div className="task-text-container">
                    <div>
                      <span style={{ color: "gray" }}>Tasks</span>
                    </div>
                    <div>
                      <DownOutlined style={{ fontSize: "0.8em" }} />
                    </div>
                  </div>
                  {/* end */}
                  <div className="task-checkbox-container">
                    <form>
                      <div style={{ display: "flex" }}>
                        <input
                          type="checkbox"
                          id="task1"
                          name="task1"
                          value="task1"
                        />
                        <label forhtml="task1" className="task1">
                          Clean up room
                        </label>
                        <br />
                      </div>
                      <div style={{ display: "flex" }}>
                        <input
                          type="checkbox"
                          id="task2"
                          name="task2"
                          value="task2"
                        />
                        <label forhtml="task2" className="task2">
                          Clean linenand towels
                          <br />
                          when guests are out.
                        </label>
                        <br />
                      </div>
                      <div style={{ display: "flex" }}>
                        <input
                          type="checkbox"
                          id="task3"
                          name="task3"
                          value="task3"
                        />
                        <label forhtml="task3" className="task3">
                          Bring complimentary bottle
                          <br />
                          of red wine
                        </label>
                        <br />
                        <br />
                      </div>
                    </form>
                    <div>
                      <p
                        style={{
                          color: "gray",
                          borderBottom: "1px solid gray",
                          width: "4.4em",
                        }}
                      >
                        ALL TASK
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            {/* end */}
          </div>
          {/* end */}
        </div>
      </Fragment>
    );
  }
}

export default Backup159;
