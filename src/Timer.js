import React, { Component } from 'react';

class Timer extends Component {

  state = {
    time: 0,
    color: '#'+Math.floor(Math.random()*16777215).toString(16)
  }

  // add your code here







  render() {

    const { time, color, className } = this.state
    return (
      <section className="Timer" style={{background: color}}>

        <h1>{ time }</h1>
        <button onClick={ this.stopClock }>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={ this.handleClose }>X</small>

      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.interval = setInterval(() => {

    this.setState(prevState => ({
      time: prevState.time+1
    }))

   } ,1000)
  }
  

  stopClock = () => {
    clearInterval(this.interval)
  }

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id)
  }

  componentDidMount(){
    this.clockTick();
  }

  componentWillUnmount(){
    this.stopClock();
  }


}

export default Timer;
