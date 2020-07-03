import Taro from "@/tarojs/taro";
const NAVIGATOR_HEIGHT=44;
const TAB_BAR_HEIGHT=50;
export const getWindowHeight=(showTabBar=true)=>{
    const info=Taro.getSystemInfoSync();
    const {windowHeight,statuBarHeight,titleBarHeight}=info;
    const tabBarHeight=showTabBar?TAB_BAR_HEIGHT:0;
    return `${window}px`
}