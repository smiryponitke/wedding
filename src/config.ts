// src/config.ts

export const config = {
  names: {
    groom: 'ЕГОР',
    bride: 'ВИКА',
  },
  date: {
    day: 29,
    month: 8, // August
    year: 2026,
    display: '29 · 08 · 2026',
    displaySlash: '29 / 08 / 26',
  },
  rsvpDeadline: {
    display: '29 / 04 / 26',
  },
  location: {
    name: 'Усадьба "Малинки"',
    address: 'г. Гомель, Беларусь',
    gatheringTime: '15:00',
    mapsUrl: 'https://maps.google.com/?q=Усадьба+Малинки+Гомель',
  },
  timeline: [
    { time: '15:00', label: 'Сбор гостей', icon: '📍' },
    { time: '16:00', label: 'Церемония регистрации', icon: '💍' },
    { time: '16:30', label: 'Банкет', icon: '🍽️' },
    { time: '23:00', label: 'Завершение вечера', icon: '✨' },
  ],
  dresscode: {
    text: 'Мы очень ждём и готовимся к нашему незабываемому дню! Поддержите нас Вашими улыбками и объятиями, а также красивыми нарядами в палитре мероприятия',
    colors: [
      { hex: '#C8B8A2', label: 'Бежевый' },
      { hex: '#D0D5D8', label: 'Светло-серый' },
      { hex: '#8FAF8C', label: 'Шалфей' },
      { hex: '#2D5A27', label: 'Тёмно-зелёный' },
    ],
  },
  drinks: [
    'Шампанское',
    'Белое вино',
    'Красное вино',
    'Виски',
    'Водка',
    'Джин',
    'Ром',
    'Не пью алкоголь',
  ],
  contacts: [
    { name: 'Егор', phone: '+7 (000) 000-00-00', telegram: '@egor' },
    { name: 'Вика', phone: '+7 (000) 000-00-00', telegram: '@vika' },
  ],
}
