import React from "react";

import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../preview-collection/preview-collection.component";

import { selectCollections } from "../../redux/shop/shop.selectors";
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
   <div className="collections-overview">
      {collections.map(({id, ...otherProps}) =>(
         <PreviewCollection key={id} {...otherProps}/>
      ))}
   </div>
);

const mapStateToProps = createStructuredSelector({
   collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);
