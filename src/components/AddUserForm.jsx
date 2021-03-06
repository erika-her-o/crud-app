import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        
        props.addUser(data)
        
        //limpiar campos
        e.target.reset();
    }

    return (
        <form onSubmit= {handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={
                register({
                    required: {value:true, message:'campo requerido'}
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" ref={
                register({
                    required: {value:true, message:'campo requerido'}
                })
            }/>
            <div>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;