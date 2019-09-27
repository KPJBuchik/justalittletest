import React from "react";
// import API from "../utils/API";
import { Container, Row, Col } from 'reactstrap';
import ThisNavbar from "../components/navbar/index";
import Member_userBox from "../components/member_userBox/index";
import Axios from "axios";


class UserProfile extends React.Component {
  state = {
    users: [
    ],
    email: [
    ],
  }

  componentDidMount() {
    this.loadUser();
  }



  loadUser = () => {
    Axios.get("/user").then(res => {
      console.log(res.data)
      if (res.data) {
        this.setState({
          users: res.data,
        })
      }
    });
    //catch(err => console.log(err));

  };


  render() {
    const { users } = this.state;
    return (
      <div>
        <ThisNavbar />
        <Container>
          <div className="topContainer"></div>
          <Row>

            <Col>
              {users.length !== 0 && users.map(user => (
                <Member_userBox
                  key={user.id}
                  email={user.email}
                  id={user._id} />
              ))}

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
