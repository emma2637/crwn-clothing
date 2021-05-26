import React from 'react';
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SelectCollectionForPreview} from '../../redux/shop/shop.selector'

import CollectionPreview from '../collection-preview/preview-collection.component';
import './collections-overview.styles.scss';

const CollectionOverview = ({collections}) =>(
    <div className='collections-overview'>
          {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}

    </div>
)
const mapStateToProps = createStructuredSelector({
    collections:SelectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview)