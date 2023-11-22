class WorkoutTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      newWorkout: '',
    };
  }

  handleChange = (e) => {
    this.setState({ newWorkout: e.target.value });
  };

  addWorkout = () => {
    const { newWorkout, workouts } = this.state;
    if (newWorkout.trim() !== '') {
      const updatedWorkouts = [...workouts, newWorkout];
      this.setState({ workouts: updatedWorkouts, newWorkout: '' });
    }
  };

  render() {
    const { workouts, newWorkout } = this.state;

    return (
      <div>
        <h1>Workout Tracker</h1>
        <input
          type="text"
          placeholder="Enter workout"
          value={newWorkout}
          onChange={this.handleChange}
        />
        <button onClick={this.addWorkout}>Add</button>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index}>{workout}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<WorkoutTracker />, document.getElementById('root'));
