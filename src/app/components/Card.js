import Link from "next/link";

export default function Card(item) {
    
    return (
        <Link href={'/' + Number(item.id)} legacyBehavior key={item.id}>
            <div className="section__catalog-item" key={item.id}>
                <a href="#" className="section__catalog-item-href">
                    <div className="section__catalog-img"></div>
                    <div className="section__catalog-info">
                        <div className="section__catalog-gander-inner">
                            <p className="section__catalog-gander">{item.preConten.male} : {item.id}</p>
                        </div>
                        <div className="section__catalog-sup-title-inner">
                            <p className="section__catalog-sup-title">{item.preConten.presentTitle}</p>
                        </div>
                        <div className="section__catalog-price-inner">
                            <p className="section__catalog-price">{item.price} EUR</p>
                        </div>
                    </div>
                </a>
            </div>
        </Link> 
    );
};