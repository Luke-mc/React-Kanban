import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/index.js';
import { addCardToFakeXHR } from '../../lib/cards.db.js';

class NewCard extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      priority: '',
      createdBy: '',
      assignedTo: '',
      stage: 'todo'
    };
  }


  handleNewTitleInput(e){
    this.setState({
      title: e.target.value
    });
  }

   handleNewPriorityInput(e){
    this.setState({
      priority: e.target.value
    });
  }

   handleNewCreatedByInput(e){
    this.setState({
      createdBy: e.target.value
    });
  }

  handleNewAssignedToInput(e){
    this.setState({
      assignedTo: e.target.value
    });
  }


  submitNewCard() {
    let newCard = {
      title: this.state.title,
      priority: this.state.priority,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo
    };

    addCardToFakeXHR(newCard);
    this.props.addCard(newCard);
  }

  render(){
    return (
      <div id= "popup">
       <form action= "/card" method= "post">
        <h2 className= "newtask">New Task</h2>
        <input
          className = "title"
          type="text"
          placeholder="Title"
          onChange={this.handleNewTitleInput.bind(this)}
        />
         <input
          className = "creator"
          type="text"
          placeholder="Creator"
          onChange={this.handleNewCreatedByInput.bind(this)}
        />
         <input
          className = "assigned"
          type="text"
          placeholder="Assigned To"
          onChange={this.handleNewAssignedToInput.bind(this)}
        />

        <select
        className = "select"
        onChange={this.handleNewPriorityInput.bind(this)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Blocker">Blocker</option>
        </select>
       </form>
        <button className = "btn" value= "Send" onClick={this.submitNewCard.bind(this)}>Submit</button>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (newCard) => {
      dispatch(addCard(newCard))

    }
  }
}

const ConnectedNewCard = connect(
  null,
  mapDispatchToProps
)(NewCard)

export default ConnectedNewCard;
