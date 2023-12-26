import { initSocket, joinRoom } from "@/redux/sockets";
import useRedux from "@hooks/useRedux";
import React from "react";

function Layout() {
  const {dispatch} = useRedux()
  dispatch(initSocket())
  
  const handleJoinRoom = ()=> {
    dispatch(joinRoom({rooms:'123'}))
  }

  return <div>Layout 
    <button onClick={handleJoinRoom}> Test </button>
  </div>;
}

export default Layout;
