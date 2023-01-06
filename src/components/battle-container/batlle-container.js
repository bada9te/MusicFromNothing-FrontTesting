const BattleContainer = (props) => {
    const {post1, post2, endsIn} = props;
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2">
                {post1}
                {post2}
            </div>
        </>
    );
}

export default BattleContainer;