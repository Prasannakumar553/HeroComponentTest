import React from 'react';
import Typography from './Typography/Typography';
 
const App = () => {
  return (
    <React.Fragment>
    <div>
      <Typography variant="h5">Heading</Typography>
      
    </div>
    <div><Typography variant="body">Description</Typography></div>
    <div>
      <button variant="contained">Contained</button>
      <button variant="contained" disabled>
        Disabled
      </button>
      <button variant="contained" href="#contained-buttons">
        Link
      </button>
      </div>
    </React.Fragment>
  );
};
 
export default App;  
