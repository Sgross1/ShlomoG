import React from 'react';
function ProdsItem(props) {
    return (
        <div className="p-3 col-lg-12 col-sm-12 ">
            <div className='container border overflow-hidden'>
                <img className="float-left" src={props.item.url} alt="Card image cap" height="200" />
                <h5 className="card-title">{props.item.name}</h5>
                <div className="card-text">description: {props.item.description}</div>
            </div>
        </div>
    );
}
export default ProdsItem;

