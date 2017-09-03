import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/index.js';

class NewCard extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
    };
  }

  submitNewCard() {
    console.log(this.state.userInput);
    this.props.addCard(this.state.userInput);
  }

  handleNewCardInput(e){
    this.setState({
      userInput: e.target.value
    });
  }

  render(){
    return (
      <div id= "popup">
       <form>
        <h2 className= "newtask">New Task</h2>
        <input
          className = "title"
          type="text"
          placeholder="Title"
          onChange={this.handleNewCardInput.bind(this)}
        />
         <input
          className = "creator"
          type="text"
          placeholder="Creator"
          onChange={this.handleNewCardInput.bind(this)}
        />
         <input
          className = "assigned"
          type="text"
          placeholder="Assigned To"
          onChange={this.handleNewCardInput.bind(this)}
        />

        <select className = "select">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Blocker">Blocker</option>
        </select>

        <button className = "btn" onClick={this.submitNewCard.bind(this)}>Submit</button>
       </form>
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
