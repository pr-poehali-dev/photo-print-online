import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Admin = () => {
  const orders = [
    { id: '#1001', customer: 'Анна Иванова', format: '10×15', count: 12, status: 'processing', total: '300₽', date: '23.07.2025' },
    { id: '#1002', customer: 'Петр Сидоров', format: 'А4', count: 3, status: 'ready', total: '450₽', date: '23.07.2025' },
    { id: '#1003', customer: 'Мария Козлова', format: '30×40', count: 1, status: 'pending', total: '250₽', date: '22.07.2025' },
    { id: '#1004', customer: 'Алексей Попов', format: '15×21', count: 8, status: 'completed', total: '360₽', date: '22.07.2025' },
    { id: '#1005', customer: 'Елена Смирнова', format: '18×18', count: 5, status: 'processing', total: '350₽', date: '21.07.2025' }
  ];

  const stats = [
    { title: 'Заказы сегодня', value: '23', change: '+12%', icon: 'ShoppingCart', color: 'text-blue-600' },
    { title: 'Выручка', value: '15,400₽', change: '+8%', icon: 'DollarSign', color: 'text-green-600' },
    { title: 'В обработке', value: '7', change: '-3%', icon: 'Clock', color: 'text-orange-600' },
    { title: 'Клиенты', value: '156', change: '+15%', icon: 'Users', color: 'text-purple-600' }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      'pending': { variant: 'secondary' as const, label: 'Ожидает', color: 'bg-gray-100' },
      'processing': { variant: 'default' as const, label: 'В работе', color: 'bg-orange-100' },
      'ready': { variant: 'default' as const, label: 'Готов', color: 'bg-blue-100' },
      'completed': { variant: 'default' as const, label: 'Выдан', color: 'bg-green-100' }
    };
    
    const config = variants[status as keyof typeof variants];
    return (
      <Badge variant={config.variant} className={config.color}>
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Camera" size={32} className="text-orange-500" />
                <h1 className="text-2xl font-bold text-gray-800">ФотоПринт Admin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" size={16} className="mr-2" />
                Уведомления
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Icon name="User" size={18} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <Icon name={stat.icon} size={20} className={stat.color} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <p className="text-xs text-gray-500">
                  <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  {' '}за месяц
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Заказы</TabsTrigger>
            <TabsTrigger value="formats">Форматы</TabsTrigger>
            <TabsTrigger value="customers">Клиенты</TabsTrigger>
            <TabsTrigger value="reports">Отчеты</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Заказы</CardTitle>
                    <CardDescription>Управление заказами фотопечати</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Input placeholder="Поиск заказов..." className="w-64" />
                    <Button>
                      <Icon name="Plus" size={16} className="mr-2" />
                      Новый заказ
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>№ Заказа</TableHead>
                      <TableHead>Клиент</TableHead>
                      <TableHead>Формат</TableHead>
                      <TableHead>Количество</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Сумма</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.format}</TableCell>
                        <TableCell>{order.count} шт.</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="font-semibold">{order.total}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Eye" size={14} />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" size={14} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formats Tab */}
          <TabsContent value="formats">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Форматы печати</CardTitle>
                  <CardDescription>Управление доступными форматами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: '9×13 см', price: '20₽', active: true },
                    { name: '10×15 см', price: '25₽', active: true },
                    { name: '15×21 см', price: '45₽', active: true },
                    { name: '18×18 см', price: '70₽', active: true },
                    { name: 'А4', price: '150₽', active: true },
                    { name: '30×40 см', price: '250₽', active: false }
                  ].map((format, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${format.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <div>
                          <div className="font-medium">{format.name}</div>
                          <div className="text-sm text-gray-500">{format.price}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={14} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Trash2" size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Добавить формат</CardTitle>
                  <CardDescription>Создание нового формата печати</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Название формата</label>
                    <Input placeholder="Например: 20×30 см" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Цена</label>
                    <Input placeholder="100₽" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Описание</label>
                    <Input placeholder="Описание формата" />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить формат
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Клиенты</CardTitle>
                    <CardDescription>База клиентов и их заказы</CardDescription>
                  </div>
                  <Input placeholder="Поиск клиентов..." className="w-64" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Анна Иванова', email: 'anna@example.com', orders: 12, total: '3,200₽' },
                    { name: 'Петр Сидоров', email: 'petr@example.com', orders: 8, total: '2,100₽' },
                    { name: 'Мария Козлова', email: 'maria@example.com', orders: 15, total: '4,500₽' },
                    { name: 'Алексей Попов', email: 'alex@example.com', orders: 6, total: '1,800₽' }
                  ].map((customer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-gray-500">{customer.email}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{customer.orders} заказов</div>
                        <div className="text-sm text-gray-500">{customer.total}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Популярные форматы</CardTitle>
                  <CardDescription>Статистика по форматам за месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { format: '10×15 см', count: 245, percentage: 35 },
                      { format: '15×21 см', count: 189, percentage: 27 },
                      { format: 'А4', count: 134, percentage: 19 },
                      { format: '9×13 см', count: 98, percentage: 14 },
                      { format: '30×40 см', count: 35, percentage: 5 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.format}</span>
                          <span>{item.count} заказов</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-orange-500 to-blue-500 h-2 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Выручка по дням</CardTitle>
                  <CardDescription>Последние 7 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { day: 'Понедельник', amount: '2,400₽', change: 12 },
                      { day: 'Вторник', amount: '1,800₽', change: -8 },
                      { day: 'Среда', amount: '3,200₽', change: 25 },
                      { day: 'Четверг', amount: '2,100₽', change: -5 },
                      { day: 'Пятница', amount: '4,500₽', change: 35 },
                      { day: 'Суббота', amount: '5,200₽', change: 42 },
                      { day: 'Воскресение', amount: '3,800₽', change: 18 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item.day}</span>
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{item.amount}</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            item.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {item.change > 0 ? '+' : ''}{item.change}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;