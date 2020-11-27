import React, {useRef} from "react";
import { useHistory } from "react-router-dom";

export const CreateProgram: React.FC = () => {
  const history = useHistory();
  const title = useRef<HTMLInputElement>(null)
  const short_description = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)

  const createProgramHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    // const program = {
    //   title: title.current.value,
    //   short_description: short_description.current.value,
    //   description: description.current.value,
    //   owner_id: 1
    // }
    // programStore.createProgram(program)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(err => {
    //     console.log('Error', err)
    //   })
  };

  return (
    <div className="container col-sm-6 offset-sm-3">
      <div className="dashboard__header text-center">
        <button onClick={history.goBack} className="btn back-btn">
          Back
        </button>
        <h2>Create new program</h2>
      </div>
      <form className="base-form">
        <div className="form-group">
          <label htmlFor="title">Program title</label>
          <input type="text" className="form-control" id="title" ref={title}/>
        </div>
        <div className="form-group">
          <label htmlFor="short_description">Short description</label>
          <input type="text" className="form-control" id="short_description" ref={short_description} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows={10} ref={description}/>
        </div>
        <div className="button__group text-center">
          <button
            type="submit"
            className="btn btn-success btn-block"
            onClick={createProgramHandler}
          >
            Add program
          </button>
        </div>
      </form>
    </div>
  );
};
