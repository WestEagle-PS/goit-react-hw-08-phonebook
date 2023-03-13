import css from './text-field.module.scss';

const TextField = ({ label, ...props }) => {
  return (
    <div className={css.formGroup}>
      <label>{label}</label>
      <input className={css.field} {...props} />
    </div>
  );
};

export default TextField;
