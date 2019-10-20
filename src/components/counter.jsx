import React, { Component } from 'react';

export default class Counter extends Component {
  //data that component needs
  state={
    count: this.props.value,
    tags: []
  };

  constructor(props){
    super(props);
    this.handleIncrement=this.handleIncrement.bind(this); //allows us to use this in handleIncrement
  }

  formatCount(){
    const { count } =this.state;
    return count ===0 ? "Zero" : count;
  }

  renderTags(){
    if(this.state.tags.length ===0 )return <p>'There are no tags'</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0)? "warning": "primary"
    return classes;
  }

  handleIncrement(){
    console.log("Increment clicked");
    this.setState({count: this.state.count+1});
  }

  render() {


    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}  className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
}
