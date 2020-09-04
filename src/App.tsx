import React from 'react';
import './App.scss';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="app">
        <div className="app-title">Title</div>
        <div className="app-description">Description</div>
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    </div>
  );
}

export default App;
