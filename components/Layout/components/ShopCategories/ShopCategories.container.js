import React from 'react';
import ShopCategories from './ShopCategories';
import { useSelector } from 'react-redux';


function ShopCategoriesContainer(props) {
    const shopCategoriesArr = useSelector((state) => state.shopCategories)    
    return (
        <ShopCategories categories = { shopCategoriesArr } />
    );
}

export default ShopCategoriesContainer