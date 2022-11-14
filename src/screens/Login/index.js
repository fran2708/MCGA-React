import React from 'react';
import Link from '../../components/Link';
import styles from './login.module.css';
import SharedInput from '../../components/SharedInput';
import SharedButton from '../../components/SharedButton';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { handleSubmit, register, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.container}>
      <div>Login</div>
      <div>
        {/* <SharedInput name="inputEmail" type="text" placeholder="Email" />
        <SharedInput name="inputPassword" type="password" placeholder="Password" /> */}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <SharedInput type="text" placeholder="Email" name="email" />
          <SharedInput type="text" placeholder="Password" name="password" />

          <input type={'submit'} />

        </form>
      </div>

      <div>
        {/* <SharedButton text="Login" /> */}
      </div>

      <Link text={'Ingresar'} to={'/products'}  />
    </div>
  );
};

export default Login;