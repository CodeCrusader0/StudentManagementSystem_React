import { useHistory } from "react-router-dom";
import StudentService from "./StudentService";
import { useState } from "react";

const AddStudent = () => {

    let [studOb, setOb] = useState({ roll: "", name: "", marks: "" });
    let history = useHistory();

    const addData = () => {
        StudentService.addStudent(studOb).then((result) => {
            history.push("/");
        }).catch(() => { });
    }

    const handleChange = (event) => {
        let { name, value } = event.target;
        setOb({ ...studOb, [name]: value });
    }
    return (
        <div>
            <form>
                <label for="roll">Enter roll</label>
                <input type="text" name="roll" id="roll"
                    value={studOb.roll}
                    onChange={handleChange}></input>

                <label for="name">Enter name</label>
                <input type="text" name="name" id="name"
                    value={studOb.name}
                    onChange={handleChange}></input>

                <label for="marks">Enter marks</label>
                <input type="text" name="marks" id="marks"
                    value={studOb.marks}
                    onChange={handleChange}></input>

                <button type="button" name="btn" id="add" onClick={addData}>Add student</button>
            </form>
        </div>
    );

}
export default AddStudent;