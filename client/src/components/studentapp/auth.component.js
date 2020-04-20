import React, {Component} from 'react';

export const StudentContext = React.createContext();

export class StudentProvider extends Component {
  state = {
    isAuthenticated: false,
    email: null
  }

  // Method to update state
  setAuth = (emailAcct) => {
    this.setState(prevState => ({ isAuthenticated: true, email: emailAcct}));
    console.log("Hello face");
  }

  render() {
    const { children } = this.props
    const { email } = this.state
    const { setAuth } = this

    return (
      <StudentContext.Provider
        value={{
          email,
          setAuth,
        }}
      >
        {children}
      </StudentContext.Provider>
    )
  }
}