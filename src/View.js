import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
function View({works,deleteWork}) {
    console.log(works)
  return works.map((work)=>
  <tr key={work.number}>
  <td>{work.number}</td>
  <td>{work.title}</td>
  <td>{work.time}</td>
  <td className='delete-btn' onClick={()=> deleteWork(work.number)}>
    <Icon icon={trash}/> 
  </td>
</tr>
  )
}

export default View
