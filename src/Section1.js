import React from "react";
import hospitals from './assets/hospitals.jpg'
import bloodtest from './assets/bloodtest.jpg'

const Section1 = () => {
    return (
        <section className="section1">
            <div className="popular-tests2">
                <div className="popular-tests2-header"><h2>Popular Health Packages</h2>
                    <p>view all</p>
                </div>
                <div className="popular-tests1">
                    <div className="pop-tests-items pop-test-items-sec1">
                        <div className="pop-tests-img">
                            <img src={bloodtest} />
                        </div>
                        <div className="pop-tests-para">
                            <h3>Complete Health Package</h3>
                            <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                        </div>
                        <div className="test-item-footer">
                            <div className="test-prices">
                                <h2>$2500</h2>
                                <span>$5000</span><span className="test-off">50% off</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="pop-tests-items pop-test-items-sec1">
                        <div className="pop-tests-img">
                            <img src={bloodtest} />
                        </div>
                        <div className="pop-tests-para">
                            <h3>Women Health Package</h3>
                            <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                        </div>
                        <div className="test-item-footer">
                            <div className="test-prices">
                                <h2>$2500</h2>
                                <span>$5000</span><span className="test-off">50% off</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="pop-tests-items pop-test-items-sec1">
                        <div className="pop-tests-img">
                            <img src={bloodtest} />
                        </div>
                        <div className="pop-tests-para">
                            <h3>Family Health Package</h3>
                            <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                        </div>
                        <div className="test-item-footer">
                            <div className="test-prices">
                                <h2>$2500</h2>
                                <span>$5000</span><span className="test-off">50% off</span>
                            </div>
                            <div>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="pop-tests-items pop-test-items-sec1">
                        <div className="pop-tests-img">
                            <img src={bloodtest} />
                        </div>
                        <div className="pop-tests-para">
                            <h3>Advanced Health Package</h3>
                            <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                        </div>
                        <div className="test-item-footer">
                            <div className="test-prices">
                                <h2>$2500</h2>
                                <span>$5000</span><span className="test-off">50% off</span>
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

export default Section1