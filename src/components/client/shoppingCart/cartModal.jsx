import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import { loadStripe } from '@stripe/stripe-js';

export default function CartModal() {
    const { shouldDisplayCart, cartDetails, cartCount, removeItem, clearCart, totalPrice } = useShoppingCart();
    const [status, setStatus] = useState("idle");

    async function handleClickStripe(event) {
        event.preventDefault();
        if (cartCount > 0) {
            setStatus("loading");
            try {
                const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
                if (!stripe) throw new Error('Stripe failed to initialize.');
                const checkoutResponse = await fetch('/api/stripe/checkoutSessions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cartDetails }),
                });
                const { sessionId } = await checkoutResponse.json();
                const stripeError = await stripe.redirectToCheckout({ sessionId });

                if (stripeError) {
                    console.error(stripeError);
                }
            } catch (error) {
                console.error(error);
                setStatus("redirect-error");
            }
        } else {
            setStatus("no-items");
        }
    }

    return (
        <div className={`fixed bg-white flex flex-col right-3 md:right-9 top-14 w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-opacity duration-500 ${shouldDisplayCart ? "opacity-100 z-10" : "opacity-0 pointer-events-none"}`}>
            {cartCount && cartCount > 0 ? (
                <>
                    <div
                        className="cursor-pointer mb-2 ml-auto"
                        onClick={() => clearCart()}
                    >
                        <ClearIcon />
                    </div>
                    {Object.values(cartDetails).map((item) => (
                        <div className="flex items-center gap-4 mb-3" key={item.id}>
                            <img
                                src={item.image}
                                width={60}
                                height={60}
                                alt={item.title}
                                className="rounded"
                            />
                            <div className="text-sm">
                                {item.title} <span className="text-xs">({item.quantity})</span>
                            </div>
                            <div className="ml-auto text-sm">{item.price} TND</div>
                            <button
                                className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
                                onClick={() => removeItem(item.id)}
                            >
                                <DeleteIcon color="secondary" />
                            </button>
                        </div>
                    ))}
                    <div className="mt-3 flex flex-col">
                        <span className="font-bold">Total: {totalPrice} TND</span>
                        <button
                            className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 rounded-md mt-3"
                            onClick={handleClickStripe}
                            disabled={status === "loading"}
                        >
                            {status !== "loading" ? "Proceed to checkout with Stripe" : "Loading..."}
                        </button>
                    </div>
                </>
            ) : (
                <div className="p-5">You have no items in your cart</div>
            )}
        </div>
    );
}
