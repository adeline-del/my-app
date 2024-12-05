import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem } from './CartItem';
import { formatGhanaCedis } from '../utils/currency';


export function Cart() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open shopping cart"
        className="fixed top-4 right-4 z-50 bg-yellow-500 p-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
      >
        <ShoppingCart className="h-6 w-6" />
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {state.items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button onClick={() => setIsOpen(false)} aria-label="Close shopping cart">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 h-full overflow-auto">
              {state.items.length === 0 ? (
                <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
              ) : (
                <>
                  {state.items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      updateQuantity={updateQuantity}
                      removeItem={removeItem}
                    />
                  ))}
                  <div className="mt-8 border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total:</span>
                      <span>{formatGhanaCedis(state.total)}</span>
                    </div>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        window.location.href = '#checkout';
                      }}
                      className="w-full mt-4 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
