import { ThemeChanger } from 'components';

export const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container nav__container'>
        <div className='brand'>
          <h4>Andrew Shah</h4>
        </div>
        <div className='nav__links'>
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};
