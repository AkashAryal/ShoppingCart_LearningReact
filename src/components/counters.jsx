import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {
//when state is changed and initial load this render method is called
  render (){
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
        {this.props.counters.map(counter => (                     //counterDaa
          <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter} />
        ))}
      </div>
    );
  }
}
