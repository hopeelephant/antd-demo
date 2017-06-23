import React from "react";
import { Pagination, Timeline, BackTop, Icon} from 'antd';
class Fans extends React.Component{
  render(){
    return(
      <div>
        <div style={{borderBottom:"1px solid #ede9e9",paddingBottom:"11px",fontWeight:"600",fontSize:"14px"}}>粉丝圈信息概览</div>
        <ul className="fansUl clearfix">
          <li><span>0</span><br /><span>昨天新增微贴数</span></li>
          <li><span>199</span><br /><span>昨天活跃用户数</span></li>
          <li><span>1099</span><br /><span>总用户数</span></li>
        </ul>
        <ul className="systemUl">
          <li>系统公共</li>
          <li className="clearfix"><span className="span1">公告内容</span><em className="span2">时间</em></li>
          <li className="clearfix"><span>微贝粉丝圈客服求调戏</span><em>2017-6.18</em></li>
          <li className="clearfix"><span>活动贴及置顶贴功能启动</span><em>2017-6.19</em></li>
          <li className="clearfix"><span>如何在公众号打造一个活跃的微社区</span><em>2017-6.20</em></li>
          <li className="clearfix"><span>欢迎大家使用tatto秀粉丝群</span><em>2017-6.21</em></li>
        </ul>
        <Pagination defaultCurrent={1} total={50}  style={{float:"right",marginTop:"10px"}}/>
        <ul className="Tendency">
          <li className="smell">微贴数趋势</li>
          <li>
          <Timeline pending={<a href="#">See more</a>}>
            <Timeline.Item>Create a services site 2017-06-20</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2017-06-21</Timeline.Item>
            <Timeline.Item>Technical testing 2017-06-22</Timeline.Item>
          </Timeline>
          </li>
        </ul>
        <BackTop visibilityHeight={100}>
          <Icon type="up" style={{fontSize:"20px",fontWeight:900}}/>
        </BackTop>
      </div>
    )
  }
}
export default Fans;
