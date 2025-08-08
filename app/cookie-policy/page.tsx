import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Політика використання cookies - Priority Agency',
  description: 'Політика використання файлів cookie Priority Agency відповідно до GDPR та українського законодавства',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-[#193D19] hover:text-[#193D19]/70 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Повернутись на головну
        </Link>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#193D19] mb-8">Політика використання cookies</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Дата останнього оновлення:</strong> {new Date().toLocaleDateString('uk-UA')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">1. Що таке cookies</h2>
            <p>
              Cookies (файли cookie) – це невеликі текстові файли, які зберігаються на вашому 
              пристрої (комп'ютер, планшет, смартфон) під час відвідування веб-сайтів. 
              Вони допомагають сайту "запам'ятати" ваші дії та налаштування.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">2. Як ми використовуємо cookies</h2>
            <p>ФОП СТОРОЖЕНКО ОЛЬГА АНАТОЛІЇВНА використовує cookies для:</p>
            <ul>
              <li>Забезпечення функціональності сайту</li>
              <li>Аналізу відвідуваності та поведінки користувачів</li>
              <li>Покращення користувацького досвіду</li>
              <li>Запам'ятовування ваших налаштувань</li>
              <li>Забезпечення безпеки сайту</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">3. Типи cookies, які ми використовуємо</h2>
            
            <div className="space-y-6">
              <div className="bg-[#E0EBE2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#193D19] mb-3">Необхідні cookies</h3>
                <p><strong>Мета:</strong> Забезпечення базової функціональності сайту</p>
                <p><strong>Тривалість:</strong> Сесійні (видаляються після закриття браузера)</p>
                <p><strong>Можливість відключення:</strong> Ні (технічно необхідні)</p>
                <p><strong>Приклади:</strong> Збереження мови інтерфейсу, стан форм</p>
              </div>

              <div className="bg-[#E0EBE2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#193D19] mb-3">Аналітичні cookies</h3>
                <p><strong>Мета:</strong> Аналіз відвідуваності та поведінки користувачів</p>
                <p><strong>Тривалість:</strong> До 2 років</p>
                <p><strong>Можливість відключення:</strong> Так</p>
                <p><strong>Постачальники:</strong> Google Analytics, Google Tag Manager</p>
              </div>

              <div className="bg-[#E0EBE2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#193D19] mb-3">Функціональні cookies</h3>
                <p><strong>Мета:</strong> Запам'ятовування налаштувань користувача</p>
                <p><strong>Тривалість:</strong> До 1 року</p>
                <p><strong>Можливість відключення:</strong> Так</p>
                <p><strong>Приклади:</strong> Налаштування мови, розмір шрифту</p>
              </div>

              <div className="bg-[#E0EBE2] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#193D19] mb-3">Маркетингові cookies</h3>
                <p><strong>Мета:</strong> Відстеження ефективності реклами</p>
                <p><strong>Тривалість:</strong> До 90 днів</p>
                <p><strong>Можливість відключення:</strong> Так</p>
                <p><strong>Постачальники:</strong> Facebook Pixel, Google Ads</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">4. Детальний список cookies</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-[#193D19] text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Назва</th>
                    <th className="border border-gray-300 p-3 text-left">Постачальник</th>
                    <th className="border border-gray-300 p-3 text-left">Мета</th>
                    <th className="border border-gray-300 p-3 text-left">Тривалість</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">_ga</td>
                    <td className="border border-gray-300 p-3">Google Analytics</td>
                    <td className="border border-gray-300 p-3">Розрізнення користувачів</td>
                    <td className="border border-gray-300 p-3">2 роки</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">_gid</td>
                    <td className="border border-gray-300 p-3">Google Analytics</td>
                    <td className="border border-gray-300 p-3">Розрізнення користувачів</td>
                    <td className="border border-gray-300 p-3">24 години</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">_fbp</td>
                    <td className="border border-gray-300 p-3">Facebook</td>
                    <td className="border border-gray-300 p-3">Відстеження конверсій</td>
                    <td className="border border-gray-300 p-3">90 днів</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">_gtm</td>
                    <td className="border border-gray-300 p-3">Google Tag Manager</td>
                    <td className="border border-gray-300 p-3">Управління тегами</td>
                    <td className="border border-gray-300 p-3">Сесійний</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">5. Ваші права та управління cookies</h2>
            
            <h3 className="text-xl font-bold text-[#193D19] mb-3">Керування через браузер:</h3>
            <ul>
              <li><strong>Chrome:</strong> Налаштування → Конфіденційність та безпека → Файли cookie</li>
              <li><strong>Firefox:</strong> Налаштування → Приватність та безпека → Файли cookie</li>
              <li><strong>Safari:</strong> Налаштування → Конфіденційність → Файли cookie</li>
              <li><strong>Edge:</strong> Налаштування → Файли cookie та дозволи сайтів</li>
            </ul>

            <h3 className="text-xl font-bold text-[#193D19] mb-3 mt-6">Відмова від аналітичних cookies:</h3>
            <ul>
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#193D19] hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-[#193D19] hover:underline">Facebook Ads Settings</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">6. Правова основа</h2>
            <p>Використання cookies здійснюється на підставі:</p>
            <ul>
              <li>Статті 6(1)(f) GDPR (законні інтереси)</li>
              <li>Статті 6(1)(a) GDPR (згода користувача)</li>
              <li>Директиви ЄС про електронну конфіденційність (ePrivacy)</li>
              <li>Закону України "Про захист персональних даних"</li>
              <li>Закону України "Про телекомунікації"</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">7. Треті сторони</h2>
            <p>Ми можемо використовувати сервіси третіх сторін, які встановлюють власні cookies:</p>
            <ul>
              <li><strong>Google LLC:</strong> Аналітика та реклама</li>
              <li><strong>Meta Platforms:</strong> Соціальні плагіни та реклама</li>
              <li><strong>Інші сервіси:</strong> За необхідності для покращення функціональності</li>
            </ul>
            <p>Кожен з цих сервісів має власну політику конфіденційності.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">8. Міжнародні передачі</h2>
            <p>
              Деякі cookies можуть передаватися до країн поза ЄС/ЄЕЗ. 
              Такі передачі здійснюються з відповідними гарантіями згідно з GDPR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">9. Оновлення політики</h2>
            <p>
              Ця політика може оновлюватися. Про істотні зміни ми повідомимо 
              через банер на сайті або інші доступні засоби зв'язку.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">10. Контакти</h2>
            <p>З питань використання cookies звертайтесь:</p>
            <div className="bg-[#E0EBE2] p-6 rounded-lg">
              <p><strong>ФОП СТОРОЖЕНКО ОЛЬГА АНАТОЛІЇВНА</strong></p>
              <p><strong>Дата державної реєстрації:</strong> 13.01.2025</p>
              <p><strong>Номер запису в ЄДРПОУ:</strong> 2010280000000002159</p>
              <p><strong>Email:</strong> privacy@priority-agency.com</p>
              <p><strong>Телефон:</strong> +380 95 762 09 67</p>
              <p><strong>Telegram:</strong> @Priority_Agency</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 