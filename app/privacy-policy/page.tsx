import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Політика конфіденційності - Priority Agency',
  description: 'Політика обробки персональних даних Priority Agency відповідно до законодавства України',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-[#193D19] mb-8">Політика конфіденційності</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Дата останнього оновлення:</strong> {new Date().toLocaleDateString('uk-UA')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">1. Загальні положення</h2>
            <p>
              Фізична особа-підприємець СТОРОЖЕНКО ОЛЬГА АНАТОЛІЇВНА (далі – Компанія) зобов'язується 
              захищати конфіденційність персональних даних користувачів відповідно до вимог:
            </p>
            <ul>
              <li>Закону України "Про захист персональних даних" № 2297-VI від 01.06.2010</li>
              <li>Закону України "Про електронну комерцію" № 675-VIII від 03.09.2015</li>
              <li>Загального регламенту про захист даних (GDPR) ЄС</li>
              <li>Закону України "Про телекомунікації" № 1280-IV від 18.11.2003</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">2. Збір персональних даних</h2>
            <p>Ми збираємо наступні категорії персональних даних:</p>
            <ul>
              <li><strong>Контактна інформація:</strong> ім'я, прізвище, номер телефону, електронна пошта</li>
              <li><strong>Інформація про компанію:</strong> назва компанії, сфера діяльності</li>
              <li><strong>Технічні дані:</strong> IP-адреса, дані про браузер, операційну систему</li>
              <li><strong>Файли cookie:</strong> для покращення роботи сайту та аналітики</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">3. Мета обробки даних</h2>
            <p>Персональні дані обробляються з наступною метою:</p>
            <ul>
              <li>Надання маркетингових послуг та консультацій</li>
              <li>Зв'язок з клієнтами та потенційними клієнтами</li>
              <li>Виконання договорів та угод</li>
              <li>Покращення якості послуг та сайту</li>
              <li>Дотримання законодавчих вимог</li>
              <li>Маркетингові комунікації (за згодою)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">4. Правова основа обробки</h2>
            <p>Обробка персональних даних здійснюється на підставі:</p>
            <ul>
              <li>Згоди суб'єкта персональних даних (ст. 11 Закону України "Про захист персональних даних")</li>
              <li>Необхідності виконання договору (ст. 11 Закону України "Про захист персональних даних")</li>
              <li>Законних інтересів контролера даних</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">5. Передача третім особам</h2>
            <p>
              Персональні дані можуть передаватися третім особам виключно у випадках, 
              передбачених законодавством України, або за письмовою згодою суб'єкта даних.
            </p>
            <p>Можливі випадки передачі:</p>
            <ul>
              <li>Постачальникам технічних послуг (хостинг, аналітика)</li>
              <li>Державним органам за їх офіційним запитом</li>
              <li>У випадку реорганізації або продажу компанії</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">6. Ваші права</h2>
            <p>Відповідно до українського законодавства, ви маєте право:</p>
            <ul>
              <li>Отримувати інформацію про обробку ваших персональних даних</li>
              <li>Доступ до ваших персональних даних</li>
              <li>Внесення змін до персональних даних</li>
              <li>Видалення персональних даних</li>
              <li>Відкликання згоди на обробку</li>
              <li>Подання скарги до Уповноваженого Верховної Ради України з прав людини</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">7. Безпека даних</h2>
            <p>
              Ми вживаємо технічних та організаційних заходів для захисту ваших персональних даних:
            </p>
            <ul>
              <li>SSL-шифрування при передачі даних</li>
              <li>Обмежений доступ до персональних даних</li>
              <li>Регулярне оновлення систем безпеки</li>
              <li>Навчання персоналу з питань захисту даних</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">8. Зберігання даних</h2>
            <p>
              Персональні дані зберігаються протягом періоду, необхідного для досягнення мети обробки, 
              але не довше ніж передбачено законодавством України.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">9. Файли cookie</h2>
            <p>
              Наш сайт використовує файли cookie для покращення функціональності та аналітики. 
              Ви можете налаштувати використання cookie в браузері.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">10. Контактна інформація</h2>
            <p>З питань обробки персональних даних звертайтесь:</p>
            <div className="bg-[#E0EBE2] p-6 rounded-lg">
              <p><strong>ФОП СТОРОЖЕНКО ОЛЬГА АНАТОЛІЇВНА</strong></p>
              <p><strong>Дата державної реєстрації:</strong> 13.01.2025</p>
              <p><strong>Номер запису в ЄДРПОУ:</strong> 2010280000000002159</p>
              <p><strong>Телефон:</strong> +380 95 762 09 67</p>
              <p><strong>Telegram:</strong> @Priority_Agency</p>
              <p><strong>Email:</strong> privacy@priority-agency.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#193D19] mb-4">11. Зміни до політики</h2>
            <p>
              Компанія залишає за собою право вносити зміни до цієї Політики конфіденційності. 
              Всі зміни набувають чинності з моменту їх публікації на сайті.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 