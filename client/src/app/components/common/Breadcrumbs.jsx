import React from 'react';

const Breadcrumbs = () => {
    return (
        <nav>
            <div className="nav-wrapper mt-1 px-1">
                <div className="col s12">
                    <a href="#!" className="breadcrumb">First</a>
                    <a href="#!" className="breadcrumb">Second</a>
                    <a href="#!" className="breadcrumb">Third</a>
                </div>
            </div>
        </nav>
    );
};

export default Breadcrumbs;