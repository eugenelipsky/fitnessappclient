import React, {useRef} from "react";
import {useHistory} from 'react-router-dom';

export const EditProgram: React.FC = () => {
  const history = useHistory()
  const title = useRef<HTMLInputElement>(null)
  const short_description = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)

  const updateProgramHandler = (event: React.MouseEvent) => {
    event.preventDefault()

    // const updatedProgram = {
    //   title: title.current.value,
    //   short_description: short_description.current.value,
    //   description: description.current.value
    // }

    // programStore.updateProgram(1, updatedProgram)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(err => {
    //     console.log('Error', err)
    //   })

  }


  return (
    <div className="container">
      <div className="dashboard__header text-center">
        <button onClick={history.goBack} className="btn back-btn">Back</button>
      </div>
      <div className="row">
        <div className="col">
          <div className="dashboard__header text-center">
            <h2>Edit program</h2>
          </div>
          <form className="base-form">
            <div className="form-group">
              <label htmlFor="title">Program title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                ref={title}
                defaultValue="Kettlebell Workout Circuits"
              />
            </div>
            <div className="form-group">
              <label htmlFor="short_description">Short description</label>
              <input
                type="text"
                className="form-control"
                id="short_description"
                ref={short_description}
                defaultValue="Short description goes here. A brief description of the training program, what it is
aimed at."
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows={10}
                ref={description}
                defaultValue="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ad.
              8 Halos (each side)"
              />
            </div>
            <div className="button__group text-center">
              <button type="submit" className="btn btn-success btn-block" onClick={updateProgramHandler}>
                Save program
              </button>
            </div>
          </form>
        </div>
        <div className="col">
          <div className="dashboard__header text-center">
            <h2>Manage athletes</h2>
          </div>
          <h4>Requests</h4>
          <table className="table table-striped text-center">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Athlete</th>
              <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark Jakobs</td>
              <td className="">
                <button className="btn btn-success">Accept</button>
                <button className="btn btn-danger ml-2">Reject</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Tom Taylor</td>
              <td className="">
                <button className="btn btn-success">Accept</button>
                <button className="btn btn-danger ml-2">Reject</button>
              </td>
            </tr>
            </tbody>
          </table>
          <h4 className="mt-5">Members</h4>
          <table className="table table-striped text-center">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Athlete</th>
              <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Tina Cole</td>
              <td className="">
                <button className="btn btn-danger ml-2">Remove</button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>John Miller</td>
              <td className="">
                <button className="btn btn-danger ml-2">Remove</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
