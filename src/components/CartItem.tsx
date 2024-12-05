import { Plus, Minus, X } from 'lucide-react';
import { formatGhanaCedis } from '../utils/currency';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
  };
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

export function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
      <img loading="lazy" src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-yellow-500 font-bold">{formatGhanaCedis(item.price)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-1 rounded-full hover:bg-gray-200"
            aria-label={`Decrease quantity of ${item.name}`}
            title={`Decrease quantity of ${item.name}`}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-full hover:bg-gray-200"
            aria-label={`Decrease quantity of ${item.name}`}
            title={`Decrease quantity of ${item.name}`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <button 
      onClick={() => removeItem(item.id)} 
      className="text-red-500 hover:text-red-700"
      aria-label={`Remove ${item.name} from cart`}
      title={`Remove ${item.name} from cart`}
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
