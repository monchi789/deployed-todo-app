import Auth from "./components/Auth";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import {useEffect, useMemo, useState} from 'react'
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  const [tasks, setTask] = useState(null)

  const getData =  async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      setTask(json)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=> {
    if(authToken) {
      getData()
    }
  },[])

  // Sort by date
  const sortedTask = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))


  return (
    <div className="app">
      {!authToken && <Auth/>}
      {authToken && 
      <><ListHeader listName={'🌴 Holiday tick list'} getData={getData}/>
      <p className="user-email">Welcome back {userEmail}</p>
      {sortedTask?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)}
      </>}
      <p className="copyright">Creative Coding LLC</p>
    </div>
  )
}

export default App; 