import { useState } from 'react';
import Collection from '../components/preview-collection';
import SHOP_DATA from '../assets/shop.data';


const Shop = () => {
    // useCollections
    const [collections] = useState(() => SHOP_DATA)

    return (
        <div className='shop-page'>
            {collections.map(({ id, ...OtherProps }) => (
                <Collection key={id} {...OtherProps} />
            ))}
        </div>
    )
}


export default Shop
