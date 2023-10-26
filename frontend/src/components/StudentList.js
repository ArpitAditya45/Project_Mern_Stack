import Axios from "axios";
import {useEffect, useState} from "react";
import StudentListRow from "./StudentListRow";


function StudentList()
{
    const [arr,setArr] = useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:4000/student")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[])


    const ListItems = () => {
        return arr.map((val,ind)=>{  //[{},{},{}]
            return <StudentListRow key={ind} obj={val}  />
        })
    }


    return (
        <table style={{maxWidth:"40%"}} className="mx-auto table table-success table-striped table-bordered">
            <thead>
                <tr style={{backgroundColor:"forestgreen"}}>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Roll Number</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default StudentList;
