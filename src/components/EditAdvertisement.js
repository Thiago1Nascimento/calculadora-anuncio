import React from 'react';
import AdvertisementForm from './AdvertisementForm';
import { useParams } from 'react-router-dom';

const EditAdvertisement = ({ history, ads, setAds }) => {
  const { id } = useParams();
  const adToEdit = ads.find((ad) => ad.id === id);

  const handleOnSubmit = (ad) => {
    const filteredAds = ads.filter((ad) => ad.id !== id);
    setAds([ad, ...filteredAds]);
    history.push('/');
  };

  return (
    <div>
      <AdvertisementForm ad={adToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditAdvertisement;