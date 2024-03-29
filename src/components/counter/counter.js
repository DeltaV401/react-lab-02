import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter">
        <span className={classes}>{this.state.count}</span><br/>
        <button href="#" className="down clicker" onClick={this.handleDown}>
          You've been naughty. <br/>One less present.
        </button>
        <button href="#" className="up clicker" onClick={this.handleUp}>
          You've followed the rules. <br/>One more present.
        </button>
      </section>
    );
  }
}

export default Counter;
