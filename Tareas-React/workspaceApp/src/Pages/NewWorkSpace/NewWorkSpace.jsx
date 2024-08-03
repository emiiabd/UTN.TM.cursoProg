import React, { useState } from "react";
import "./NewWorkSpace.css";
import { NavBar, NewWSRender } from "../../Components";
import { generarWorkSpace, generateGeneralChannel, generateNewChannel, getLocalUser, getUserById } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

const NewWorkSpace = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([])

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }

  const handleCreateNewWorkSpace = (e) => {
    e.preventDefault();
    const userData = getUserById(getLocalUser().userId)

    const channels = [generateGeneralChannel()]
    data.NewChannel ? channels.push(generateNewChannel(data.NewChannel)) : null
    
    userData.userMemory.push(
      {
        workSpace: data.WSname, 
        workSpaceID: userData.userMemory.length+1, 
        workSpaceThumbnail: '', 
        channels: channels
      })
    generarWorkSpace(userData)
    navigate('/')
  }


  return (
    <div className="mainViewNewWS">
      <NavBar btnTipe={'back'}/>
      <NewWSRender handleCreateNewWorkSpace={handleCreateNewWorkSpace} handleOnChange={handleOnChange}/>
    </div>
  );
};

export default NewWorkSpace;
