import React, {FC} from 'react';

const Sort: FC = () => {
    return (
        <div className='col'>
            <button className="waves-effect red accent-1 btn-small"><i className="material-icons left">star</i>По поулярности</button>
            <button className="waves-effect red accent-1 btn-small"><i className="material-icons left">keyboard_double_arrow_down</i>по возростанию</button>
            <button className="waves-effect red accent-1 btn-small"><i className="material-icons left">keyboard_double_arrow_up</i> по убыванию</button>
        </div>
    );
};

export default Sort;