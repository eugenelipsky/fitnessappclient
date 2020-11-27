import React from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'

export const Programs: React.FC = observer(() => {
  const history = useHistory()

  const removeProgramHandler = (event: React.MouseEvent) => {
    //TODO
  }

  return (
    <div>
      <div className="dashboard__header d-flex justify-content-center position-relative">
        <h3 className="dashboard__header-title position-absolute">
          Training programs created by you 🙌
        </h3>
        <button
          onClick={() => {
            history.push('/create')
          }}
          className="dashboard__header-btn btn btn-success position-absolute"
        >
          Add new program
        </button>
      </div>
      <table className="table table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Kettlebell Workout Circuits</td>
            <td>
              Short description goes here. A brief description of the training
              program, what it is aimed at.
            </td>
            <td className="actions_td">
              <button
                onClick={() => {
                  history.push('/edit/1')
                }}
                className="btn btn-warning"
              >
                Edit
              </button>
              <button
                className="btn btn-danger ml-3"
                onClick={removeProgramHandler}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
})
