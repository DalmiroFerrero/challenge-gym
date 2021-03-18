import React from 'react';

const Offer = () => {
  return (
    <div id="offer" className="background-offer-imgage">
      <div className="background-offer-color">
        <div className="info-offer">
          <h1>
            a big <span>offer</span> for <br /> this summer
          </h1>
          <p>
            Aenean laoreet arcu lorem, pellentesque arcu justo.
          </p>
          <input type="button" value="Join now" className="btn" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
