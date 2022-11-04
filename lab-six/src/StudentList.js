import axios from "axios";
import React from "react";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";

class StudentList extends React.Component {
    

    state = { 
        users: [],
        
    };
    
    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            const usersData = res.data;
            this.setState({ users: usersData});
            
        });
    }

   
    handleClick() {

    }
    
  

    render() {
        return ( 
            <>
            <AddStudent />
            <DeleteStudent />
            <h1>
                {this.state.users.map(user => (
                    <>
                    <p>{user.name}</p>
                    <button>Delete</button>
                    </>
                ))}
            </h1>
           
           
            </>
          
        );
    }
}

export default StudentList;