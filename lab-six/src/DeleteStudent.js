import axios from "axios";
import React from "react";

class DeleteStudent extends React.Component {

    state = { 
        id: 0
    };

    handleChange = event => { 
        this.setState({ id: event.target.value});
        
    };

    handleSubmit = event => {
        event.preventDefault();
        
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
            name: `${this.state.name}`
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
     };
   

    render() {
        return ( 
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person ID:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
           </div>
        );
    }
}

export default DeleteStudent;