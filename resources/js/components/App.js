import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <main>
      <h1>Inventory App</h1>
    </main>
  )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
