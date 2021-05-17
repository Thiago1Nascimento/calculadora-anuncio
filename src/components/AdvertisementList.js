import React from 'react';
import _ from 'lodash';
import Advertisement from './Advertisement';

const AdvertisementList = ({ ads, setAds }) => {

  const handleRemoveAd = (id) => {
    setAds(ads.filter((ad) => ad.id !== id));
  };

  const handleAlert = (id) => {
    alert(id);
  };

  return (
    <React.Fragment>
      <div className="ad-list">
        {!_.isEmpty(ads) ? (
          ads.map((ad) => (
            <Advertisement key={ad.id} {...ad} handleRemoveAd={handleRemoveAd} handleAlert={handleAlert} />
          ))
        ) : (
          <p className="message">Sem anúncios disponíveis. Por favor adicione um.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default AdvertisementList;