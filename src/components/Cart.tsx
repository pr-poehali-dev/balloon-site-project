import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { CartItem, UseCartReturn } from "@/hooks/useCart";

interface CartProps {
  cart: UseCartReturn;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const Cart = ({ cart, isOpen, onOpenChange }: CartProps) => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = cart;

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₽';
  };

  const handleCheckout = () => {
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время 🎈');
    clearCart();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-fredoka text-2xl text-balloon-purple flex items-center gap-2">
            <Icon name="ShoppingCart" size={24} />
            Корзина ({totalItems})
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto pr-2">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ShoppingCart" size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-500 mb-2">Корзина пуста</h3>
              <p className="text-gray-400">Добавьте шарики, чтобы создать праздничное настроение!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border border-balloon-mint/30 rounded-lg bg-white/50">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-balloon-yellow/20 to-balloon-blue/20">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-fredoka text-balloon-red">{item.name}</h4>
                    <p className="text-sm text-gray-600">За штуку: {item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0 border-balloon-blue/30 hover:bg-balloon-blue/10"
                    >
                      <Icon name="Minus" size={14} />
                    </Button>
                    
                    <Badge variant="secondary" className="px-3 py-1 bg-balloon-mint/20 text-balloon-green">
                      {item.quantity}
                    </Badge>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0 border-balloon-green/30 hover:bg-balloon-green/10"
                    >
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-balloon-green">
                      {formatPrice(item.priceValue * item.quantity)}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1"
                    >
                      <Icon name="Trash2" size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Итого:</span>
                <span className="text-2xl font-fredoka text-balloon-red">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                >
                  <Icon name="Trash2" size={16} className="mr-2" />
                  Очистить
                </Button>
                
                <Button
                  onClick={handleCheckout}
                  className="flex-1 bg-balloon-green hover:bg-balloon-green/90 text-white font-semibold"
                >
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Оформить заказ
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Cart;