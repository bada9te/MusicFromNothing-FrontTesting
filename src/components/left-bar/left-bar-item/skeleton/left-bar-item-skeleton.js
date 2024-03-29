import { Skeleton } from "react-skeleton-generator";

const LeftBarItemSkeleton = (ptops) => {
    return (
        <a href="/" className="d-mode-bg list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div className='d-flex'>
                <div className="w-100 align-items-center justify-content-between">
                    <Skeleton.SkeletonThemeProvider>
                        <div className="mb-1"><Skeleton width="120px" height="18px"></Skeleton></div>
                        <div className="col-10 mb-1 small pt-1"><Skeleton width="160px" height="15px"></Skeleton></div>
                    </Skeleton.SkeletonThemeProvider>
                </div>
                <Skeleton.SkeletonThemeProvider>
                    <div className='w-25 h-100'><Skeleton width="3.8vw" height="3.8vw"/></div>
                </Skeleton.SkeletonThemeProvider>
            </div>
        </a>
    );
}

export default LeftBarItemSkeleton;