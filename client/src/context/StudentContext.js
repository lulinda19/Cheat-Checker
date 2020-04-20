import React from 'react'

const StudentContext = React.createContext()

class StudentProvider extends React.Component {
  state = {
    student: {
      isAuth: false,
      email: '',
      firstName: '',
      lastName: ''
    }
  }

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(studentInp) {
    setTimeout(() => this.setState({ student: studentInp}), 1000)
  }

  logout() {
    this.setState({
      student: {
        isAuth: false,
        email: '',
        firstName: '',
        lastName: ''
      }
    })
  }

  render() {
    return (
      <StudentContext.Provider
        value={{
          student: this.state.student,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </StudentContext.Provider>
    )
  }
}

const StudentConsumer = StudentContext.Consumer

export { StudentProvider, StudentConsumer }
