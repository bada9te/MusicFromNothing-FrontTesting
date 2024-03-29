import { Skeleton } from "react-skeleton-generator";
import CustomAudioPlayer from "../../audio-player/audio-player";

import '../post-item.scss'


const PostItemSkeleton = (props) => {
    return (
        <>
            <div className="bordered shadow row g-0 border overflow-hidden flex-md-row my-2" style={{minHeight: '255px', height: '255px'}}>
                <Skeleton.SkeletonThemeProvider>
                    <Skeleton width="100%" height="165px" borderRadius="0" />
                </Skeleton.SkeletonThemeProvider>
            <CustomAudioPlayer/>
            </div> 
        </>
    );
} 

export default PostItemSkeleton;