 import React from 'react';
import Header from './component/Header';
import Homepage from './Section/Home/Homepage';
import Footer from './component/Footer';
 
 const App = () => {
   return (
     <div className='bg-gray-900'>
        <Header />
        <Homepage />
        <Footer />
     </div>
   );
 }
 
 export default App;
 