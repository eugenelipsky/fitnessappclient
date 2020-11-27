import React from "react";
import {useHistory} from 'react-router-dom';

export const WorkoutInfo: React.FC = () => {
  const history = useHistory()
  return (
    <div className="container">
      <div className="dashboard__header text-center">
        <button onClick={history.goBack} className="btn back-btn">Back</button>
      </div>
      <div className="card">
        <h5 className="card-header text-center">Kettlebell Workout Circuits</h5>
        <div className="card-body">
          <h5 className="card-title">Program description</h5>
          <div className="card-text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ad.
            </p>
            <ul>
              <li>8 Halos (each side)</li>
              <li> 10 Goblet Squats</li>
              <li>8 Overhead Presses (each side)</li>
              <li>15 Kettlebell</li>
              <li>Swings, 8 Bent Over Rows (each side)</li>
              <li>6 Front Rack Reverse Lunge (per side)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
