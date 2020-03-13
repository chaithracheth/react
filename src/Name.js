import React from "react";
import "./Name.css";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["Abhilash", "raj", "basanta"],
      activeUser: -1,

    };
  }

  onRemoveUserChange(e) {
    console.log("delete user ", e);
    this.setState({ remove: e });
  }
  onAddUserChange(e) {
    console.log("add user ", e);
    this.setState({ user: e });
  }
  removeUser(index) {
    const arrayremoveCpy = this.state.users;
    console.log(index);
    arrayremoveCpy.splice(index, 1);
    this.setState({
      user: arrayremoveCpy
    });
  }

  onUserClick(index) {
    this.setState({
      activeUser: index,
    });
  }

  addUser(useName) {
    const arrayCpy = this.state.users;
    arrayCpy.push(useName);
    this.setState({
      users: arrayCpy,
    });
  }

  render() {
    return (
      <div>
        <div>
          <input id="userdata" />
          <button
            onClick={() => {
              const useName = document.getElementById("userdata").value;
              this.addUser(useName);
              console.log(useName);
            }}>ADD</button>
          <br /> <br />
        </div>

        <div className="fullWrapper">
          {this.state.users.map((a, index) => (
            <div className="down-continer">
              <div className="userNameWrapper">
                <span
                  className={this.state.activeUser === index ? 'namesActive' : 'names'}
                  onClick={() => this.onUserClick(index)}
                >
                  {a}
                </span>
              </div>
              <button className="delete-button"
                onClick={e => {
                  const value = index;
                  console.log(value);
                  this.removeUser(value);
                }}>DELETE</button>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Name;
