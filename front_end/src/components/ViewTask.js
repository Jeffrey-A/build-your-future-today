import React from "react";
import EditTask from "./EditTask";
import { Badge } from "evergreen-ui";

class ViewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditingTask: false,
    };
  }

  cancelEditTask = () => {
    this.setState({ isEditingTask: false });
  };

  getColor = (status) => {
    switch (status) {
      case "complete":
        return "green";
      case "in complete":
        return "neutral";
    }
  };

  editTask = () => {
    this.setState({ isEditingTask: true });
  };

  updateTaskStatus = () => {
    const status = this.props.taskInfo.status;
    const { editTask, taskInfo } = this.props;
    const { taskId, title, description } = taskInfo;

    if (status == "complete") {
      editTask(taskId, { status: "incomplete", title, description });
    } else {
      editTask(taskId, { status: "complete", title, description });
    }
  };

  render() {
    const { isEditingTask } = this.state;
    const { taskInfo, hide, editTask, deleteTask } = this.props;

    if (isEditingTask) {
      return (
        <EditTask
          save={editTask}
          taskInfo={taskInfo}
          cancelEditTask={this.cancelEditTask}
        />
      );
    }

    return (
      <div className="overlay">
        <div className="view-goal">
          <p className="closeModal" onClick={hide}>
            X
          </p>
          <div className="view-goal-header">
            <h2>{taskInfo.title}</h2>
            <Badge isSolid color={this.getColor(this.props.taskInfo.status)}>
              {taskInfo.status}
            </Badge>
          </div>

          <div>
            <button className="btn green m-r" onClick={this.editTask}>
              Edit
            </button>
            <button
              className="btn red"
              onClick={() => deleteTask(taskInfo.taskId)}
            >
              Delete
            </button>
          </div>

          <div>
            <h3>Description</h3>
            <p>{taskInfo.description}</p>
          </div>
          <div>
            {taskInfo.status == "complete" ? (
              <button
                className="btn no-started"
                onClick={this.updateTaskStatus}
              >
                Mark as incomplete
              </button>
            ) : (
              <button className="btn done" onClick={this.updateTaskStatus}>
                Mark as complete
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewTask;
