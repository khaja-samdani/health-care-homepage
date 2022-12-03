
import React from 'react'
import hospitals from './assets/hospitals.jpg'
import bloodtest from './assets/bloodtest.jpg'

const Section2 = () => {
    return (
        <section className='section2'>
            <div className="popular-tests3">
                <div className="popular-tests2-header"><h2>Top Booked Tests</h2><p>view all</p></div>
                <div className="popular-tests1">
                    <div className="pop-tests-items">
                        <div className="pop-tests-img">
                            <img src={bloodtest} />
                        </div>
                        <div className="pop-tests-para">
                            <h3>HbA1c</h3>
                            <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                        </div>
                        <div className="test-item-footer">
                            <div className="test-prices">
                                <h2>$350.00</h2>
                                <span>$700</span><span className="test-off">50% off</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="pop-tests-items">
                        <div className="pop-tests-img">
                            <img src={bloodtest} />
                        </div>
                        <div className="pop-tests-para">
                            <h3>Diabetes Screening</h3>
                            <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                        </div>
                        <div className="test-item-footer">
                            <div className="test-prices">
                                <h2>$350.00</h2>
                                <span>$700</span><span className="test-off">50% off</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="pop-tests-items">
                        <div className="pop-tests-img">
                            <img src={bloodtest} />
                        </div>
                        <div className="pop-tests-para">
                            <h3>Glucose, Fasting</h3>
                            <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                        </div>
                        <div className="test-item-footer">
                            <div className="test-prices">
                                <h2>$350.00</h2>
                                <span>$700</span><span className="test-off">50% off</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="pop-tests-items">
                        <div className="pop-tests-img">
                            <img src={bloodtest} />
                        </div>
                        <div className="pop-tests-para">
                            <h3>Lipid Profile</h3>
                            <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                        </div>
                        <div className="test-item-footer">
                            <div className="test-prices">
                                <h2>$350.00</h2>
                                <span>$700</span><span className="test-off">50% off</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2