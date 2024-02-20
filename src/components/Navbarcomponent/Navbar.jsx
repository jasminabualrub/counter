import React from 'react'

function Navbar({age,count}) {
 
  return (
   <nav>
     <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Contact{age}</a></li>
       <li><a href="#">cart{count}</a></li>
     </ul>
   </nav>
  );
}

export default Navbar;