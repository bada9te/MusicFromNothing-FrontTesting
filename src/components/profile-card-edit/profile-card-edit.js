import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

const ProfileCardEdit = (props) => {
    const {id} = props;
    
    return (
        <>
            <div className="col pt-3 px-3">
                <div className="bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative d-flex justify-content-center align-items-center">
                    <div className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img alt='userAvatar' 
                                className='rounded-circle shadow m-3' 
                                src='https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'
                                style={{width: '25vh', height: '25vh'}}></img>
                            <div className="mx-3 w-100 align-items-center justify-content-between">
                                <strong className="mb-1 fs-1">UserName</strong>
                                <div className="col-10 mb-1 small fs-4">Description</div>
                                <div className='pt-3 w-50'>
                                    <label htmlFor="formFile" className="form-label">Avatar:</label>
                                    <input className="form-control" type="file" id="formFile"/>
                                </div>
                            </div>
                            <div className="d-flex flex-column mx-3 w-100 align-items-center justify-content-between text-center">
                                
                            </div>
                        </div>
                        <div className='p-2'>
                            <label htmlFor="formFile" className="form-label">Background image:</label>
                            <input className="form-control" type="file" id="formFile"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCardEdit;