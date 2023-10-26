import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";

function EditStudent() {
  const {id} = useParams();
  console.log(id);
  const[newData,setNewData]=useState([]);
  const [data, setdata] = useState({ name: " ", email: " ", rollno:" " });
  useEffect(() => {
    Axios.get(`http://localhost:4000/student/update-student/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const { name, email, rollno } = res.data;
          setdata({ name, email, rollno });
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);
  const getState = (childData) => {
  
    setNewData(childData);
  };
  const handleSubmit = () => {
    
    const newObj = { name: newData[0], email: newData[1], rollno: newData[2] };
    Axios.put("http://localhost:4000/student/update-student/"+id, newObj)
      .then((res) => {
        if (res.status === 200) {
          const { name, email, rollno } = res.data;
          setdata({ name, email, rollno });
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        getState={getState}
        nameValue={data.name}
        emailValue={data.email}
        rollNoValue={data.rollno}
      >update Student</StudentForm>
    </form>
  );
}
export default EditStudent;
