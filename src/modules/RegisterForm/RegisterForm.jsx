import TextField from '../../shared/components/TextField/TextField';
import Button from '../../shared/components/Button/Button';

import useForm from '../../shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';

import css from './register-form.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField value={password} onChange={handleChange} {...fields.password} />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
