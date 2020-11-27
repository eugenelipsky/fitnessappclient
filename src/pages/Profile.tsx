import React, { useRef, useState } from "react";
import { observer } from "mobx-react";
import { useRootStore } from "../hooks/useRootStore";

export const Profile: React.FC = observer(() => {
  const rootStore = useRootStore();
  const [profile] = useState(() => rootStore.authStore.user);

  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);

  // const updateProfileHandler = async (event: React.MouseEvent) => {
  //   event.preventDefault();
  //
  //   const updatedUser = {
  //     id: authStore.getUser().id,
  //     firstName: firstName.current.value,
  //     lastName: lastName.current.value,
  //   };
  //
  //   await userStore.updateUser(updatedUser);
  // };

  return (
    <div className="container col-sm-6 offset-sm-3">
      <div className="auth-header text-center">
        <h2>
          Hi, {profile.firstName} {profile.lastName}! 👋
        </h2>
        <h5>{profile.email} 📨</h5>
      </div>
      <form className="base-form">
        <div className="form-group">
          <label htmlFor="email">First name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            ref={firstName}
            defaultValue={profile.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            ref={lastName}
            defaultValue={profile.lastName}
          />
        </div>
        <div className="button__group text-center">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            // onClick={updateProfileHandler}
          >
            Save profile
          </button>
        </div>
      </form>
    </div>
  );
});
