import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = NoteStore.getState();
    };
  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }
  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }
  storeChanged = state => {
    // Without a property initializer, 'this' wouldn't
    // point at the right context (defaults to 'undefined' in strict mode).
    this.setState(state);
  };

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
          <Notes notes={notes} onEdit={this.editNote} onDelete={this.deleteNote}/>
      </div>
    )
  }

  // We are using an experimental feature known as property
  // initializer here. It allows us to bind the method `this`
  // to point at our *App* instance.
  //
  // Alternatively we could `bind` at `constructor` using
  // a line, such as this.addNote = this.addNote.bind(this);
  addNote = () => {
    NoteActions.create({task: 'New task'});
  };

  editNote = (id, task) => {
    NoteActions.update({id, task});
  };

  deleteNote = (id) => {
    NoteActions.delete(id);
  };
}
