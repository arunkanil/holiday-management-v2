import React, { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Card, Icon } from 'antd';
let mapper = [
  {
    name: 'Employee ID',
    property: 'employeeId',
  },
  {
    name: 'E-mail',
    property: 'emailAddress',
  },
  {
    name: 'Function',
    property: 'designation',
  },
  {
    name: 'Department',
    property: 'department',
  },
  // {
  //   name: 'Office Location',
  //   property: 'officeLocation',
  // },
  {
    name: 'Country',
    property: 'country',
  },
  {
    name: 'Reports to',
    property: 'reportsToName',
  },
  { name: 'Secondary Approver', property: 'secondaryApproverName' },
];
export default class EmployeeDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {},
    };
  }
  componentDidMount() {
    console.log(this.props.location.state);
    this.setState({ details: this.props.location.state.data });
  }
  render() {
    return (
      <Card>
        <div>
          <h3 style={{ textAlign: 'left' }}>
            <Icon
              type="arrow-left"
              style={{ marginRight: '20px' }}
              onClick={() => {
                window.history.go(-1);
                return false;
              }}
            />
            <span>Employee Details</span>
          </h3>
        </div>
        <hr />
        <div className="row">
          <table class="table table-striped">
            <tr>
              <td>Name</td>
              <td>
                {this.state.details.firstName} {this.state.details.lastName}
              </td>
            </tr>
            {mapper.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{this.state.details[item.property]}</td>
              </tr>
            ))}
          </table>
        </div>
      </Card>
    );
  }
}
