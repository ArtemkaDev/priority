import { NextRequest, NextResponse } from 'next/server'

interface ContactData {
  name: string
  contact: string
  business?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json()
    
    // Валідація даних
    if (!body.name || !body.contact) {
      return NextResponse.json(
        { error: 'Ім\'я та контакт є обов\'язковими полями' },
        { status: 400 }
      )
    }

    // Отримання змінних середовища (тепер на сервері)
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram credentials not configured')
      return NextResponse.json(
        { error: 'Сервіс тимчасово недоступний' },
        { status: 500 }
      )
    }

    // Формування повідомлення
    const message = `
🔥 НОВА ЗАЯВКА З САЙТУ!

👤 Ім'я: ${body.name}
📞 Контакт: ${body.contact}
💼 Про бізнес: ${body.business || 'Не вказано'}

📅 Дата: ${new Date().toLocaleString('uk-UA', {
      timeZone: 'Europe/Kiev',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })}
🌐 Джерело: priority-agency.com
🔗 IP: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}
    `.trim()

    // Відправка в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      }
    )

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error('Telegram API error:', errorData)
      return NextResponse.json(
        { error: 'Помилка відправки повідомлення' },
        { status: 500 }
      )
    }

    // Логування успішної відправки (опціонально)
    console.log(`Contact form submitted: ${body.name} - ${body.contact}`)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Заявка успішно відправлена!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Внутрішня помилка сервера' },
      { status: 500 }
    )
  }
} 