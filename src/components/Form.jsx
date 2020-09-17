import React from 'react';
export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
    <div className="form-group">
        <label >Name: </label>
        <input className="form-control" id="name" />
    </div> 
  
    <div className="form-group">
        <label >DoorDash Price: </label>
        <input className="form-control" id="doordash"
        placeholder="0.00" 
        />
    </div>

    <div className="form-group">
        <label >UberEats Price: </label>
        <input className="form-control" id="ubereats"
        placeholder="0.00" 
        />
    </div>

    <div className="form-group">
        <label >Postmates Price: </label>
        <input className="form-control" id="postmates"
        placeholder="0.00" 
        />
    </div>

    <div className="form-group">
        <label >Grubhub Price: </label>
        <input className="form-control" id="grubhub"
        placeholder="0.00" 
        />
    </div>

    <div className="form-group">
        <label >Link: </label>
        <input className="form-control" id="link"
        placeholder="https://www..." 
        />
    </div>

    <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
            Submit
        </button>
        <br></br>
        Note: The restaurants added are temporary, the REST server is currently not real.
</div>
</form>
);
};
export default Form;