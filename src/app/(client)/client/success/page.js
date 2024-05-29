"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useShoppingCart } from "use-shopping-cart";

const Success = () => {
    const { clearCart } = useShoppingCart();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div style={{
            height: '100vh',
            display: 'grid',
            placeItems: 'center',
            backgroundColor: '#f7f7f7'
        }}>
            <div style={{
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '6rem',
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    marginBottom: '1rem'
                }}>Thank You</h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: '#4a4a4a',
                    marginBottom: '2rem'
                }}>Order Placed Successfully</p>
                <Link href="/client/cartProducts">
                    <p style={{
                        backgroundColor: '#e53e3e',
                        color: '#ffffff',
                        padding: '1rem 3rem',
                        borderRadius: '0.25rem',
                        fontSize: '1.125rem',
                        transition: 'background-color 0.3s ease',
                        ':hover': {
                            backgroundColor: '#c53030',
                            cursor: 'pointer'
                        }
                    }}>Continue Shopping</p>
                </Link>
            </div>
        </div>
    )
}

export default Success