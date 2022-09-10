
import{useState,useEffect} from 'react'
import View from './View'

const getDataFromLs = () =>{
  const data = localStorage.getItem('works')
  if(data){
    return JSON.parse(data)
  }else{
    return[]
  }
}


 function App(){
  const [works,setWorks] = useState(getDataFromLs());
  const [title,setTitle] = useState('');
  const [time,setTime] = useState('');
  const [number,setNumber] = useState('');


const handleSubmit= (e)=>{
  e.preventDefault()
  let work={
    title ,
    time,
    number
  }
 setWorks([...works,work])
}

const deleteWork = (number) =>{
  const filterWorks= works.filter((element,index)=>{
    return element.number !== number
  })
  setWorks(filterWorks)
}

useEffect (()=>{
localStorage.setItem('works',JSON.stringify(works))
},[works])
  return (
    <div className="wrapper">
    <h2>لیست کارها</h2>
    <p>لیست کارهای روزانه خود را وارد کنید</p>
    <div className="main">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group ">
            <label htmlFor="">عنوان</label>
            <input
             type="text"
             className="form-control"
              required
              onChange={(e)=>setTitle(e.target.value)}
              />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="">دقیقه</label>
            <input
             type="number"
             className="form-control"
             required 
             onChange={(e)=>setTime(e.target.value)}
             />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="">شماره</label>
            <input
             type="text"
             className="form-control"
              required
              onChange={(e)=>setNumber(e.target.value)}
              />
          </div>
          <div className="form-froup mt-4">
            <button type="submit"className="btn btn-success btn-md">افزودن</button>
          </div>
        </form>
      </div>




      <div className="view-container">
        {
          works.length > 0 && 
          <>
          <div className="table-responsive w-100">
          <table className="table">
            <thead>
              <tr>
                <th> شماره#</th>
                <th>عنوان</th>
                <th>دقیقه</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
            <View works={works} deleteWork={deleteWork} />
            </tbody>
          </table>
        </div>
        <button className='btn btn-danger btn-md' onClick={()=>setWorks([])}>حذف همه</button>
          </>
        }

        {
          works.length < 1 && <div>لیست روزانه خالی است</div>
        }
      </div>

       </div>


     </div>
  )
 }
 
 
 export default App;