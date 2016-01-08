import React from 'react';

export default class Note extends React.Component {
  render() {
    const {value, onEdit, onValueClick, editing, ...props} = this.props;
    return (
      <div {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </div>
    )
  }
  renderEdit = () => {
    return <input type="text"
      autoFocus={true} defaultValue={this.props.task}
      onBlur={this.finishEdit} onKeyPress={this.checkEnter} />;
  };
  renderValue = () => {
    const onDelete = this.props.onDelete;
    return (
      <div>
      <div className="task" onClick={this.props.onValueClick}>{this.props.value}</div>
      {onDelete ? this.renderDelete() : null}
      </div>
    );
  };
  checkEnter = (e) => {
    // The user hit *enter*, let's finish up.
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  finishEdit = (e) => {
    if(this.props.onEdit) {
      this.props.onEdit(e.target.value);
    }
  };
  renderDelete = () => {
    return (
      <button className="delete" onClick={this.props.onDelete}>x</button>
    );
  };
}
