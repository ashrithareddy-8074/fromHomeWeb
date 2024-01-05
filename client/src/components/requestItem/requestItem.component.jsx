import './requestItem.styles.scss';

const RequestItem = ({item}) => {
    const {timings, limit, cost} = item;
    <h1>request item</h1>
    return (
        <div>
            <p>{timings}</p>
            <p>{limit}</p>
            <p>{cost}</p>
            <hr />
        </div>
    )
}

export default RequestItem;