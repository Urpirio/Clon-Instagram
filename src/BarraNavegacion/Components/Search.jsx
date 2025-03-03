import React from 'react';
import Bnavegacion from './Bnavegacion';
import '../Style/Search.less';

export default function Search() {
  return (
    <section className='Search'>
        <Bnavegacion/>
        <div className='Search__div'>
            <div className='S_div_div1'>
                <div className='div1'>
                    <h2>Search</h2>
                </div>
                <div className='div2'>
                    <i class='bx bx-search'></i>
                    <input type="text" placeholder='Search'/>
                    <i id='X' class='bx bx-x'></i>
                </div>
            </div>
            <div className='S_div_div2'>
                <span className='Span1'>
                    <h2>Recent</h2>
                    <span>Clear all</span>
                </span>
            </div>
        </div>
    </section>
  )
}
