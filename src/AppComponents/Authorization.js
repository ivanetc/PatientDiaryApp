import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Authorization extends React.Component {

  render() {
    return (
      <div className='authorization'>
        <div className='auth_header'>
          ВХОД
        </div>
        <div>
          <TextField label='Введите почту' variant='outlined'/>
        </div>
        <div>
          <TextField label='Пароль' variant='outlined'/>
        </div>
        <Button size="small" variant="contained" color="secondary">
          Войти
        </Button>
      </div>
    );
  }
}

export default Authorization;