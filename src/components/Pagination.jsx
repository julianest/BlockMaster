import React from 'react';

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }
    return (
        <ul className="paginationClass">
            {
                prev ?
                    (<li className="pageItem">
                        <button className='pageLink' onClick={handlePrevious}>Previous</button>
                    </li>) : null
            }
            {
                next ?
                    (<li className="pageItem">
                        <button className='pageLink' onClick={handleNext}>Next</button>
                    </li>) : null
            }
        </ul>
    )
}

export default Pagination;