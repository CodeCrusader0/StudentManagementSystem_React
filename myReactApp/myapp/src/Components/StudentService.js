import axios from "axios";
class StudentService{
    constructor(){
        this.baseurl="http://localhost:4001/";
    }

    getStudents(){
        return axios.get(this.baseurl+"stud");
    }

    deleteStudent(roll){
        return axios.delete(this.baseurl+"stud/"+roll);
    }

    updateStudent(stud){
        return axios.put(this.baseurl+"stud/"+stud.roll,stud);
    }

    addStudent(stud){
        return axios.post(this.baseurl+"stud",stud);
    }

}
export default new StudentService();