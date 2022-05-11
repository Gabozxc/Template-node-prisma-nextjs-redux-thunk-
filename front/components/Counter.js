import { useSelector, useDispatch } from "react-redux";
import {DownloadUserData} from "../actions/actionsYT"


export default function Counter() {
  const {loading, data} = useSelector((state) => state.youtubeApi)
  const dispatch = useDispatch()
  async function call(){
    await dispatch(DownloadUserData())
  }
  return (
    <div>
      {loading ? "cargando" : "ya cargo"}
      <br />
      {data.name ? `Ya llego ${data.name}` : "Sigue sin llegar el invitado"}
      <div>
        <button
          aria-label="Increment value"
          onClick={call}
          className="bg-blue-500 text-red-500 d-inline-block"
        >
          Test
        </button>
      </div>
    </div>
  )
}
