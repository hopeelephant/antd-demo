import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Drop from "./Drop";
import Fans from "./Fans";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class App extends Component {
  render() {
    var Cheight = window.screen.availHeight;
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <Icon type="frown" style={{paddingRight:"10px"}}/>
            <span>Tattoo秀</span>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['3']}
            style={{ lineHeight: '63px',float:"left" }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">社区管理</Menu.Item>
            <Menu.Item key="3">电商管理</Menu.Item>
            <Menu.Item key="4">数据分析</Menu.Item>
            <Menu.Item key="5">设置</Menu.Item>
          </Menu>
          <Drop />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>控制台首页</Breadcrumb.Item>
            <Breadcrumb.Item>新手引导</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%',borderRight:"none"}}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />粉丝圈情况</span>}>
                  <Menu.Item key="1">一起来围观</Menu.Item>
                  <Menu.Item key="2">观点致胜</Menu.Item>
                  <Menu.Item key="3">为爱而生</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />新手引导</span>}>
                  <Menu.Item key="5">如何成为会员</Menu.Item>
                  <Menu.Item key="6">周末你在干什么</Menu.Item>
                  <Menu.Item key="7">不要总是发呆</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />帮助中心</span>}>
                  <Menu.Item key="9">其实很简单</Menu.Item>
                  <Menu.Item key="10">点我帮你</Menu.Item>
                  <Menu.Item key="11">一起去远行</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight:Cheight-300,borderLeft:"1px solid #ccc" }}>
              <Fans />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2017 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
