import React from "react";
import {Menu,Dropdown,Button} from "antd";
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">支付宝</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">淘宝</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">天猫</a>
    </Menu.Item>
  </Menu>
);

class Drop extends React.Component{
  render(){
    return(
      <div style={{float:"right"}}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button>登陆注册</Button>
        </Dropdown>
      </div>
    )
  }
}
export default Drop;
