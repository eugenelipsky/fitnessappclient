import React from "react";
import { NavLink } from "react-router-dom";
import {useRootStore} from '../hooks/useRootStore';

export const Navbar: React.FC = () => {
  const rootStore = useRootStore()

  const signoutHandler = async (event:React.MouseEvent) => {
    event.preventDefault()
    await rootStore.authStore.logout()
  }

  return (
    <div>
      <div className="logo">
        <h2 className="d-flex justify-content-center mt-2">Fitness App</h2>
      </div>
      <nav className="nav navbar-light mt-3 mb-2">
        <NavLink className="nav-link" activeClassName="active" to="/programs">
          Programs
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/workouts">
          Workouts
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/profile">
          Profile
        </NavLink>
        <NavLink
          className="nav-link ml-auto"
          activeClassName="active"
          to="/logout"
          onClick={signoutHandler}
        >
          Sign out
        </NavLink>
      </nav>
    </div>
  );
};
