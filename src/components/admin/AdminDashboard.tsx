import { Col, Descriptions, Menu, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import {
  ShoppingCartOutlined,
  UserAddOutlined,
  OrderedListOutlined
} from "@ant-design/icons";
import { isAuth } from '../../helpers';
import { Jwt } from '../../store/models/auth';
interface menuItem {
  content: string;
  component: any;
  url: string;
}
const AdminDashboard = () => {
  const { user: { name, role, email } } = isAuth() as Jwt;
  const menuTitles: menuItem[] = [
    {
      content: '添加分类',
      component: <ShoppingCartOutlined />,
      url: "/create/category"
    },
    {
      content: '添加产品',
      component: <UserAddOutlined />,
      url: "/create/product"
    },
    {
      content: '订单列表',
      component: <OrderedListOutlined />,
      url: "/admin/orders"
    }];
  const adminLinks = () => {
    return (
      <>
        <Typography.Title level={5}>管理员链接</Typography.Title >
        <Menu>
          {
            menuTitles.map((item: menuItem, index) => (
              <Menu.Item key={index}>
                {item.component}
                <Link to={ item.url }>{ item.content }</Link>
              </Menu.Item>
            )

            )
          }
        </Menu>
      </>
    )
  }



  const adminInfo = () => (
    <Descriptions title="管理员信息" bordered>
      <Descriptions.Item label="昵称">{ name }</Descriptions.Item>
      <Descriptions.Item label="邮件">{ email }</Descriptions.Item>
      <Descriptions.Item label="角色">管理员</Descriptions.Item>
    </Descriptions>
  )

  return (
    <Layout title="管理员 Dashboard" subTitle="">
      <Row>
        <Col span="4">{adminLinks()}</Col>
        <Col span="20">{adminInfo()}</Col>
      </Row>
    </Layout>
  )
}

export default AdminDashboard
