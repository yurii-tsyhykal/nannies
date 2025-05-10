import { NavLink } from 'react-router-dom';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <div className={css.heroContainer}>
        <div className={css.titleWrapper}>
          <h1 className={css.title}>Make Life Easier for the Family:</h1>
          <p className={css.subtitle}>
            Find Babysitters Online for All Occasions
          </p>
          <NavLink className={css.getStartedLink} to={'/nannies'}>
            <span className={css.linkText}>Get started</span>
            <svg className={css.arrow} width={25} height={25}>
              <use href="/images/sprite.svg#arrow"></use>
            </svg>
          </NavLink>
        </div>
        <div className={css.countWrapper}>
          <span className={css.countCheck}>
            <svg className={css.checkIcon} width={30} height={30}>
              <use href="/images/sprite.svg#check"></use>
            </svg>
          </span>
          <p className={css.countDesc}>Experienced nannies</p>
          <span className={css.count}>15,000</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
