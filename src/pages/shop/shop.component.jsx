import { Component } from 'react'
import Collection from '../../components/collection/collection.component';
import SHOP_DATA from './shop.data';

export class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        console.log(this.state)
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...OtherProps }) => (
                    <Collection key={id} {...OtherProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage
