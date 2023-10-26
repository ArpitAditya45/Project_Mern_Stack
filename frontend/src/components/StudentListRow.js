import Axios from "axios";
import {Link} from "react-router-dom"; 
function StudentListRow(props)
{
    const {_id,name,email,rollno} = props.obj; //Object destruction
    const handleClick=()=>{
        Axios.delete("https://test-first-mern-stack.onrender.com/student/delete-student/"+_id )
        .then((res)=>{
            if(res.status===200){
                alert("Record deleted Successfully");
                window.location.reload();
            }else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));

    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <button className="btn btn-danger m-4" onClick={handleClick}>Delete</button>
                <button className="btn btn-success m-4"><Link to={"/edit-student/"+_id }className="text-decoration-none text-light">Edit</Link></button>
            </td>
        </tr>
    )
}
export default StudentListRow;
