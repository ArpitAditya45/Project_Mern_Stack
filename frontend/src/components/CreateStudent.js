import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent() {
    const [arr,setArr]=useState([]);
    const handleSubmit=(event)=>{
      event.preventDefault();

        alert("Creating a record...");
        const data={name:arr[0],email:arr[1],rollno:arr[2]};
        Axios.post("https://test-first-mern-stack.onrender.com/student/create-student",data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record Added to Db")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));

    }
    const getState=(out)=>{
        setArr(out);
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <h1><StudentForm getState={getState} nameValue="" emailValue="" rollNoValue="">CreateStudent</StudentForm></h1>
      {console.log(arr)};

      </form>
    </>
  );
}
export default CreateStudent;
