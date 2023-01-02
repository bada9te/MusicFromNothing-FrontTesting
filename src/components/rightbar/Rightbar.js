import './Rightbar.css'
import RightBarItem from './rightBarItem/RightBarItem';
import * as Icon from 'react-bootstrap-icons';

const Rightbar = (props) => {
    return (
        <div className="rightbar float-end d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: '300px'}}>
            <div className="m-3 search-box">
                <Icon.Search width='1.8em' height='1.8em' style={{marginRight: '0.5em'}}/>
                <input className="form-control rounded" type="text" placeholder='People' />       
            </div>

            <div className="list-group list-group-flush border-bottom scrollarea">
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                <RightBarItem 
                    link="/login" 
                    heading="User Nickname" 
                    placeholder="Account description"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                
            </div>
        </div>
    );
}

export default Rightbar;