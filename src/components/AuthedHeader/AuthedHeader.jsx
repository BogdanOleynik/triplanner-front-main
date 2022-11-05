import css from './AuthedHeader.module.css';
import sprite from '../../images/sprite.svg';
import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <>
      <div className={css.header}>
        <Link
          to={`/homeauthed`}
          state={{ from: location }}
        >
          <a href="#">
            <svg
              width="126px"
              height="30px"
              aria-label="Логотип сервісу"
              className={css.logo}
            >
              <use href={sprite + '#icon-logo'}></use>
            </svg>
          </a>
        </Link>
        <ul className={css.header__features}>
          <li className={css.header__feature}>
            <svg
              width="8px"
              height="14px"
              aria-label=""
              className={css.header__images__left}
            >
              <use href={sprite + '#icon-currency'}></use>
            </svg>
            USD
            <svg
              width="11px"
              height="7px"
              aria-label=""
              className={css.header__images__right}
            >
              <use href={sprite + '#icon-arrow_down'}></use>
            </svg>
          </li>
          <li className={css.header__feature}>
            <Link
              to={`/help`}
              state={{ from: location }}
            >
              <a href="#">
                <svg
                  width="14px"
                  height="16px"
                  aria-label=""
                  className={css.header__images__left}
                >
                  <use href={sprite + '#icon-support'}></use>
                </svg>
                Допомога
              </a>
            </Link>
          </li>
          <li className={css.header__feature}>
            <svg
              width="18px"
              height="18px"
              aria-label=""
              className={css.header__images__left}
            >
              <use href={sprite + '#icon-flag-ukraine'}></use>
            </svg>
            UA
            <svg
              width="11px"
              height="7px"
              aria-label=""
              className={css.header__images__right}
            >
              <use href={sprite + '#icon-arrow_down'}></use>
            </svg>
          </li>
          <li>
            <Link
              to={`/auth`}
              state={{ from: location }}
            >
              <button type="button" className={css.button__login}>
                <svg
                  width="20px"
                  height="20px"
                  aria-label="Увійти"
                  className={css.login__icon}
                >
                  <use href={sprite + '#icon-login'}></use>
                </svg>
                <span className={css.login__text}>Кабінет</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
