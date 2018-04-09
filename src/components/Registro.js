import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Request from '../constantes';

const FormItem = Form.Item;


class RegistroForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        let payload = {
            username:values.userName,
            password:values.password
        }
        Request.post('registro', payload).then(data => {
            console.log(data)
        })

      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
            {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator(' remember password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(
                <Checkbox>Remember me</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className="login-form-button">
                Registrarse
            </Button>
            </FormItem>
        </Form>
        <Button type="primary" onClick={this.props.login} className="login-form-button">
         Login
        </Button>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(RegistroForm);

export default WrappedNormalLoginForm;