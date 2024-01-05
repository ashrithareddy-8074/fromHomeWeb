import RequestItem from '../requestItem/requestItem.component';
import './requestsList.styles.scss';

const rawData = [
    {
        id:'1234',
        timings: "8am-10am",
        limit: 100,
        menu:{
            monday:   ['a', 'b'],
            tuesday:  ['c', 'd'],
            wednesday:['e', 'f']
        },
        cost:100,
        veg: true
    },
    {
        id:'5678',
        timings: "9am-10am",
        limit: 20,
        menu:{
            monday:   ['a', 'b'],
            tuesday:  ['c', 'd'],
            wednesday:['e', 'f']
        },
        cost:100,
        veg: false
    },
    {
        id:'5634',
        timings: "1pm-4pm",
        limit: 10,
        menu:{
            monday:   ['a', 'b'],
            tuesday:  ['c', 'd'],
            wednesday:['e', 'f']
        },
        cost:100,
        veg: false
    },
]

const RequestsList = () => {
    return (
        <div>
            <h1>requestsList</h1>
        {
            rawData.map(item => {
                return (
                    <RequestItem key={item.id} item={item}/>
                )
            })
        }
        </div>
    )
}

export default RequestsList;