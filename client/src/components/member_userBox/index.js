import React from 'react';
import {
  Card, CardTitle, Button
} from 'reactstrap';
import { withContext } from "../../context/"

import "./style.css"
class Member_userBox extends React.Component {
  render() {
    return (
      <div className="text-center">
        <Card className="memberBox memberFloat" userId={this.props.userId}>
          <div className="text-center">
            <img className="memberImg" id="pImage" src="https://via.placeholder.com/100" alt="Profile"></img>
            <CardTitle className="memberName">{this.props.email}</CardTitle>
            <Button href={this.props.userId} className="memberViewProfile view-profile">View Profile</Button> <Button className="modal-button memberFollow"><i class="fas fa-user-plus"></i></Button>
          </div>
        </Card>
      </div>
    );
  };
}

export default withContext(Member_userBox);