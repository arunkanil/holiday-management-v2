import './index.less';

import * as React from 'react';

import { Button, Card, Col, Form, Icon, Input, Row } from 'antd';
import { inject, observer } from 'mobx-react';
import logo from '../../images/abp-logo-long.png';
import windows from '../../images/microsoft.svg';
import AccountStore from '../../stores/accountStore';
import AuthenticationStore from '../../stores/authenticationStore';
import { FormComponentProps } from 'antd/lib/form';
import { L } from '../../lib/abpUtility';
import { Redirect } from 'react-router-dom';
import SessionStore from '../../stores/sessionStore';
import Stores from '../../stores/storeIdentifier';
// import TenantAvailabilityState from '../../services/account/dto/tenantAvailabilityState';
import rules from './index.validation';
import { authProvider } from '../../authProvider';

const FormItem = Form.Item;
declare var abp: any;
const loginRequest2 = {
  scopes: ['openid', 'User.Read'],
  state: '12345',
  prompt: 'select_account',
};

const tokenRequest = {
  scopes: ['openid', 'User.Read'],
};

let username;
export interface ILoginProps extends FormComponentProps {
  authenticationStore?: AuthenticationStore;
  sessionStore?: SessionStore;
  accountStore?: AccountStore;
  history: any;
  location: any;
}
// let loading = false;
@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class Login extends React.Component<ILoginProps> {
  state = {
    loading: false,
  };
  handleSubmit = async (e: any) => {
    e.preventDefault();
    // const { loginModel } = this.props.authenticationStore!;
    await this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        this.setState({ loading: true });
        await this.props
          .authenticationStore!.login(values)
          .then((response) => {
            // sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : '/';
          })
          .catch((error) => {
            this.setState({ loading: false });
          });
      }
    });
  };
  azureSignIn = () => {
    authProvider
      .loginPopup(loginRequest2)
      .then((res) => this.handleResponse(res))
      .catch((error) => {
        console.error(error);
      });
  };
  handleResponse = async (response: any) => {
    /**
     * To see the full list of response object properties, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#response
     */
    if (response !== null) {
      console.log(response);
      let values: any;
      username = response.account.userName;
      authProvider
        .acquireTokenPopup(tokenRequest)
        .then((result) => {
          console.log(result);
          console.log('access_token', result.accessToken);
          console.log('username', result.account.userName);
          values = {
            userNameOrEmailAddress: result.account.userName,
            password: result.accessToken,
            useAzureAD: true,
          };
        })
        .then(async (res) => {
          await this.props.authenticationStore!.login(values);
          const { state } = this.props.location;
          window.location = state ? state.from.pathname : '/';
        })
        .then()
        .catch((error) => {
          console.error(error);
        });
      console.log(username);
    } else {
      this.selectAccount();
    }
  };
  selectAccount = () => {
    /**
     * See here for more info on account retrieval:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */

    const currentAccounts = authProvider.getAllAccounts();
    if (currentAccounts === null) {
      return;
    } else if (currentAccounts.length > 1) {
      // Add choose account code here
      console.warn('Multiple accounts detected.');
    } else if (currentAccounts.length === 1) {
      username = currentAccounts[0];
      console.log(username);
    }
  };

  public render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.authenticationStore!.isAuthenticated) return <Redirect to={from} />;

    const { getFieldDecorator } = this.props.form;
    return (
      <div className="d-md-flex h-md-100 align-items-center">
        <div className="col-md-6 p-0 bg-indigo h-md-100 login-box">
          <div className="text-white d-md-flex align-items-center h-100 text-center justify-content-center">
            <div className="container-fluid" style={{ backgroundColor: '#111d2c', height: '100vh' }}></div>
          </div>
        </div>
        <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div className="d-md-flex align-items-center h-md-100 justify-content-center">
            {/* <Col className="name"> */}
              <Form className="" onSubmit={this.handleSubmit}>
                <Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col>
                      <img src={logo} alt="arcelor logo" className="mx-auto d-block" style={{ width: '60%', marginLeft: '30px' }} />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 10, textAlign: 'center' }}>
                    <Col>
                      <Card>
                        <div style={{ textAlign: 'center' }}>
                          <h3>{L('Holiday Approval System')}</h3>
                        </div>
                        <FormItem>
                          {getFieldDecorator('userNameOrEmailAddress', { rules: rules.userNameOrEmailAddress })(
                            <Input
                              placeholder={'Username or Email'}
                              style={{ width: '250px' }}
                              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              size="large"
                            />
                          )}
                        </FormItem>
                        <FormItem>
                          {getFieldDecorator('password', { rules: rules.password })(
                            <Input
                              placeholder={L('Password')}
                              style={{ width: '250px' }}
                              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              type="password"
                              size="large"
                            />
                          )}
                        </FormItem>
                        {/* <FormItem>{getFieldDecorator('useAzureAD')(<Checkbox>Use Azure AD</Checkbox>)}</FormItem> */}
                        <Row style={{ textAlign: 'center' }}>
                          <Col>
                            <Button
                              loading={this.state.loading}
                              style={{ backgroundColor: '#f5222d', color: 'white' }}
                              htmlType={'submit'}
                              type="danger"
                            >
                              {'Login'}
                            </Button>
                            <Button
                              onClick={this.azureSignIn}
                              style={{ backgroundColor: '#f5222d', color: 'white', marginLeft: '15px' }}
                              type="danger"
                            >
                              <img src={windows} style={{ width: '14px', marginRight: '5px' }} />
                              {'Login using Azure'}
                            </Button>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Row>
                </Row>
              </Form>
            {/* </Col> */}
          </div>
          <Row className="footnote">
            Powered by{' '}
            <a target="_blank" rel="noopener noreferrer" className="text-danger" href="https://untanglestrategy.com/">
              Untangle_
            </a>
          </Row>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);
