import { useState } from "react";

function StudentForm(props){
    const [name,setName] = useState(props.nameValue);
    const [email,setemail] = useState(props.emailValue);
    const [rollNo,setrollNo] = useState(props.rollNoValue);
    const arr=[name,email,rollNo];

    function handleClick(){
        props.getState(arr);
    }
    return(
        <>
        <div style={{maxWidth:"50%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} className="form-control" placeholder="Enter your name" onChange={(event)=>setName(event.target.value)}></input>
            <input defaultValue={props.emailValue} className="form-control" placeholder="Enter email" onChange={(event)=>setemail(event.target.value)}></input>
            <input defaultValue={props.rollNoValue} className="form-control" placeholder="Enter your roll no" onChange={(event)=>setrollNo(event.target.value)}></input>
            <button onClick={handleClick} className="btn btn-info d-block mx-auto my-3"type="submit">{props.children}</button>
        </div>
        </>
    )
}
export default StudentForm;