import css from './button.module.scss';

const Button = ({ type = 'submit', children }) => {
  return (
    <button className={css.btn} type={type}>
      {children}
    </button>
  );
};

export default Button;
