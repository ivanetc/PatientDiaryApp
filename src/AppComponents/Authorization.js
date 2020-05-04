import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import history from "../history";

class Authorization extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    history.push('/profile');
    history.go();
    event.preventDefault();
  }

  render() {
    return (
      <div className='auth_container'>
        <Paper className='auth_wrapper'>
          <form className='authorization' onSubmit={this.handleSubmit}>
            <div className='auth_header'>
              ВХОД
            </div>
            <div>
              <TextField required={true} label='Введите почту' variant='outlined'/>
            </div>
            <div>
              <TextField required={true} label='Пароль' variant='outlined'/>
            </div>
            <Button type='submit' size="small" variant="contained" color="secondary">
              Войти
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default Authorization;