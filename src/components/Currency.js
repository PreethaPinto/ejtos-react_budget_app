import React from 'react'

const Currency = () => {
    return <div className='alert alert-secondary'>
                    <label htmlFor="currency">Currency</label>
                    <select name="currency" id="currency">
                        <option value="dollar">$ Dollar</option>
                        <option value="pound">£ Pound</option>
                        <option value="euro">€ Euro</option>
                        <option value="dollar">₹ Rupee</option>
                    </select>

    </div>


}

export default Currency
