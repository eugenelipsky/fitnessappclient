import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {observer} from 'mobx-react';
import {useRootStore} from '../hooks/useRootStore';

export const Login: React.FC = observer(() => {
  const history = useHistory();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const rootStore = useRootStore()

  const loginHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      await rootStore.authStore.login(emailRef.current.value, passwordRef.current.value);
      history.push("/programs");
    } catch (e) {
      throw new Error(e);
    }
  };
  return (
    <div className="container col-sm-6 offset-sm-3">
      <div className="auth-header text-center">
        <h2>Login to your account</h2>
      </div>
      <form className="base-form">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            ref={passwordRef}
          />
        </div>
        <div className="button__group text-center">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={loginHandler}
          >
            Login
          </button>
          <p className="mt-4">OR</p>
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
});
