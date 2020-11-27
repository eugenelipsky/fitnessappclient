import React from "react";
import {Link} from 'react-router-dom';

export const Home: React.FC = () => {
  const cards = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="text-center pb-5 pt-5 bg-light">
        <h2>Welcome to Fitness App</h2>
        <p>Here you can be a coach and an athlete at the same time</p>
      </div>
      <div className="row justify-content-center mt-5 mb-5">
        <div className="col-sm-6 text-center">
          <h3>Are you a coach?</h3>
          <p>Create your first training program right now</p>
          <Link to="/programs"><button className="btn btn-primary">Create training program</button></Link>
        </div>
        <div className="col-sm-6 text-center">
          <h3>Are you an athlete?</h3>
          <p>Join the best workout programs</p>
          <Link to="/workouts"><button className="btn btn-primary">Join workouts</button></Link>
        </div>
      </div>
      <hr/>
      <h3 className="text-center mt-5 mb-5">Check out the list of recently added programs</h3>
      <div className="row">
        {
          cards.map(() => {
            return (
              <div className="col-sm-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Kettlebell Workout Circuits</h5>
                    <p className="card-text">Short description goes here. A brief description of the training program, what it is aimed at..</p>
                    <Link to="/workouts" className="btn btn-success">Join program</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};
