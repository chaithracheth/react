import React from "react";
import "./styles.css";

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: ["Abhilash", "raj", "basanta"],
      remove: "",
      user:"",
    };
  }

  onRemoveUserChange(e) {
    
    console.log("delete user ", e);
    this.setState({ remove: e });

  }
  onAddUserChange(e)
  {
    console.log("add user ", e);
    this.setState({ user: e });
  }
  removeUser(e) {
    const arrayremoveCpy = this.state.a;
    var index=this.state.a.indexOf(this.state.remove);
    console.log(index);
   //var a= delete arrayremoveCpy[index];
   //console.log("delete" +a);
  // console.log(arrayremoveCpy);
  arrayremoveCpy.splice(index,1);
  
    this.setState({
      a: arrayremoveCpy,
      remove:'',
     
    });
  }
  addUser() {
    const arrayCpy = this.state.a;
    arrayCpy.push(this.state.user);
    this.setState({
      a: arrayCpy,
      user: '',
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.a.map(value => (
            <div class="namesColor">{value}</div>
          ))}
        </div>
        <div>
          <input
            value={this.state.user}
            onChange={e => {
              this.onAddUserChange(e.target.value);
            }}
          />
          <button
            onClick={() => {
              this.addUser();
            }}
          >
            ADD
          </button>
          <br /> <br />
          <div>
          {this.state.a.map(value => (
            <div class="namesColor">{value}</div>
          ))}
        </div>
          <input
            value={this.state.remove}
            onChange={e => {
              this.onRemoveUserChange(e.target.value);
            }}
          />
          <button
            onClick={() => {
              this.removeUser();
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default Name;

