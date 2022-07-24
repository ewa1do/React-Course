import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/auth';
import './login.css';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: 'eduardo@gmail.com',
    lPassword: '123456',
  });

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: '',
    rEmail: '',
    rPassword: '',
    rPasswordRepeat: '',
  });

  const { lEmail, lPassword } = formLoginValues;
  const { rName, rEmail, rPassword, rPasswordRepeat } =
    formRegisterValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(lEmail, lPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (rPassword !== rPasswordRepeat) {
      return Swal.fire(
        'Error',
        'Las contraseñas deben de ser iguales',
        'error'
      );
    }

    // console.log(rName, rEmail, rPassword, rPasswordRepeat);

    dispatch(startRegister(rName, rEmail, rPassword));
  };

  return (
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-6 login-form-1'>
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className='form-group mb-2'>
              <input
                type='text'
                className='form-control'
                placeholder='Correo'
                name='lEmail'
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Contraseña'
                name='lPassword'
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='submit'
                className='btnSubmit'
                value='Login'
              />
            </div>
          </form>
        </div>

        <div className='col-md-6 login-form-2'>
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className='form-group mb-2'>
              <input
                type='text'
                className='form-control'
                placeholder='Nombre'
                name='rName'
                value={rName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='email'
                className='form-control'
                placeholder='Correo'
                name='rEmail'
                value={rEmail}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Contraseña'
                name='rPassword'
                value={rPassword}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className='form-group mb-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Repita la contraseña'
                name='rPasswordRepeat'
                value={rPasswordRepeat}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className='form-group mb-2'>
              <input
                type='submit'
                className='btnSubmit'
                value='Crear cuenta'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
