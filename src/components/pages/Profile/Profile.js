import ProfileCard from '../../profile-card/profile-card';
import PostsView from '../../posts-view/posts-view';
import { useEffect } from "react";
import { gsap } from 'gsap';
import { useOutletContext } from 'react-router-dom';


const Profile = (props) => {
    const [setCommentsKey] = useOutletContext();

    useEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 0.3, ease: "power4.out", y: 0 });
    }, []);

    return (
        <>
            <div className='mt-2'>
                <ProfileCard id='0'/>
            </div>
            <div className="d-mode-bg bordered border px-2 m-3">
                <PostsView postSize={6} setCommentsKey={setCommentsKey}/>
            </div>
        </>
    );
}

export default Profile;