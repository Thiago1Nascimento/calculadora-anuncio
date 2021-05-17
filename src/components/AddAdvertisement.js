import React from 'react';
import AdvertisementForm from './AdvertisementForm'

const AddAdvertisement = ({ history, ads, setAds }) => {
  const handleOnSubmit = (ad) => {
    setAds([ad, ...ads]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <AdvertisementForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddAdvertisement;