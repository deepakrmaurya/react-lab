import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        id: "default",
      },
    };
    console.log(props);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/deepakrmaurya");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { login, id, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Username: @{login}</h1>
        <h2>ID No: {id}</h2>
        <h2>Contact: deepmaurya3440@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
