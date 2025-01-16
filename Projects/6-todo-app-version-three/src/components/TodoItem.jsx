import { RiChatDeleteLine } from "react-icons/ri";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row hg-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2 text-end">
          <button type="button" className="btn btn-danger hg-button" onClick={() => onDeleteClick(todoName)}>
            <RiChatDeleteLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;