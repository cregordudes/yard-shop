import React from "react";
import './category.component.scss';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
   const location = useLocation();
   const category = location.pathname.slice(6);

   return(
   <div className="category">
      <h2>{category.toUpperCase()} PAGE</h2>
      <CollectionsOverview/>
   </div>
   )
};

const mapStateToProps = (state) => ({
   colletion: selectCollection(state)
})


export default connect(mapStateToProps)(CollectionPage);