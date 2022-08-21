import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
 const goWelcome=()=>{
    navigate('layout/welcome')
    }
    return(
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button onClick={goWelcome} type="primary">Back Home</Button>}
        />
      );
  }
  
  export default NotFound