import React from "react";
import Image from "next/image";

function ProductCard({ children, product, ...props }) {
    const { productName, productPrice, productDescription, imageUrl, uid } = {
        ...product,
    };

    return (
        <>
            <div className="bg-blue-700 p-3 rounded">
                <div>
                    <Image
                        className="rounded-t productImg"
                        src={imageUrl}
                        alt={productName}
                        width={300}
                        height={300}
                        quality={50}
                    />
                </div>
                <div className="text-center">
                    <p className="font-bold text-xl bg-white rounded-b py-1">
                        {productName}
                    </p>

                    <p className="product-description my-2 text-white">
                        {productDescription}
                    </p>
                    <p className="text-2xl font-bold my-3 text-orange-600">
                        ${productPrice}
                    </p>
                    <div>
                        <form action="/api/checkout" method="POST">
                            <input type="hidden" name="uid" value={uid} />
                            <button className="button-buy-now" type="submit">
                                Buy Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
