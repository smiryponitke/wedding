// src/config.ts

export const config = {
  names: {
    groom: 'Егор',
    bride: 'Виктория',
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
    { time: '15:30', label: 'Церемония регистрации', icon: '💍' },
    { time: '16:30', label: 'Банкет', icon: '🍽️' },
    { time: '22:30', label: 'Завершение вечера', icon: '✨' },
  ],
  dresscode: {
    text: 'Мы очень ждём и готовимся к нашему незабываемому дню! Поддержите нас Вашими улыбками и объятиями, а также красивыми нарядами в палитре мероприятия',
    colors: [
      { hex: '#96a481', label: '' },
      { hex: '#e3bdb4', label: '' },
      { hex: '#d6c0a8', label: '' },
      { hex: '#eae2d7', label: '' },
      { hex: '#65663e', label: ''},
      { hex: '#d6d6d8', label: ''},
      { hex: '#d2e2ef', label: ''},
      { hex: '#7a5946', label: ''},
      { hex: '#9f8d7f', label: ''},
      { hex: '#040404', label: ''}
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
    { name: 'Егор', phone: '+375 (44) 540-53-63', telegram: '@viyoule' },
    { name: 'Вика', phone: '+375 (29) 133-44-79', telegram: '@asewwlviki' },
  ],
}
