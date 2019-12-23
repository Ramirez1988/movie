import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

 function spinner() {
    return (
        <div>
            <Loader
            type="Puff"
            color="#ef339a"
            height={50}
            width={50}        
            />
        </div>
    )
}
export default spinner;