import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...OtherProps }) => (
                <CollectionPreview key={id} {...OtherProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
