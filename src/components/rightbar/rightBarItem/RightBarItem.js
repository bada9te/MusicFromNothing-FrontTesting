import './RightBarItem.css'
import * as Icon from 'react-bootstrap-icons';

const RightBarItem = (props) => {
    const {link, heading, placeholder, image} = props;

    // can be active in className (color blue)
    return (
        <a href={link} className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div className='flex-description '>
                <img className='image' src={image}></img>

                <div className="w-100 align-items-center content-aligner">
                    <strong className="mb-1">{heading}</strong>
                    <div className="col-10 mb-1 small">{placeholder}</div>
                </div>
            </div>
        </a>
    );
}

export default RightBarItem;
