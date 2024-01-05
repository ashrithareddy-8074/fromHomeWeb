import { Route, Routes, Link } from 'react-router-dom';
import RequestsList from '../../components/requestsList/requestsList.component';
import MyRequestItem from '../../components/myRequestItem/myRequestItem.component';
import NewRequestItem from '../../components/newRequestItem/newRequestItem.component';
import './providerPage.styles.scss';

const ProviderPage = () => {
    return (
        <div>
            <div>
                <p>
                    <Link to='/'>Requests</Link>
                </p>
                <p>
                    <Link to='/provider/new'>Add New</Link>
                </p>
                <p>
                    <Link to='/provider/myItems'>My items</Link>
                </p>
            </div>
        <Routes>
            <Route index element={<RequestsList/>}/>
            <Route path='/new' element={<NewRequestItem/>}/>
            <Route path='/myItems' element={<MyRequestItem/>}/>
        </Routes>
        </div>
        
    )
}

export default ProviderPage;