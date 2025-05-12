import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Greeting from './Greeting';
import CurrentDateTime from './CurrentDateTime';
import Counter from './Counter';
import TextInput from './TextInput';
import DataFetcher from './DataFetcher';
import UserList from './UserList';
import { MyProvider } from './MyContext';
import DisplayValue from './DisplayValue';
import UpdateValue from './UpdateValue';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import JqueryInReact from './JqueryInReact';
import EventHandlers from './EventHandlers';
import Animations from './Animations';
import AjaxExample from './AjaxExample';
import LodashExample from './LodashExample';
import LodashObjectsCollections from './LodashObjectsCollections';
import LodashUtilities from './LodashUtilities';
import D3Example from './D3Example';
import LineChart from './LineChart';
import ScalesAndAxes from './ScalesAndAxes';
import InteractiveChart from './InteractiveChart';
import ComplexVisualizations from './ComplexVisualizations';
import BigDataVisualization from './BigDataVisualization';
import FetchDataWithAxios from './FetchDataWithAxios';
import UpdateDataWithAxios from './UpdateDataWithAxios';
import AxiosWithInterceptors from './AxiosWithInterceptors';
import LodashInReact from './LodashInReact';
import DataVisualization from './DataVisualization';
import LineChart1 from './LineChart1';
import FetchDataAndVisualize from './FetchDataAndVisualize';
import Dashboard from './Dashboard'; 
import ExtendedDashboard from './ExtendedDashboard';
import DashboardWithMemo from './DashboardWithMemo';
import SearchInputWithDebounce from './SearchInputWithDebounce';
import ItemListWithMemo from './ItemListWithMemo';
import './App.css';

function App() {
  const sampleData = [
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 }
  ];

  return (
    <Router>
      <MyProvider>
      <div className="App">
        <nav>
        <ul>
          <li><Link to="/">Главная - Home.js</Link></li>
          <li><Link to="/about">О нас - About.js</Link></li>
          <li><Link to="/profile">Профиль - Profile.js</Link></li>
          <li><Link to="/fetch-data">Получить данные с Axios - FetchDataWithAxios.js</Link></li>
          <li><Link to="/update-data">Обновить данные с Axios - UpdateDataWithAxios.js</Link></li>
          <li><Link to="/axios-with-interceptors">Axios с интерцепторами - AxiosWithInterceptors.js</Link></li>
          <li><Link to="/lodash-in-react">Использование Lodash в React - LodashInReact.js</Link></li>
          <li><Link to="/data-visualization">График с использованием D3.js - DataVisualization.js</Link></li>
          <li><Link to="/line-chart">Линейный график с использованием D3.js - LineChart1.js</Link></li>
          <li><Link to="/dashboard">Дашборд с D3.js - Dashboard.js</Link></li>
          <li><Link to="/extended-dashboard">Расширенный дашборд с D3.js - ExtendedDashboard.js</Link></li>
          <li><Link to="/fetch-data-and-visualize">Получить и визуализировать данные - FetchDataAndVisualize.js</Link></li>
          <li><Link to="/dashboard-with-memo">Дашборд с использованием useMemo - DashboardWithMemo.js</Link></li>
          <li><Link to="/search-input-debounce">Поиск с дебаунсом - SearchInputWithDebounce.js</Link></li>
          <li><Link to="/item-list-with-memo">Список с использованием React.memo - ItemListWithMemo.js</Link></li>
        </ul>
        </nav>
        <header className="App-header">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/fetch-data" component={FetchDataWithAxios} />
          <Route path="/update-data" component={UpdateDataWithAxios} />
          <Route path="/axios-with-interceptors" component={AxiosWithInterceptors} />
          <Route path="/lodash-in-react" component={LodashInReact} />
          <Route path="/data-visualization" component={DataVisualization} />
          <Route path="/line-chart" component={LineChart1} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/extended-dashboard" component={ExtendedDashboard} />
          <Route path="/fetch-data-and-visualize" component={FetchDataAndVisualize} />
          <Route path="/dashboard-with-memo" render={() => <DashboardWithMemo data={sampleData} />} />
          <Route path="/search-input-debounce" component={SearchInputWithDebounce} />
          <Route path="/item-list-with-memo" render={() => <ItemListWithMemo items={['Item 1', 'Item 2', 'Item 3']} />} />
        </Switch>
          <ComplexVisualizations />  
          <BigDataVisualization />  
          <InteractiveChart />
          <ScalesAndAxes />
          <LineChart />
          <D3Example />
          <LodashUtilities />
          <LodashObjectsCollections />
          <LodashExample />
          <AjaxExample />
          <Animations />
          <EventHandlers />
          <JqueryInReact /> 

          <Greeting name="Мир" />
          <CurrentDateTime />
          <Counter />
          <TextInput />
          <DataFetcher />
          <UserList />
          <DisplayValue />
          <UpdateValue />
        </header>
      </div>
      </MyProvider>
    </Router>
  );
}
export default App;