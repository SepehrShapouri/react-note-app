import React from 'react'
import Select from 'react-select'
const options = [
    { value: 'newest', label: 'Sort By Newest' },
    { value: 'oldest', label: 'Sort By Oldest' },
    { value: 'completed', label: 'Sort by Completed' }
  ]
const SortDropDown = ({sortHandler}) => {
    return ( 
        <Select onChange={(e)=> sortHandler(e)}options={options}/>
     );
}
 
export default SortDropDown;