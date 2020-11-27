import React from "react";
import { Link } from "react-router-dom";

export const Workouts: React.FC = () => {

  return (
    <div>
      <div className="dashboard__header text-center">
        <h3 className="dashboard__header-title">Workouts for you 💪</h3>
      </div>
      <table className="table table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Coach</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <Link to="/workout/1">Kettlebell Workout Circuits</Link>
            </td>
            <td>
              Short description goes here. A brief description of the training
              program, what it is aimed at.
            </td>
            <td>Peter Jakobs</td>
            <td className="actions_td">
              <button className="btn btn-success">Join</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
