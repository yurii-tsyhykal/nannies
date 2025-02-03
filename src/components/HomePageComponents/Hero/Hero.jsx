import { NavLink } from 'react-router-dom';
import css from './Hero.module.css';
import { BsArrowRight } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';

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
            <BsArrowRight
              className={css.arrow}
              strokeWidth={0.5}
              stroke="#fbfbfb"
              fill="#fbfbfb"
            />
          </NavLink>
        </div>
        <div className={css.countWrapper}>
          <span className={css.countCheck}>
            <FaCheck className={css.checkIcon} />
          </span>
          <p className={css.countDesc}>Experienced nannies</p>
          <span className={css.count}>15,000</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
