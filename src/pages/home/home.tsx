import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,Image, ScrollView, Text } from '@tarojs/components';
import {connect} from "@tarojs/redux";
import {Loading} from "@components";
import * as actions from "@actions/home";
import {dispatchHome} from "@reducers/home";
import {getWindowHeight} from "@utils/style";
import Banner from "./banner";
import searchIcon from "./assets/search.png";
import './home.scss';
const RECOMMEDN_SIZE=20;
@connect(state=>state.home,{dispatchHome})
export default class Home extends Component {
  config={
    navigationBarTitleText:'网易严选'
  }
  state={
    loaded:false,
    loading:false,
    lastItemId:0,
    hasMore:true
  }
  componentWillMount () { }

  componentDidMount () { 
    Taro.showToast({
      title:'注意，这是新手，bug请让让',
      icon:'none',
      duration:6000
    })
    this.props.dispatchHome().then(()=>{
      this.setState({
        loaded:true
      })
    })
    this.loadRecommend();
  }
  loadRecommend=()=>{
    if(!this.state.hasMore || this.state.loading){
      return
    }
    const payload={
      lastItemId:this.state.lastItemId,
      size:RECOMMEDN_SIZE
    }
    this.setState({loading:true})
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    if(!this.state.loaded){
      return <Loading/>
    }
    const {homeInfo,searchCount,recommend,pin}=this.props;
    return (
      <View className='home'>
          <View className='home_search'>
              <View className='home_search-wrap'>
                  <Image className='home_search-img' src={searchIcon}/>
                  <Text className='home_search-txt'>
                    {`搜素商品，共${searchCount}款好物`}
                  </Text>
              </View>
          </View>
      </View>
    )
  }
}
