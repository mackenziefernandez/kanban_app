import AltContainer from 'alt-container';
import React from 'react';
// import Notes from './Notes.jsx';
// import NoteActions from '../actions/NoteActions';
// import NoteStore from '../stores/NoteStore';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>+</button>
          <AltContainer stores={[LaneStore]} inject={{lanes: () => LaneStore.getState().lanes || []}} >
            <Lanes />
          </AltContainer>
      </div>
    )
  }
  addLane = () => {
    LaneActions.create({name: 'New lane'});
  };
}
