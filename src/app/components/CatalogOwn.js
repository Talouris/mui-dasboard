import './styles/_section4_module_style.scss';
import { dataBase } from "../api/products/Data";
import Card from "../components/Card";

export default function CatalogBasisFilter() {

    return (
        <div className="section4">
              <div className="section4__inner">
                <div className="section4__side-catalog">
                  <div className="section__catalog-list">
                { 
                 dataBase.map(item =>
                    Card(item)
                 )
                }
                      </div>
                  </div>
              </div>
          </div>
    )
}