function AddTodo() {
  return (
    <div className="container">
      <div className="row hg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter To Do here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2 text-end">
          <button type="button" className="btn btn-success hg-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;