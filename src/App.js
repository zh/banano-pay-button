import React from 'react';
import BananoButton from './BananoButton'

class App extends React.Component {
  render() {
    return (
      <div>
        <BananoButton
          data={this.props}
        />
      </div>
    );
  }
}

export default App;
