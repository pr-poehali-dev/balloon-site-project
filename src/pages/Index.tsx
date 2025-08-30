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


  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'romantic', name: 'Романтика' },
    { id: 'birthday', name: 'День рождения' },
    { id: 'decorations', name: 'Декор' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const balloonProducts = [
    {
      id: 1,
      name: "Праздничный набор",
      price: "1,200 ₽",
      priceValue: 1200,
      image: "/img/9ff53636-e00d-4942-904e-87c1a854e866.jpg",
      description: "Яркий набор разноцветных шариков для любого праздника",
      category: "birthday"
    },
    {
      id: 2,
      name: "Сердечки романтик",
      price: "890 ₽",
      priceValue: 890,
      image: "/img/99296111-c9f8-4cb6-b19e-dc8aa9980288.jpg",
      description: "Нежные шарики-сердечки для особенных моментов",
      category: "romantic"
    },
    {
      id: 3,
      name: "Фонтан из красных сердец",
      price: "250 ₽",
      priceValue: 250,
      image: "https://cdn.poehali.dev/files/8b359041-2954-4598-b174-7efbecb60650.jpg",
      description: "10 фольгированных сердец, грузик, транспортировочный пакет. Размер 800мм на 1500мм. Идеально для влюбленных!",
      category: "romantic"
    },
    {
      id: 4,
      name: "Цифры золотые",
      price: "650 ₽",
      priceValue: 650,
      image: "/img/a3f5aea6-1167-4c35-aa76-ae4ae5f1b6e7.jpg",
      description: "Золотые шарики-цифры для дня рождения",
      category: "birthday"
    },
    {
      id: 5,
      name: "Радужная арка",
      price: "2,500 ₽",
      priceValue: 2500,
      image: "/img/fadda1e4-cada-494f-a509-cfc9dc346dfd.jpg",
      description: "Впечатляющая радужная арка из воздушных шаров",
      category: "decorations"
    },
    {
      id: 5,
      name: "Звёзды серебро",
      price: "750 ₽",
      priceValue: 750,
      image: "/img/dea182e6-2fb1-432b-b490-e5783f76a0fc.jpg",
      description: "Элегантные серебряные шары в форме звёзд"
    },
    {
      id: 6,
      name: "Букет поздравлений",
      price: "1,450 ₽",
      priceValue: 1450,
      image: "/img/6456b344-433d-40b6-b671-8c13440140e9.jpg",
      description: "Праздничный букет с надписями поздравлений"
    },
    {
      id: 7,
      name: "Детский микс",
      price: "980 ₽",
      priceValue: 980,
      image: "/img/3f46852e-51a3-4dd3-afb4-c43735f68598.jpg",
      description: "Весёлые шарики с мультяшными героями"
    },
    {
      id: 8,
      name: "Свадебный белоснежный",
      price: "3,200 ₽",
      priceValue: 3200,
      image: "/img/9cb12cff-e9cf-4d15-aad5-91f048365c31.jpg",
      description: "Изысканный набор белых и кремовых шаров для свадьбы"
    },
    {
      id: 9,
      name: "Хэллоуин мистика",
      price: "1,100 ₽",
      priceValue: 1100,
      image: "/img/ed1ae6a1-44a6-4fde-bb7d-2c8bba24dad2.jpg",
      description: "Тёмные шары с мистическими узорами"
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
          <h2 className={`text-4xl font-fredoka text-center text-balloon-blue mb-8 transition-all duration-1000 ${
            catalogAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            Популярные наборы 🎈
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-balloon-purple text-white hover:bg-balloon-purple/90 scale-105 shadow-lg' 
                    : 'border-balloon-purple text-balloon-purple hover:bg-balloon-purple hover:text-white hover:scale-105'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {balloonProducts
              .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
              .map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-balloon-mint/30">
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
                      className="bg-balloon-purple hover:bg-balloon-purple/90 active:bg-balloon-purple/80 text-white transition-all duration-200 hover:scale-105 active:scale-95"
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
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-balloon-red/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-balloon-red" />
                  </div>
                  <div>
                    <p className="font-medium text-balloon-red">Телефон</p>
                    <p className="text-lg text-gray-800">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-balloon-blue/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-balloon-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-balloon-blue">Email</p>
                    <p className="text-lg text-gray-800">info@balunmag.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-balloon-purple/20 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-balloon-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-balloon-purple">Режим работы</p>
                    <p className="text-lg text-gray-800">Работаем 24/7</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-fredoka text-balloon-blue mb-4">Мы в соцсетях</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Icon name="Facebook" size={20} className="text-blue-600" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Icon name="Instagram" size={20} className="text-pink-600" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Icon name="MessageCircle" size={20} className="text-green-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-500 ${
              contactsAnimation.isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
            }`}>
              <Card className="p-6 bg-white/80 border-2 border-balloon-mint/30 shadow-lg">
                <h3 className="text-2xl font-fredoka text-balloon-green mb-6">Напишите нам 💌</h3>
                <form className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Ваше имя</label>
                    <Input 
                      placeholder="Введите ваше имя" 
                      className="border-balloon-mint/50 focus:border-balloon-blue focus:ring-2 focus:ring-balloon-blue/20" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input 
                      type="email" 
                      placeholder="example@mail.ru" 
                      className="border-balloon-mint/50 focus:border-balloon-blue focus:ring-2 focus:ring-balloon-blue/20" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67" 
                      className="border-balloon-mint/50 focus:border-balloon-blue focus:ring-2 focus:ring-balloon-blue/20" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Ваше сообщение</label>
                    <Textarea 
                      placeholder="Расскажите, что вас интересует. Мы поможем подобрать идеальные шарики для вашего праздника!" 
                      className="border-balloon-mint/50 focus:border-balloon-blue focus:ring-2 focus:ring-balloon-blue/20 min-h-[120px] resize-none" 
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-balloon-red to-balloon-purple hover:from-balloon-red/90 hover:to-balloon-purple/90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
                
                {/* Quick Contact */}
                <div className="mt-6 pt-6 border-t border-balloon-mint/30">
                  <p className="text-sm text-gray-600 text-center mb-3">Или свяжитесь с нами быстро:</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="outline" size="sm" className="border-balloon-blue text-balloon-blue hover:bg-balloon-blue hover:text-white">
                      <Icon name="Phone" size={14} className="mr-1" />
                      Позвонить
                    </Button>
                    <Button variant="outline" size="sm" className="border-balloon-green text-balloon-green hover:bg-balloon-green hover:text-white">
                      <Icon name="MessageCircle" size={14} className="mr-1" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/57f43d34-1b18-4274-a8cb-38a973ad4539.jpg" 
              alt="COLOR Logo"
              className="h-10 w-auto object-contain"
            />
            <h3 className="text-2xl font-fredoka text-balloon-yellow">COLOR</h3>
          </div>
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
          <p className="text-gray-500 text-sm mt-4">© 2024 COLOR. Все права защищены.</p>
        </div>
      </footer>

      <Cart cart={cart} isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </div>
  );
};

export default Index;