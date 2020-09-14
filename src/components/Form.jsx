import React from 'react';
export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
    <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input className="form-control" id="name" />
    </div> 
  
    <div className="form-group">
        <label htmlFor="email">DoorDash Price: </label>
        <input className="form-control" id="doordash"
        placeholder="0.00" 
        />
    </div>

    <div className="form-group">
        <label htmlFor="email">UberEats Price: </label>
        <input className="form-control" id="ubereats"
        placeholder="0.00" 
        />
    </div>

    <div className="form-group">
        <label htmlFor="email">Postmates Price: </label>
        <input className="form-control" id="postmates"
        placeholder="0.00" 
        />
    </div>

    <div className="form-group">
        <label htmlFor="email">Grubhub Price: </label>
        <input className="form-control" id="grubhub"
        placeholder="0.00" 
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