import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const formats = [
    { name: 'А4', size: '210×297 мм', price: '150₽', icon: 'FileText' },
    { name: '10×15', size: '10×15 см', price: '25₽', icon: 'Image' },
    { name: 'Квадрат', size: '20×20 см', price: '80₽', icon: 'Square' },
    { name: 'Панорама', size: '30×10 см', price: '120₽', icon: 'Maximize' }
  ];

  const services = [
    { title: 'Быстрая печать', desc: 'Готово за 30 минут', icon: 'Zap' },
    { title: 'Высокое качество', desc: 'Профессиональная бумага', icon: 'Award' },
    { title: 'Доставка', desc: 'По всему городу', icon: 'Truck' },
    { title: 'Онлайн заказ', desc: 'Удобный интерфейс', icon: 'Smartphone' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Camera" size={32} className="text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-800">ФотоПринт</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Главная</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-500 transition-colors">Галерея</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#prices" className="text-gray-700 hover:text-orange-500 transition-colors">Цены</a>
              <a href="#delivery" className="text-gray-700 hover:text-orange-500 transition-colors">Доставка</a>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Заказать</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Печать фотографий
              <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent block">
                онлайн
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Высококачественная печать фотографий в различных форматах. 
              Быстро, удобно, профессионально.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                <Icon name="Upload" size={20} className="mr-2" />
                Загрузить фото
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formats Gallery */}
      <section id="gallery" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Форматы печати</h3>
            <p className="text-gray-600 text-lg">Выберите подходящий размер для ваших фотографий</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((format, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200 group">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={format.icon} size={28} className="text-orange-500" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{format.name}</CardTitle>
                  <CardDescription className="text-gray-600">{format.size}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-4">{format.price}</div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h3>
            <p className="text-gray-600 text-lg">Профессиональная печать с гарантией качества</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-16 px-4 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Цены</h3>
            <p className="text-gray-600 text-lg">Доступные цены на качественную печать</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">Базовый</CardTitle>
                <div className="text-3xl font-bold text-orange-500">от 25₽</div>
                <CardDescription>за фото</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Стандартная бумага</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Готовность 24 часа</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Размеры 10×15, 13×18</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-orange-500 relative transform scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500">Популярный</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">Премиум</CardTitle>
                <div className="text-3xl font-bold text-orange-500">от 80₽</div>
                <CardDescription>за фото</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Премиум бумага</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Готовность 2 часа</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Любые размеры</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Цветокоррекция</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-800">Профи</CardTitle>
                <div className="text-3xl font-bold text-blue-500">от 150₽</div>
                <CardDescription>за фото</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Фотобумага премиум</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Готовность 30 минут</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Крупные форматы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-500 mr-2" />Ретушь</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Доставка</h3>
            <p className="text-gray-600 text-lg">Быстрая доставка готовых фотографий</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-800">Самовывоз</CardTitle>
                    <CardDescription>Бесплатно</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Забирайте заказы в наших пунктах выдачи по всему городу. Работаем с 9:00 до 21:00.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-800">Курьерская доставка</CardTitle>
                    <CardDescription>от 200₽</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Доставляем по адресу в течение дня. Оплата при получении или онлайн.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Готовы напечатать фотографии?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Загружайте свои лучшие снимки и получайте качественную печать уже сегодня!
          </p>
          <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <Icon name="Upload" size={20} className="mr-2" />
            Начать заказ
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Camera" size={24} className="text-orange-500" />
            <h4 className="text-xl font-bold">ФотоПринт</h4>
          </div>
          <p className="text-gray-400 mb-4">Профессиональная печать фотографий онлайн</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Icon name="Phone" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Icon name="MapPin" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;