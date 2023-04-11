import React from "react"
import PropTypes from "prop-types"

export const AdditionalInfo = (props)=> {
    return (
        <div className="bg-black rounded p-3 py-2">
            <h4 className="text-center text-danger border-bottom border-danger pb-1">{props.name}</h4>
            <div className="text-center text-danger fs-5">{props.data}</div>
        </div>
    )
    
};
AdditionalInfo.propTypes = {
    name: PropTypes.string,
    data: PropTypes.string
}