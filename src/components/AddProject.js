import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }

    static defaultProps = {
        catagories: ['Web Design','Web Development','Mobile Development']
    }

    // Each component has its own state
    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Title is required.');
        }
        else{
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                // console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        let catagoryOptions = this.props.catagories.map(catagory => {
            return <option key = {catagory} value = {catagory}>{catagory}</option>
        });

        return (
        <div>
            <h3>AddProject</h3>
            <form onSubmit={this.handleSubmit.bind(this)}> 
                <div>
                    <label>Title</label><br />
                    <input type = 'text' ref = "title" />
                </div>
                <div>
                    <label>Category</label><br />
                    <select ref = "category" >
                        {catagoryOptions}
                    </select>
                </div>
                <br />
                <input type = 'submit' value = 'Submit'/>
            </form>
        </div>

        );
    }
}

AddProject.propTypes = {
    catagories: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProject;
