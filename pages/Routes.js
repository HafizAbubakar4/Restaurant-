import React from 'react'
import { Routes, Route} from "react-router-dom"

import Frontand from './Frontand'
import Dashboard from './dashboard'
import Auth from './auth';
import Contaxt from '../contaxt';


export default function Index() {
    // const [{ foodItems }, dispatch] = useStateValue();

    // const fetchData = async () => {
    //   try {
    //     const data = await getAllFoodItems();
    //     console.log("Fetched data from Firestore in APP JS:", data);
    //     dispatch({
    //       type: actionType.SET_FOOD_ITEMS,
    //       foodItems: data,
    //     });
    //   } catch (error) {
    //     console.error("Error fetching food items: ", error);
    //   }
    // };
    
    // useEffect(() => {
    //   fetchData();
    // }, [dispatch]);
  
    return (
  
      <StateProvider initialState={initialState} reducer={reducer}>
        <AnimatePresence>
          <div className='w-screen h-auto flex flex-col bg-primary'>
            <Header />
            <main className='mt-14 md:mt-20 md:px-16 px-4 py-4 w-full'>
              <Routes>

                <Route path='/*' element={<Frontand />} />
                <Route path='/Dashboard' element={< Dashboard/>} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/contaxt' element={<Contaxt />} />
                <Route path='/datastructur' element={< datastructur/>} />
              </Routes>
            </main>
          </div>
        </AnimatePresence>
      </StateProvider>
    );
}

{/* <Route path='/MainContainer' element={<MainContainer />} />
<Route path='/createItem' element={<CreateContainer />} />
<Route path='/viewcart' element={<ViewCart/>} /> 
<Route path='/checkoutcart' element={<CheckoutCart/>} /> 
 */}