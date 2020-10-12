import React, { Component, Fragment } from "react";
import { fetch_user_data, fetch_user_tweets_from_database } from "./redux/action/actions";
import { connect } from "react-redux";
import LeftNav from "./component/left_nav/left_nav";
import "./home.css";
import Input159 from "./component/input/input";
import {
  ControlOutlined,
  CaretDownOutlined,
  DownOutlined,
  PaperClipOutlined
} from "@ant-design/icons";
class Home extends Component {
  constructor(props) {
    super();
    this.state={
      sender_tweet_id:'',
      tweet:'',
      sender:'',
      sender_profile_pic_mini:'',
      sender_profile_pic:'',
      user_profile_pic:'',
      user_reply:'',
      isreplied:false,
      disabled:false,
      replies:{status:'',message:[]},
      replydata:[],
      temp:''      
    }
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    // console.log(params.userId);  
    const data159 = async ()=>{
      await this.props.fetch_user_data(params.userId);     
      this.fetchTweets()
    }
    data159()    
  }

  fetchTweets=()=>{   
    if(this.props.userData!==undefined){
      fetch('http://localhost:3000/fetch_user_tweets_from_twitter',{
        headers: {
          'Authorization':this.props.userData.message.jwt_token
        }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.status === "success"){          
         this.props.fetch_user_tweets_from_database(this.props.userData.message.jwt_token)
          return {'status':'success'}
        }
      }).catch(err=>console.log(err))
  }

    // if(this.props.userData!==undefined){
    //   this.props.fetch_user_tweets_from_database(this.props.userData.message.jwt_token)
    // }
  }

  setTweetData= async (e)=>{
    e.preventDefault()
    let selectedId=e.target.id
    let selectedTweet = this.props.tweetsData.filter(element=>element._id===selectedId)
    let image = selectedTweet[0].sender_profile_pic
    let newImage = image.replace(/_normal.jpg$/gm,'.jpg')  
    // console.log(selectedTweet[0].tweet_id)
    fetch(`http://localhost:3000/fetch_tweets_reply_from_db_params/${selectedTweet[0].tweet_id}`,{
      headers: {
        'Cache-Control': 'no-store'
      }
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.message.length===0){
          this.setState({
            replies:data,
            replydata:[],            
            sender_tweet_id:selectedTweet[0].tweet_id,
            tweet:selectedTweet[0].Tweet,
            sender:selectedTweet[0].sender,
            sender_profile_pic_mini:selectedTweet[0].sender_profile_pic,
            sender_profile_pic:newImage,
            user_profile_pic:this.props.userData.message.twitter_profilePic_mini,
            isreplied:false,
            disabled:false,
            temp:''
          })
        }else{
          this.setState({
            replies:data,
            replydata:data.message[0].replies,
            sender_tweet_id:selectedTweet[0].tweet_id,
            tweet:selectedTweet[0].Tweet,
            sender:selectedTweet[0].sender,
            sender_profile_pic_mini:selectedTweet[0].sender_profile_pic,
            sender_profile_pic:newImage,
            user_profile_pic:this.props.userData.message.twitter_profilePic_mini,
            isreplied:false,
            disabled:false,
            temp:''
          })}
        }
      )
    .catch(err=>console.log(err))  
  
  }

  closeTweet=(e)=>{
    e.preventDefault()
    this.setState({
        sender_tweet_id:'',
        tweet:'',
        sender:'',
        sender_profile_pic_mini:'',
        sender_profile_pic:'',
        isreplied:false,
        disabled:false,
        replies:{status:'',message:[]},
        replydata:[],
        temp:''
    })
  }

  handleOnChange=(e)=>{
    e.preventDefault()    
    this.setState({
      user_reply:e.target.value
    })
  }

  handleSubmit=(e)=>{   
    if (e.key === 'Enter') {
      // console.log(this.state.user_reply)       
      // do the fetch thing here
      if(this.state.user_reply.length<131 && this.state.sender!==''){         
        let replybody={
          sender:this.state.sender,
          sender_tweet_id:this.state.sender_tweet_id,
          user_reply:this.state.user_reply,
          user_pic:this.props.userData.message.twitter_profilePic_mini
        }
        let json_replybody=JSON.stringify(replybody)        
        fetch('http://localhost:3000/reply_to_tweets',{
          method: 'POST',
          headers: {
            'Authorization':this.props.userData.message.jwt_token,
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: json_replybody
        })
        .then(response=>response.json())
        .then(data=>{
          // console.log(data)
          this.setState({
            temp:this.state.user_reply,
            user_reply:'',
            isreplied:true
          })
        })
        .catch(err=>console.log(err))
      }
      else{
        alert("error: reply should be less then 131 characters excluding sender's name or sender not selected please click on tweets to your left hand side")
      }
  
      
    }
  }


  render() {    
    let tweetlist = this.props.tweetsData.map(element=>(
      <div className="friend-info" id={element._id} key={element._id} onClick={this.setTweetData}>
                <div id={element._id} style={{ display: "flex" }}>
                  <img
                    src={element.sender_profile_pic}
                    alt={element.tweet_id}
                    className="friend-info-img"
                    id={element._id}
                  />
                  <span id={element._id} className="friend-info-text1">{element.sender}</span>
                </div>
                <div id={element._id} className="home-friend-info2-text2">
                {element.Tweet}
                </div>            
              </div>
    ))

    let reply = this.state.replydata.map(element=>(
      <div key={element._id}>
        <div style={{display:'flex'}}>
        <div>
        <img src={element.reply_sender_pic} alt='user_profile_pic' className='friend-info-img' style={{marginTop:'1em'}}/>
        </div>
        <div>
        <p style={{paddingLeft:'0.5em',fontWeight:'500',marginBottom:'0em',paddingBottom:'0em'}}>{element.reply_txt}</p>
        </div>
        </div>
        </div>
    ))
    return (
      <Fragment>
        <LeftNav
          profilepic={this.props.userData===undefined?'':this.props.userData.message.twitter_profilePic_mini}
        />
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
              User: <span>{this.props.userData===undefined?'':this.props.userData.message.twitter_userName}</span>
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
          <div className="home-sub-main-container">
            {/* chat list */}
            <div className='home-friend-container'>
              <div className='home-friend-container-div'>
              {/* box1 */}
              {/* <div className="friend-info"></div> */}
              {this.props.userTweetsData===undefined?<div className="loader">Loading...</div>:tweetlist}
              {/* end */}
              {/* box2 */}
              {/* <div className="friend-info"></div> */}
              {/* end   */}
              {/* box3 */}
              {/* <div className="friend-info"></div> */}
              {/* end   */}
              </div>
            </div>
            {/* end */}
            {/* chat div */}
            <div style={{ display: "flex" }}>
              {/* chat div 1 */}
              <div>
                <div className="chat-div">
                  <div>
                    <div>
                      <div>
                        {this.state.sender_profile_pic_mini===''?'':<div className='yahoo159'>
                          {/* start */}
                          {/* start of chat nav */}
                  <div className='chat-nav'>
                    <div style={{display:'flex', marginBottom:'1em',marginRight:'20em'}}>
                      <div>
                      <img src={this.state.sender_profile_pic_mini} alt='friend2' className='friend-info-img' style={{marginTop:'1em'}} />
                      </div>                    
                      <span style={{marginLeft:'0.5em',marginTop:'1em',fontWeight:'500'}}>{this.state.sender}</span>
                    <div className='online-dot2'>
                    </div>
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
                        <img src={this.state.sender_profile_pic_mini} alt='friend2' className='friend-info-img' style={{marginTop:'1em'}} />
                        </div>
                        <div>
                        <p style={{paddingLeft:'0.5em',fontWeight:'500',marginBottom:'0em',paddingBottom:'0em'}}>{this.state.tweet}</p>                                          
                        </div>
                        </div>                                                                    
                        </div>
                        {/* start of reply*/}
                        {this.state.replies.status===''?<div className="loader">Loading...</div>:reply}
                        {this.state.isreplied===false?'':<div>
                        <div style={{display:'flex'}}>
                            <div>
                              {/* <img src={this.state.user_profile_pic} alt='user_profile_pic' className='friend-info-img' style={{marginTop:'1em'}}/> */}
                              {this.state.isreplied===false?'':
                              <img src={this.state.user_profile_pic} alt='user_profile_pic' className='friend-info-img' style={{marginTop:'1em'}}/>
                              }
                              </div>
                              <div>                                
                                {/* <p style={{paddingLeft:'0.5em',fontWeight:'500',marginBottom:'0em',paddingBottom:'0em'}}>@{this.state.sender}<span style={{paddingLeft:'0.3em'}}>{this.state.temp}</span></p> */}
                                {this.state.isreplied===false?'':
                              <p style={{paddingLeft:'0.5em',fontWeight:'500',marginBottom:'0em',paddingBottom:'0em'}}>@{this.state.sender}<span style={{paddingLeft:'0.3em'}}>{this.state.temp}</span></p>
                              }
                                </div>
                          </div>
                          </div>}                                                 
                          {/* end of reply */}     
                          </div>                                                            
                          {/* end */}
                          </div>}
                            {/* start of the bottom input type */}
                            {/* start of input type text */}
                            <div className='attach-reply-container'>
                              <div style={{marginTop:'2em'}}>
                            <img src={this.props.userData===undefined?'':this.props.userData.message.twitter_profilePic_mini} alt='profile' className='friend-info-img' />
                            </div>                       
                              {/* start */}
                              <div className="input-icons2">
                              <i style={{ color: "gray" }}><PaperClipOutlined style={{fontSize:'1.3em'}}/></i>
                              <Input159
                              typevalue="text"
                              placeholdervalue="Reply..."
                              classnamevalue="attach_reply"
                              inputvalue={this.state.user_reply}
                              onchangevalue={this.handleOnChange}
                              onKeyPressvalue={this.handleSubmit}                              
                                />
                              </div>
                              </div>
                              {/* end */}
                              {/* end of the bottom input type */}
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
                  {/* start */}
                  {this.state.sender_profile_pic===''?'':
                  <div><div className='cloxe' onClick={this.closeTweet}><span style={{marginLeft:'0.4em'}}>X</span></div>
                  <div>
                  <div style={{display:'flex',justifyContent:'center',marginBottom:'0em'}}>
                  <img src={this.state.sender_profile_pic} alt='friend2' className='friend-detail-img'/>                
                  </div>                  
                    <div style={ { marginRight:'2em', display:'flex',justifyContent:'center' }}>
                    <h3 style={{marginBottom:'0em',marginTop:'0.5em',paddingBottom:'0em'}}>{this.state.sender}</h3>
                  </div>
                  <div style={{marginRight:'2em',display:'flex',justifyContent:'center'}}>                                
                  <p style={{marginTop:'0.2em' ,marginBottom:'0em',paddingBottom:'0em',color:'limegreen'}}>online</p>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',marginTop:'0.5em',marginRight:'1em'}}>
                    <div className='call159'><i style={{marginTop:'0.2em',marginRight:'0.2em'}} className="fa fa-phone" aria-hidden="true"></i><span>Call</span></div>
                    <div className='email159'><i style={{marginTop:'0.2em',marginRight:'0.2em'}} className="fa fa-envelope" aria-hidden="true"></i><span>Email</span></div>
                    </div>                                     
                  </div>
                  <center><div style={{marginTop:'1em',marginLeft:'1em',marginRight:'1em'}}>
                  <div><span style={{color:'gray'}}>{this.state.tweet}</span></div>                    
                  </div></center></div>
                  
                  }
                  
                  {/* end */}
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
                  <div className='task-checkbox-container'>
                  <form>
                    <div style={{display:'flex'}}>
                    <input type="checkbox" id="task1" name="task1" value="task1" />
                    <label forhtml="task1" className='task1'>Clean up room</label><br/>
                    </div>
                    <div style={{display: "flex"}}>
                    <input type="checkbox" id="task2" name="task2" value="task2" />
                    <label forhtml="task2" className='task2'>Clean linenand towels<br/>when guests are out.</label><br/>
                    </div>
                    <div style={{display:'flex'}}>
                    <input type="checkbox" id="task3" name="task3" value="task3" />
                    <label forhtml="task3" className='task3'>Bring complimentary bottle<br/>of red wine</label><br/><br/>                  
                    </div>
                    </form>
                    <div>
                    <p style={{color:'gray',borderBottom:'1px solid gray',width:'4.4em'}}>ALL TASK</p>
                    
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

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    userData: state.userData,
    userTweetsData:state.userTweetsData,
    tweetsData:state.tweetsData,
  };
};

export default connect(mapStateToProps, { fetch_user_data,fetch_user_tweets_from_database})(Home);
