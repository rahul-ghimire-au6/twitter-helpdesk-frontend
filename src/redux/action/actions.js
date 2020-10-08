import * as action_types from './action_type'

export const fetch_user_data= (token)=> async dispatch=>{
    // fetch('http://localhost:3000/fetch_user_data',{
    //         headers: {
    //             'Authorization':token
    //         }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>dispatch({
    //         type:action_types.fetch_user_data,
    //         payload: data
    //     })      
    //     )
    //     .catch(err=>console.log(err))
    let fetcheddata = await fetch('http://localhost:3000/fetch_user_data',{headers: {'Authorization':token}})
    let decodeddata = await fetcheddata.json()
    dispatch({type:action_types.fetch_user_data,payload:decodeddata})
    return decodeddata
}

export const fetch_user_tweets_from_database=(token)=>dispatch=>{
    fetch('http://localhost:3000/fetch_user_tweets_from_database',{
            headers: {
                'Authorization':token
            }
        })
        .then(res=>res.json())
        .then(data=>dispatch({
            type:action_types.fetch_user_tweets_from_database,
            payload: data
        }))
        .catch(err=>console.log(err))
}