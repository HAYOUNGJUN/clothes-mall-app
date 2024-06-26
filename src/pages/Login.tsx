import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/authSlice';

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(login());
    navigate('/');
  }

  return (
    <div className='login flex justify-center p-20'>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='email'>Email</label>
          <br />
          <input id='email' type='email' />
        </div>
        <div className='mb-6'>
          <label htmlFor='password'>Password</label>
          <br />
          <input id='password' type='password' />
        </div>
        <div>
          <button
            className='bg-red-500 text-slate-100 p-2 hover:bg-red-700 rounded'
            type='submit'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
