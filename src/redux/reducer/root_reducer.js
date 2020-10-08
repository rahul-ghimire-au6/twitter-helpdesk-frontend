import * as action_type from '../action/action_type'

const initialState = {
    userData:undefined,
    userTweetsData:[],
    tweetsData:[]
}

const reducer = (state=initialState,action)=>{
    switch (action.type){
        case action_type.fetch_user_data : return {...state,userData:action.payload}
        case action_type.fetch_user_tweets_from_database : return {...state,userTweetsData:action.payload,tweetsData:action.payload.message.user_tweets}
        default : return state
    }

}

export default reducer