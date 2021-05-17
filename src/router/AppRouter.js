import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddAdvertisement from '../components/AddAdvertisement';
import AdvertisementList from '../components/AdvertisementList';
import EditAdvertisement from '../components/EditAdvertisement';
import ReportAdvertisement from '../components/ReportAdvertisement'
import useLocalStorage from '../hooks/useLocalStorage';
import { Redirect } from 'react-router';

const AppRouter = () => {
  const [ads, setAds] = useLocalStorage('ads', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
          <Route
              render={(props) => (
                <AdvertisementList {...props} ads={ads} setAds={setAds} />
              )}
              path="/"
              exact={true}
            />
            <Route component={AdvertisementList} path="/" exact={true} />
            <Route
              render={(props) => (
                <AddAdvertisement {...props} ads={ads} setAds={setAds} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditAdvertisement {...props} ads={ads} setAds={setAds} />
              )}
              path="/edit/:id"
            />
            <Route
              render={(props) => (
                <ReportAdvertisement {...props} ads={ads} />
              )}
              path="/report/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;