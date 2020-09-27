import React from 'react';

const renderCategories = (categories) => {
    const categoriesComponentArr = [];
    
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i]
        const categoryComponent = (

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="shop-cat-box">
                    <img class="img-fluid" src={`images/${category.image}`} alt="" />
                    <a class="btn hvr-hover" href="#">{category.name}</a>
                </div>
            </div>
        )
        categoriesComponentArr.push(categoryComponent);
    }
    return categoriesComponentArr
}


function ShopCategories({ categories }) {
    return (
        <div class="categories-shop">
            <div class="container">
                <div class="row">
                    
                    {renderCategories(categories)}

                    {/* <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="images/t-shirts-img.jpg" alt="" />
                        <a class="btn hvr-hover" href="#">T-shirts</a>
                    </div>
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="images/shirt-img.jpg" alt="" />
                        <a class="btn hvr-hover" href="#">Shirt</a>
                    </div>
                </div> */}
                    {/* <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="images/wallet-img.jpg" alt="" />
                        <a class="btn hvr-hover" href="#">Wallet</a>
                    </div>
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="images/women-bag-img.jpg" alt="" />
                        <a class="btn hvr-hover" href="#">Bags</a>
                    </div>
                </div> */}
                    {/* <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="images/shoes-img.jpg" alt="" />
                        <a class="btn hvr-hover" href="#">Shoes</a>
                    </div>
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="images/women-shoes-img.jpg" alt="" />
                        <a class="btn hvr-hover" href="#">Women Shoes</a>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    );
}

export default ShopCategories;