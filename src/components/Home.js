import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUsers } from '../actions/userAction'

class Home extends Component {

  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this);

    this.state = {
      users: [],
      msg: '',
      isError: false
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.user.success) {
        this.setState({
          isError: false,
          users: nextProps.user.users
        });
      }
      if (nextProps.user.error) {
        this.setState({
          isError: true,
          msg: nextProps.user.users.msg || 'There is some issue, Please try again!'
        });
      }
    }

  logout() {
    localStorage.clear();
    this.props.history.push("/login");
  }

  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  render() {
    return (
      <div>
        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-default" type="button" onClick={ this.logout}>Logout</button>
            </div>
          </div>

          <div className="container">
          <h2>Users</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, id) => {
                  return <tr key = {id}>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.active ? 'true' : 'false'}</td>
                </tr>
                })}
              </tbody>
            </table>
        </div>

          {this.state.isError ? (<div className="alert alert-danger">
            <strong>ERROR!</strong> {this.state.msg}
          </div>) : (<i></i>) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Home);
