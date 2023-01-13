import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StudentService from "./StudentService";

const List = () => {

    let [studArr, setStudArr] = useState([]);
    let history=useHistory();

    useEffect(() => {
        StudentService.getStudents().then((result) => {
            setStudArr(result.data);
            console.log(studArr);
        }).catch(() => { });
    }, []);

    const delStudent = (roll) => {
        StudentService.deleteStudent(roll).then((result) => {
            console.log("deleted");
            history.push("/");
            
        }).catch((err) => {
            console.log("Couldn't delete");
        });
    };

    const renderList = () => {
        return studArr.map((stud) => {
            return <tr key={stud.roll}><td>{stud.name}</td><td>{stud.roll}</td><td>{stud.marks}</td>
            <td>
                <button type="button" name="btn" id="del" onClick={()=>delStudent(stud.roll)}>Delete</button>

                <Link to={{pathname:"/update",state:{studentOb:stud}}}>
                <button type="button" name="btn" id="update">Update</button>
                </Link>
                </td></tr>

        });
    }

return (
    <div>
        <table>
            <thead><tr><th>Name</th><th>Roll</th><th>Marks</th></tr></thead>
            <tbody>
                {renderList()}
            </tbody>
        </table>
        <div>
            <Link to={{ pathname: "/add" }}>
                <button type="button" name="btn" id="add">Add student</button>
            </Link>
        </div>

    </div>
);


}
export default List;