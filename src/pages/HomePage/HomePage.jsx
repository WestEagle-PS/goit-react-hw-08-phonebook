import css from './home-page.module.scss';

const HomePage = () => {
  return (
    <>
      <h2 className={css.title}>Hello! It`s Home page</h2>
      <p>If you need to view the phone book with contacts, you need to log in</p>
    </>
  );
};

export default HomePage;
