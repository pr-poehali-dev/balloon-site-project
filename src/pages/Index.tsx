import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useCart } from "@/hooks/useCart";
import Cart from "@/components/Cart";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Index = () => {
  const cart = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const heroAnimation = useScrollAnimation();
  const catalogAnimation = useScrollAnimation();
  const deliveryAnimation = useScrollAnimation();
  const contactsAnimation = useScrollAnimation();
  const { elementRef: productsRef, visibleItems: visibleProducts } = useStaggeredAnimation(3, 200);

  const balloonProducts = [
    {
      id: 1,
      name: "Праздничный набор",
      price: "1,200 ₽",
      priceValue: 1200,
      image: "/img/9ff53636-e00d-4942-904e-87c1a854e866.jpg",
      description: "Яркий набор разноцветных шариков для любого праздника"
    },
    {
      id: 2,
      name: "Сердечки романтик",
      price: "890 ₽",
      priceValue: 890,
      image: "/img/99296111-c9f8-4cb6-b19e-dc8aa9980288.jpg",
      description: "Нежные шарики-сердечки для особенных моментов"
    },
    {
      id: 3,
      name: "Цифры золотые",
      price: "650 ₽",
      priceValue: 650,
      image: "/img/a3f5aea6-1167-4c35-aa76-ae4ae5f1b6e7.jpg",
      description: "Золотые шарики-цифры для дня рождения"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-balloon-yellow/20 via-balloon-blue/20 to-balloon-purple/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/57f43d34-1b18-4274-a8cb-38a973ad4539.jpg" 
                alt="COLOR Logo"
                className="h-12 w-auto object-contain"
              />
              <h1 className="text-2xl font-fredoka text-balloon-red">COLOR</h1>
            </div>
            <div className="flex items-center gap-6">
              <a href="#home" className="hover:text-balloon-red transition-colors">Главная</a>
              <a href="#catalog" className="hover:text-balloon-blue transition-colors">Каталог</a>
              <a href="#delivery" className="hover:text-balloon-green transition-colors">Доставка</a>
              <a href="#contacts" className="hover:text-balloon-purple transition-colors">Контакты</a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative border-balloon-purple/30 text-balloon-purple hover:bg-balloon-purple/10"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
                {cart.totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-balloon-red text-white text-xs px-1.5 py-0.5 min-w-5 h-5 flex items-center justify-center">
                    {cart.totalItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center" ref={heroAnimation.elementRef}>
        <div className="container mx-auto px-4">
          <h1 className={`text-6xl font-fredoka text-balloon-red mb-6 transition-all duration-1000 ${
            heroAnimation.isVisible ? 'animate-fade-in-down animate-bounce-gentle' : 'opacity-0 translate-y-10'
          }`}>
            Праздник начинается с нас! 🎉
          </h1>
          <p className={`text-xl text-gray-700 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            Яркие надувные шарики для любого торжества. Создаем настроение и дарим радость уже 10 лет!
          </p>
          <div className={`flex justify-center gap-4 transition-all duration-1000 delay-500 ${
            heroAnimation.isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}>
            <Button size="lg" className="bg-balloon-red hover:bg-balloon-red/90 text-white font-semibold px-8 hover:scale-105 transition-transform">
              Выбрать шарики
            </Button>
            <Button variant="outline" size="lg" className="border-balloon-blue text-balloon-blue hover:bg-balloon-blue/10 hover:scale-105 transition-transform">
              Узнать цены
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-white/50" ref={catalogAnimation.elementRef}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-fredoka text-center text-balloon-blue mb-12 transition-all duration-1000 ${
            catalogAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            Популярные наборы 🎈
          </h2>
          <div className="grid md:grid-cols-3 gap-8" ref={productsRef}>
            {balloonProducts.map((product, index) => (
              <Card key={product.id} className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 border-balloon-mint/30 ${
                visibleProducts.includes(index) ? 'animate-fade-in-up animate-float' : 'opacity-0 translate-y-10'
              }`}>
                <div className="h-48 bg-gradient-to-br from-balloon-yellow/20 to-balloon-blue/20 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-fredoka text-balloon-red">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-balloon-green">{product.price}</span>
                    <Button 
                      onClick={() => cart.addItem(product)}
                      className="bg-balloon-purple hover:bg-balloon-purple/90 text-white"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-gradient-to-r from-balloon-mint/20 to-balloon-green/20" ref={deliveryAnimation.elementRef}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-fredoka text-center text-balloon-green mb-12 transition-all duration-1000 ${
            deliveryAnimation.isVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-10'
          }`}>
            Быстрая доставка 🚚
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center transition-all duration-1000 delay-200 ${
              deliveryAnimation.isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="w-20 h-20 bg-balloon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform hover:animate-bounce-gentle">
                <Icon name="Clock" size={32} className="text-balloon-blue" />
              </div>
              <h3 className="text-xl font-fredoka text-balloon-blue mb-2">За 2 часа</h3>
              <p className="text-gray-600">Экспресс-доставка по городу в течение 2 часов</p>
            </div>
            <div className={`text-center transition-all duration-1000 delay-400 ${
              deliveryAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
            }`}>
              <div className="w-20 h-20 bg-balloon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform hover:animate-bounce-gentle">
                <Icon name="MapPin" size={32} className="text-balloon-purple" />
              </div>
              <h3 className="text-xl font-fredoka text-balloon-purple mb-2">Везде</h3>
              <p className="text-gray-600">Доставляем в любую точку города и области</p>
            </div>
            <div className={`text-center transition-all duration-1000 delay-600 ${
              deliveryAnimation.isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
            }`}>
              <div className="w-20 h-20 bg-balloon-red/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform hover:animate-bounce-gentle">
                <Icon name="Shield" size={32} className="text-balloon-red" />
              </div>
              <h3 className="text-xl font-fredoka text-balloon-red mb-2">Гарантия</h3>
              <p className="text-gray-600">100% сохранность шариков при доставке</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white/50" ref={contactsAnimation.elementRef}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-fredoka text-center text-balloon-purple mb-12 transition-all duration-1000 ${
            contactsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            Свяжитесь с нами 📞
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 delay-300 ${
              contactsAnimation.isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-2xl font-fredoka text-balloon-blue mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-balloon-red" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-balloon-blue" />
                  <span className="text-lg">info@balunmag.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-balloon-green" />
                  <span className="text-lg">ул. Праздничная, 123, Москва</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-balloon-purple" />
                  <span className="text-lg">Работаем 24/7</span>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-500 ${
              contactsAnimation.isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-2xl font-fredoka text-balloon-green mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" className="border-balloon-mint/50 focus:border-balloon-blue" />
                <Input type="email" placeholder="Email" className="border-balloon-mint/50 focus:border-balloon-blue" />
                <Input placeholder="Телефон" className="border-balloon-mint/50 focus:border-balloon-blue" />
                <Textarea placeholder="Ваше сообщение" className="border-balloon-mint/50 focus:border-balloon-blue min-h-24" />
                <Button className="w-full bg-balloon-red hover:bg-balloon-red/90 text-white font-semibold">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-fredoka text-balloon-yellow mb-4">🎈 БалунМаг</h3>
          <p className="text-gray-300 mb-4">Делаем каждый день праздничным!</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-balloon-blue hover:text-balloon-blue/80 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-balloon-red hover:text-balloon-red/80 transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="text-balloon-green hover:text-balloon-green/80 transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">© 2024 БалунМаг. Все права защищены.</p>
        </div>
      </footer>

      <Cart cart={cart} isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </div>
  );
};

export default Index;