import React from 'react';
import exhibitions from '../../data/exhibitions';
import Exhibition from './exhibition';

const Exhibitions = () => {
  return (
    <section className="bg-primary">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Exhibitions</h2>
                    <hr className="primary" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {
                    exhibitions.exhibitions().map((exhibition, index) => {
                        if (exhibition.active === true) {
                            return (
                                <Exhibition exhibition={exhibition} key={index} />
                            )
                        }
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Exhibitions;