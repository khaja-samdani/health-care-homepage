import React from "react";
import hospitals from './assets/hospitals.jpg'
import bloodtest from './assets/bloodtest.jpg'

const Section = () => {
    return (
        <section>
            <div>
                <div className="banner-img">
                    <img src={hospitals} />
                </div>
                <div className="fb-btn">
                    <div className="first-angle"><i class="fa-solid fa-angle-left"></i></div>
                    <div><i class="fa-solid fa-angle-right"></i></div>
                </div>
            </div>
            <div className="popular-tests">
                <div><h2>Popular Tests</h2></div>
                <div className="popular-tests1">
                <div className="pop-tests-items">
                    <div className="pop-tests-img">
                        <img src={bloodtest} />
                    </div>
                    <div className="pop-tests-para">
                        <h3>Diabetes Test</h3>
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
                        <h3>    Lipid Profile</h3>
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
                        <h3>Complete Blood Count</h3>
                        <p>Lorem ipsum sit constetet<br /> duplicate test...</p>
                    </div>
                    <div className="test-item-footer">
                        <div className="test-prices">
                            <h2>$240.00</h2>
                            <span>$300</span><span className="test-off">20% off</span>
                        </div>
                        <div>
                            <button className="bg-btn"><i class="fa-solid fa-check"></i>Added</button>
                        </div>
                    </div>
                </div>
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
            </div>
            </div>
        </section>


    )
}

export default Section