import Head from "next/head";
import Link from "next/link";
import ProductCard from "../components/ProductCard/ProductCard";

import { loadStripe } from "@stripe/stripe-js";

export default function Home(props) {
    const products = props.products;

    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>JCFigures</title>
            </Head>
            <div className="bg-blue-700 text-white">
                <div className="container mx-auto flex justify-between py-3 items-center">
                    <h1 className="text-2xl font-bold">
                        <Link href="/">JCFigures</Link>
                    </h1>
                    <nav>
                        <ul className="flex gap-3">
                            <li>
                                <a
                                    href="#"
                                    className="hover:bg-orange-600 hover:text-black px-3 py-1 rounded transition"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:bg-orange-600 hover:text-black px-3 py-1 rounded transition"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:bg-orange-600 hover:text-black px-3 py-1 rounded transition"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="bg-gray-200">
                <div className="container mx-auto h-screen">
                    <h2 className="text-center text-6xl py-4 font-headingAlternate">
                        Statues & Figures
                    </h2>
                    <div className="flex justify-between">
                        {products.map((product) => (
                            <ProductCard key={product.uid} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 text-white bottom-0 py-5">
                <div className="container mx-auto">
                    <h1>&copy; For educational purposes only</h1>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://jcfigures-react-default-rtdb.firebaseio.com/products.json"
    );
    const productData = await res.json();
    const products = Object.values(productData);

    return {
        props: {
            products,
            fallback: false,
        },
        revalidate: 60,
    };
}
