import '../styles/loading.css'
import logo from '../assets/pacman.gif'
const Loading=()=>{
  return(
    <div id="loader-container">
  <img id='loader-gif' src={logo}></img>

    </div>
  )
}
export default Loading;