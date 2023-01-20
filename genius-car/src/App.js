 import './App.css';
 import  React  from 'react';
 import router from './Router/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

 function App() {
 
   return (
     <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router={router}>
 
       </RouterProvider>
     </div>
       
    
  );
}

export default App;
