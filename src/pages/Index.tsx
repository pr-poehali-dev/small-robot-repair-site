import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    robotModel: '',
    issue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', robotModel: '', issue: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Cpu" className="text-primary" size={28} />
              <span className="text-xl font-bold">RoboFix</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">Прайс</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('booking')} className="hidden md:flex">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ремонт китайских роботов
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональный сервис по ремонту роботов-пылесосов, газонокосилок и игрушечных роботов. Бесплатная диагностика за 30 минут.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')}>
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на ремонт
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ef7243f4-8812-418c-aa16-e340ca38b9db/files/281d3448-a4fc-44f9-88e2-fb50198f11d0.jpg"
                alt="Ремонт роботов"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" className="text-primary mb-4" size={40} />
                <CardTitle>Ремонт роботов-пылесосов</CardTitle>
                <CardDescription>
                  Замена аккумуляторов, ремонт моторов, чистка датчиков
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Settings" className="text-primary mb-4" size={40} />
                <CardTitle>Диагностика и настройка</CardTitle>
                <CardDescription>
                  Полная диагностика систем, обновление ПО, калибровка
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Zap" className="text-primary mb-4" size={40} />
                <CardTitle>Срочный ремонт</CardTitle>
                <CardDescription>
                  Экспресс-ремонт за 24 часа, выездной сервис
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Прайс-лист</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { service: 'Бесплатная диагностика', price: '0 ₽' },
              { service: 'Замена аккумулятора', price: 'от 2 500 ₽' },
              { service: 'Ремонт платы управления', price: 'от 3 500 ₽' },
              { service: 'Замена моторов', price: 'от 2 000 ₽' },
              { service: 'Чистка и профилактика', price: 'от 1 500 ₽' },
              { service: 'Замена датчиков', price: 'от 1 800 ₽' },
              { service: 'Обновление ПО', price: 'от 1 000 ₽' },
            ].map((item, idx) => (
              <Card key={idx} className="hover:border-primary transition-colors">
                <CardContent className="flex justify-between items-center p-6">
                  <span className="font-medium">{item.service}</span>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Запись на диагностику</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="robotModel">Модель робота</Label>
                  <Input
                    id="robotModel"
                    placeholder="Например: Xiaomi Mi Robot"
                    value={formData.robotModel}
                    onChange={(e) => setFormData({ ...formData, robotModel: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="issue">Описание проблемы</Label>
                  <Textarea
                    id="issue"
                    placeholder="Расскажите, что случилось с роботом..."
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей М.',
                text: 'Отличный сервис! Починили мой робот-пылесос за один день. Теперь работает как новый.',
                rating: 5
              },
              {
                name: 'Мария К.',
                text: 'Профессиональный подход, адекватные цены. Бесплатная диагностика очень выручила.',
                rating: 5
              },
              {
                name: 'Дмитрий П.',
                text: 'Быстро нашли проблему и заменили аккумулятор. Рекомендую!',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-base">{review.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес мастерской</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Ленина, д. 10, офис 205</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@robofix.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 RoboFix. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
