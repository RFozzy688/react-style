import classes from './MyInput.module.css';
import React from 'react';

// const MyInput = React.forwardRef(function MyInput(props, ref) {
//   return ( 
//     <input ref={ref} className={classes.myInput} {...props}/>
//    );
// })

function MyInput(props) {
  return ( 
    <input className={classes.myInput} {...props}/>
   );
}

export default MyInput;