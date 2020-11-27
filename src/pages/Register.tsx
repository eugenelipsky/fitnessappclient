import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {observer} from 'mobx-react';
import {useRootStore} from '../hooks/useRootStore';

export const Register: React.FC = observer(() => {
  const rootStore = useRootStore()

  const firstname = useRef<HTMLInputElement>(null);
  const lastname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const registerHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const registerData = {
      firstName: firstname.current.value,
      lastName: lastname.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      await rootStore.authStore.register(registerData);
      history.push("/programs");
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <div className="container col-sm-6 offset-sm-3">
      <div className="auth-header text-center">
        <h2>Create your account</h2>
        <p>First time here? Create your account and get started.</p>
      </div>
      <form className="base-form" onSubmit={registerHandler}>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                ref={firstname}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                ref={lastname}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            ref={email}
            aria-describedby="emailHelp"
            required
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
            ref={password}
            required
          />
        </div>
        <div className="button__group text-center">
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
          <p className="mt-4">OR</p>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
});
