import * as actions from "../actions/home";
import createAction from "@utils/redux";
import {HOME_INFO} from "@actions/home"
import {API_HOME,API_HOME_SEARCH_COUNT,API_HOME_RECOMMEDN,API_HOME_PIN} from "@utils/api";
const init_state={
    homeInfo:{},
    searchCount:0,
    pin:[],
    recommend:[]
}
export default (state=init_state,action)=>{
    switch(action.type){
        case actions.HOME_INFO:
            return {...state,homeInfo:action.payload};
        case actions.HOME_SEARCH_COUNT:
            return {
                ...state,
                saerchCount:action.payload.count
            };
        case actions.HOME_PIN:
            const pin=[];
            action.payload.map((item,index)=>{
                const groupIndex=parseInt(index/3);
                if(!pin[groupIndex]){
                    pin[groupIndex]=[]
                }
                pin[groupIndex].push(item)
            })
            return {...state,pin};
        case actions.HOME_RECOMMEND:
            return {
                ...state,
                recommand:state.recommand.concat(action.payload.rcmdItemList)
            };
        default:
            return state
    }
}
export const dispatchHome=payload=>createAction({
    url:API_HOME,
    type:HOME_INFO,
    payload
})
