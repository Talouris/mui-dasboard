'use client'

import {useState} from "react";
import { usePathname } from 'next/navigation'
import './styles/_section4_module_style.scss';
import './styles/_open_card.scss';
import './styles/_module_action_href.scss';

export default function OpenCard({itemElem},context) {

    function handleClickList(item) {
        if (item.currentTarget.classList.contains('details-active')) {
            item.currentTarget.classList.remove('details-active');
        } else {
            item.currentTarget.classList.add('details-active')
        }
    }
    const pathname = usePathname()
    const containerValue = 1; 
    const [count,setCount] = useState(1);
    const price = itemElem.price;
    const [calcPrice, setCalcPrice] = useState(price);
    
    return (
        <main className="main">
            <div className="your__like-section">
                <div className="card__element-inner">
                    <div className="card__element">
                        <div className="card__element-img-holder">
                            <div className="card__element-img">
                                
                            </div>
                            <div className="card__element-sub-hrefs">
                                <div className="card__element-sub-hrefs-title">SHARE:</div>
                                <div className="card__element-sub-hrefs-list">
                                    <a href="#" className="card__element-sub-hrefs-href">
                                        <div className="card__element-sub-hrefs-item facebook"></div>    
                                    </a>
                                    <a href="#" className="card__element-sub-hrefs-href">
                                        <div className="card__element-sub-hrefs-item twiter"></div>
                                    </a>
                                    <a href="#" className="card__element-sub-hrefs-href">
                                        <div className="card__element-sub-hrefs-item digit"></div>
                                    </a>
                                    <a href="#" className="card__element-sub-hrefs-href">
                                        <div className="card__element-sub-hrefs-item inst"></div>
                                    </a>    
                                </div>
                            </div>
                            <div className="card__element-side-img-inner">
                                <div className="card__element-side-img-list">
                                    <div className="card__element-side-img-item-border">
                                        <div className="card__element-side-img-item"></div>    
                                    </div>
                                    <div className="card__element-side-img-item-border">
                                        <div className="card__element-side-img-item"></div>    
                                    </div>
                                    <div className="card__element-side-img-item-border">
                                        <div className="card__element-side-img-item"></div>    
                                    </div>
                                </div>    
                            </div>
                        </div>  
                        <div className="card__element-content">
                            <div className="card__element-content-href">
                                <div className="module__action-href">
                                    <div className="module__action-href-inner">
                                        <div className="module__action-href-block">
                                            <p className="module__action--href-info">Home {pathname}</p>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="card__element-content-marker-inner">
                                <div className="card__element-content-marker">
                                    <p className="marker-text">{itemElem.wisitContent.brand}</p>
                                </div>
                            </div>
                            <div className="card__element-content-title-inner">
                                <div className="card__element-content-title">{itemElem.wisitContent.title}</div>    
                            </div>
                            <div className="card__element-content-options-inner">
                                <div className="card__element-content-option-color">
                                    <div className="card__element-content-option-color-title card__element-content-default-p">SELECT COLOR</div>
                                    <div className="section4__filter-handle-color color-list-inner">
                                        <div className="section4__filter-handle-color-list">
                                            <div className="section4__filter-handle-border">
                                                <div className="section4__filter-handle-color-item"></div>  
                                            </div>
                                            <div className="section4__filter-handle-border">
                                                <div className="section4__filter-handle-color-item"></div>
                                            </div>
                                            <div className="section4__filter-handle-border">
                                                <div className="section4__filter-handle-color-item"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__element-content-option-size">
                                    <div className="card__element-content-size-title-holder">
                                        <div className="card__element-content-size-title-inner">
                                            <p className="card__element-content-default-p">PRICE TOTAL</p>  
                                        </div>
                                        <div className="card__element-content-size-guid-inner">
                                            <a href="#" className="guid-href">
                                                <p className="guid-p">Size guid</p>    
                                            </a>    
                                        </div>
                                    </div>
                                    <div className="section4">
                                        <div className="color__filter-size-inner size-list-inner">
                                            <div className="color__filter-size">
                                                <div className="color__filter-size-list">
                                                {
                                                    itemElem.wisitContent.size.map((size) => (<div className="color__filter-size-item" key={`size[${size}]`}>{size}</div>))
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card__element-content-option-price">
                                    <div className="card__element-content-option-quantity">
                                        <p className="card__element-content-default-p">QUANTITY</p>
                                        <div className="card__element-content-counter">
                                            <div className="card__element-content-button-decrement" onClick={()=> {count > 0 ? (setCount(count-1), setCalcPrice(price * (count-1))): count }}>-</div>
                                            <div className="card__element-content-counter-index">{count}</div>
                                            <div className="card__element-content-button-increment" onClick={()=> {setCount(count+1), setCalcPrice(price * (count+1))}}>+</div>    
                                        </div>
                                    </div>
                                    <div className="card__element-content-option-price-total">
                                        <p className="card__element-content-default-p">PRICE TOTAL</p>
                                        <p className="card__element-content-price">{calcPrice},00 EUR</p>
                                    </div>
                                </div>  
                                <div className="card__element-content-option-buttons">
                                    <button className="card__element-content-option-button-add">
                                        <p className="card__element-content-option-button-text">ADD TO BAG</p>
                                    </button>
                                    <button className="card__element-content-option-button-save">
                                        <p className="card__element-content-option-button-text">SAVE</p>
                                    </button>    
                                </div>  
                                <div className="card__element-content-option-sub-tags">
                                    <div className="card__element-content-option-sub-tag"><span className="tag-grey"></span>Free shipping</div>
                                    <div className="card__element-content-option-sub-tag"><span className="tag-grey">Product code:</span> RFKK1024</div>
                                    <div className="card__element-content-option-sub-tag"><span className="tag-grey">TAGS:</span> NEW arrivals, Top women</div>    
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="card__sub-details-inner">
                    <div className="card__sub-details">
                        <div className="card__sub-details-list">
                            <div className="card__sub-details-item details-active" onClick={handleClickList}>
                                <div className="card__sub-details-title-inner" id="detailsItems"> 
                                    <h6 className="card__sub-details-title">Details</h6> 
                                </div>
                                <div className="card__sub-details-info">
                                    <div className="card__sub-details-paragrah">
                                        <p className="card__sub-details-paragrah-title">ABOUT PRODUCT</p>
                                        <p className="card__sub-details-paragrah-sub-title">Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features a smocked body, adjustable straps, scoop neckline, ruffled hems, and a cropped fit.</p>
                                    </div>
                                    <div className="card__sub-details-paragrah">
                                        <p className="card__sub-details-paragrah-title">ADVANTAGES</p>
                                        <ul className="card__sub-details-paragrah-sub-title">
                                            <li className="card__sub-details-paragrah-list-item">Smocked body</li>
                                            <li className="card__sub-details-paragrah-list-item">Adjustable straps</li>
                                            <li className="card__sub-details-paragrah-list-item">Scoop neckline</li>
                                            <li className="card__sub-details-paragrah-list-item">Ruffled hems</li> 
                                            <li className="card__sub-details-paragrah-list-item">Cropped length</li> 
                                            <li className="card__sub-details-paragrah-list-item">Model is wearing a small</li> 
                                            <li className="card__sub-details-paragrah-list-item">100% rayon</li> 
                                            <li className="card__sub-details-paragrah-list-item">Machine washable</li> 
                                        </ul>    
                                    </div>
                                    <div className="card__sub-details-paragrah">
                                        <p className="card__sub-details-paragrah-title">ADVANTAGES</p>
                                        <ul className="card__sub-details-paragrah-sub-title">
                                            <li className="card__sub-details-paragrah-list-item">Smocked body</li> 
                                            <li className="card__sub-details-paragrah-list-item">Adjustable straps</li> 
                                            <li className="card__sub-details-paragrah-list-item">Scoop neckline</li> 
                                        </ul>
                                    </div>
                                    <div className="card__sub-details-paragrah">
                                        <p className="card__sub-details-paragrah-title">SHIPPING</p>
                                        <p className="card__sub-details-paragrah-sub-title">
                                            We offer Free Standard Shipping for all orders over $75 to the 50 states and the District of Columbia. The minimum order value must be $75 before taxes, shipping and handling. Shipping fees are non-refundable.
                                            <br/><br/>
                                            Please allow up to 2 business days (excluding weekends, holidays, and sale days) to process your order.
                                            <br/><br/>
                                            Processing Time + Shipping Time = Delivery Time
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card__sub-details-item" id="detailsItems" onClick={handleClickList}>
                                <div className="card__sub-details-title-inner"> 
                                    <h6 className="card__sub-details-title">Other information</h6> 
                                </div>  
                                <div className="card__sub-details-info">
                                    info2
                                </div>
                            </div>
                            <div className="card__sub-details-item" id="detailsItems" onClick={handleClickList}>
                                <div className="card__sub-details-title-inner"> 
                                    <h6 className="card__sub-details-title">Another tab</h6> 
                                </div>
                                <div className="card__sub-details-info">
                                    info3    
                                </div>    
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
