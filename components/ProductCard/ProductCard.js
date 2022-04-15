import React from "react";
import Image from "next/image";

function ProductCard({ children, product, ...props }) {
    const { productName, productPrice, productDescription, imageUrl, uid } = {
        ...product,
    };

    return (
        <>
            <div className="bg-orange-600 p-2 rounded">
                <div>
                    <Image
                        className="rounded"
                        src={imageUrl}
                        alt={productName}
                        width={300}
                        height={300}
                        quality={50}
                    />
                </div>
                <div className="text-center">
                    <p className="font-bold text-xl bg-indigo-700 rounded text-orange-400 py-1">
                        {productName}
                    </p>

                    <p className="product-description my-2">
                        {productDescription}
                    </p>
                    <p className="text-2xl font-bold my-3 text-indigo-700">
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
