import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {Currency, dispatch } = useContext(AppContext);
    
    const changeCurrency = (val)=>{
        console.log(val)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
      }
      

    return (
        <div className="alert bg-success dropdownContainer"> Currency {
            <select name="currency" id="currency" value={Currency}
              onChange={event=>changeCurrency(event.target.value)}
              className="dropdown"
            >
                <option className="dropdown-options" value="$">$ Dollar</option>
                <option className="dropdown-options" value="£">£ Pound</option>
                <option className="dropdown-options" value="€">€ Euro</option>
                <option className="dropdown-options" value="₹">₹ Ruppee</option>
            </select>	
          }	
        </div>
    );
};
export default Currency;
