import { Button, Form, Input, Result } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetSignup, signup, SignupPayload } from '../../store/actions/auth.actions'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import Layout from './Layout'

const Signup = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (value: SignupPayload) => {
    dispatch(signup(value))
  }
  const auth = useSelector<AppState, AuthState>(state => state.auth)

  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields();
    }
  }, [auth]);

  const showSuccess = () => {
    console.log(auth.signup.success)
    if (auth.signup.loaded && auth.signup.success) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary">
              <Link to="/signin">登录</Link>
            </Button>
          ]}
        />
      )
    }
  }

  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return (
        <Result
          status="warning"
          title="注册失败"
          subTitle={auth.signup.message}
        />
      )
    }
  }

  useEffect(() => {
    return () => {
      dispatch(resetSignup())
    }
  }, [])
  const signupForm = () => (
          <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input/>
        </Form.Item>
        <Form.Item name="email">
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
  )



  return (
    <Layout title="注册" subTitle="">
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  )
}

export default Signup
