import { NavLink } from 'react-router-dom';
import css from './Hero.module.css';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <>
      <div className={css.heroContainer}>
        <div className={css.titleWrapper}>
          <h1 className={css.title}>Make Life Easier for the Family:</h1>
          <p className={css.subtitle}>
            Find Babysitters Online for All Occasions
          </p>
          <NavLink className={css.getStartedLink}>
            <span className={css.linkText}>Get started</span>
            <BsArrowRight
              className={css.arrow}
              strokeWidth={0.5}
              stroke="#fbfbfb"
              fill="#fbfbfb"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
