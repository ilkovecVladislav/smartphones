import { nanoid } from 'nanoid';
import { uniqueNamesGenerator, Config, adjectives } from 'unique-names-generator';
import random from 'lodash/random';
import sample from 'lodash/sample';
import capitalize from 'lodash/capitalize';

const customConfig: Config = {
  dictionaries: [adjectives, adjectives],
  separator: ' ',
  length: 2,
};

const memory = [8, 16, 32, 64, 128, 256, 512];
const brands = [
  'Apple',
  'Samsung',
  'Huawei',
  'Xiaomi',
  'Honor',
  'Nokia',
  'ZTE',
  'Asus',
  'HTC',
  'OPPO',
  'Vsmart',
  'Vivo',
  'TCL',
  'Realme',
  'Tecno',
  'Motorola',
];
const RAM = [2, 4, 8, 16];
const cameras = [
  '13 Мпикс',
  '12 Мпикс',
  '8 Мпикс',
  '48+8+2+2 Мпикс',
  '13+2 Мпикс',
  '48+8+2 Мпикс',
  '13+2+2 Мпикс',
  '12+12+64 Мпикс',
  '48+5+2+2 Мпикс',
  '13+5+2 Мпикс',
  '64+8+2+2 Мпикс',
  '48+8+5+2 Мпикс',
  '64+12+5+5 Мпикс',
  '48+12+5+5 Мпикс',
  '12+12+8 Мпикс',
];
const screens = [
  '6.50 дюйм',
  '6.4 дюйм',
  '6.3 дюйм',
  '6 дюйм',
  '5.8 дюйм',
  '4.7 дюйм',
  '6.1 дюйм',
  '6.53 дюйм',
  '6.7 дюйм',
  '5.4 дюйм',
  '6.67 дюйм',
  '6.2 дюйм',
  '6.39 дюйм',
  '5.45 дюйм',
  '6.52 дюйм',
  '6.088 дюйм',
];
const colors = [
  {
    displayValue: 'черный',
    value: '#000000',
    slug: 'tsvet-chernyij000000',
  },
  {
    displayValue: 'коралловый',
    value: '#FF7F50',
    slug: 'tsvet-korallovyi',
  },
  {
    displayValue: 'мятный',
    value: '#aaf0d1',
    slug: 'tsvet-miatnyi-99f2da',
  },
  {
    displayValue: 'белый',
    value: '#ededed',
    slug: 'tsvet-belyijffffff',
  },
  {
    displayValue: 'серый',
    value: '#808080',
    slug: 'tsvet-seryij808080',
  },
  {
    displayValue: 'салатовый',
    value: '#7bfe7b',
    slug: 'tsvet-salatovyi-99ff99',
  },
  {
    displayValue: 'золотой',
    value: '#FFD700',
    slug: 'tsvet-zolotojffd700',
  },
  {
    displayValue: 'серебристый',
    value: '#C0C0C0',
    slug: 'tsvet-serebristyijc0c0c0',
  },
  {
    displayValue: 'бронзовый',
    value: '#ab6119',
    slug: 'tsvet-bronzovyij917754',
  },
  {
    displayValue: 'коричневый',
    value: '#753313',
    slug: 'tsvet-korichnevyij7b3f00',
  },
  {
    displayValue: 'зеленый',
    value: '#1ea41e',
    slug: 'tsvet-zelenyij03c03c',
  },
  {
    displayValue: 'бирюзовый',
    value: '#06c2ac',
    slug: 'tsvet-biriuzovyi06c2ac',
  },
  {
    displayValue: 'синий',
    value: '#2f74ca',
    slug: 'tsvet-sinij0000ff',
  },
  {
    displayValue: 'голубой',
    value: '#77d0fa',
    slug: 'tsvet-goluboj00bfff',
  },
  {
    displayValue: 'красный',
    value: '#FF0000',
    slug: 'tsvet-krasnyijff0000',
  },
  {
    displayValue: 'оранжевый',
    value: '#FFA500',
    slug: 'tsvet-oranzhevyijffa500',
  },
  {
    displayValue: 'желтый',
    value: '#FFFF00',
    slug: 'tsvet-zheltyijffff00',
  },
  {
    displayValue: 'розовый',
    value: '#ffc0cb',
    slug: 'tsvet-rozovyijffc0cb',
  },
  {
    displayValue: 'фиолетовый',
    value: '#640cc7',
    slug: 'tsvet-fioletovyij8b00ff',
  },
  {
    displayValue: 'пурпурный',
    value: '#960496',
    slug: 'tsvet-purpurnyiff00ff',
  },
];
const promotions = [
  {
    name: 'Скидка 10 000 рублей по промокоду',
    slug: 'skidka-10-000-rublei-po-promokodu-10000sg',
  },
  {
    name: 'Скидка 12 000 рублей по промокоду',
    slug: 'skidka-12-000-rublei-po-promokodu-12000sg',
  },
  {
    name: 'Скидка 14 000 рублей по промокоду',
    slug: 'skidka-14-000-rublei-po-promokodu-14000sg',
  },
  {
    name: 'Беспроводные наушники в подарок',
    slug: 'besprovodnye-naushniki-v-podarok',
  },
  {
    name: 'Скидка 1 000 рублей по промокоду',
    slug: 'skidka-1-000-rublei-po-promokodu-1000sg-2',
  },
  {
    name: 'Скидка 10% при покупке с аксессуарами',
    slug: 'vmeste-vygodnee-skidka-10-pri-pokupke-s-aksessuarami-ot-200-rublei',
  },
  {
    name: 'Скидка 5 000 рублей по промокоду',
    slug: 'skidka-5-000-rublei-po-promokodu-5000sg',
  },
  {
    name: 'Скидка 2 000 рублей по промокоду 2000AP',
    slug: 'skidka-2-000-rublei-po-promokodu-2000ap',
  },
  {
    name: 'Скидка 1 200 рублей по промокоду',
    slug: 'skidka-1-200-rublei-po-promokodu-1200ap',
  },
  {
    name: 'Скидка 2 200 рублей по промокоду',
    slug: 'skidka-2-200-rublei-po-promokodu-2200ap',
  },
  {
    name: 'Скидка 3 000 рублей по промокоду 3000AP',
    slug: 'skidka-3-000-rublei-po-promokodu-3000ap',
  },
  {
    name: 'Скидка 2 100 рублей по промокоду 2100AP',
    slug: 'skidka-2-100-rublei-po-promokodu-2100ap',
  },
  {
    name: 'Скидка 1 900 рублей по промокоду 1900AP',
    slug: 'skidka-1-900-rublei-po-promokodu-1900ap',
  },
  {
    name: 'Скидка 3 100 рублей по промокоду 3100AP',
    slug: 'skidka-3-100-rublei-po-promokodu-3100ap',
  },
  {
    name: 'Скидка 2 700 рублей по промокоду',
    slug: 'skidka-2-700-rublei-po-promokodu-2700ap',
  },
  {
    name: 'Скидка 3 500 рублей по промокоду',
    slug: 'skidka-3-500-rublei-po-promokodu-3500ap',
  },
  {
    name: '-3% при оплате заказа онлайн',
    slug: '-3-pri-oplate-zakaza-onlain',
  },
  {
    name: 'Выгода от 9000 рублей при покупке в Trade-In',
    slug: 'vot-eto-vygoda-vygoda-ot-9000-rublei-pri-pokupke-v-trade-in-so-sviaziu-i-ak',
  },
  {
    name: 'Скидка 1 000 рублей по промокоду VESNA1000',
    slug: 'skidka-1-000-rublei-po-promokodu-vesna1000',
  },
  {
    name: 'Скидка 2 000 рублей по промокоду',
    slug: 'skidka-2-000-rublei-po-promokodu-2000sg',
  },
  {
    name: 'Скидка 3 900 рублей по промокоду 3900AP',
    slug: 'skidka-3-900-rublei-po-promokodu-3900ap',
  },
  {
    name: 'Скидка 3 300 рублей по промокоду',
    slug: 'skidka-3-300-rublei-po-promokodu-3300ap',
  },
  {
    name: 'Скидка 1 000 рублей по промокоду BEE1000',
    slug: 'skidka-1-000-rublei-po-promokodu-bee1000',
  },
  {
    name: 'Скидка 5 000 рублей по промокоду BEE5000',
    slug: 'skidka-5-000-rublei-po-promokodu-bee5000',
  },
];

const discounts = [1000, 2000, 4000, 5000, 7000, 10000, 12000];
const badges = [
  { displayText: 'Новинка', bgColor: '#5C6BC0' },
  { displayText: '–3% за оплату онлайн', bgColor: '#039BE5' },
];

const generateSmartphonesData = (): unknown[] =>
  Array.from({ length: 250 }, () => {
    const memoryValue = memory[random(0, memory.length - 1)];
    const brand = brands[random(0, brands.length - 1)];
    const camera = cameras[random(0, cameras.length - 1)];
    const screen = screens[random(0, screens.length - 1)];
    const color = colors[random(0, colors.length - 1)];
    const hasDiscount = sample([true, false]);

    let priceResult = null;
    const price = random(3500, 160000);

    if (hasDiscount) {
      const discount = discounts[random(0, 6)];

      if (discount > price) {
        const actualPrice = price - 1000;
        priceResult = {
          oldPrice: price,
          price: actualPrice,
          discount: 1000,
          discountFormatted: '- 1 000',
        };
      } else {
        priceResult = {
          oldPrice: price,
          price: price - discount,
          discount,
          discountFormatted: `- ${discount.toLocaleString('ru-RU')}`,
        };
      }
    } else {
      priceResult = {
        oldPrice: null,
        price,
        discount: null,
        discountFormatted: null,
      };
    }

    let promotionResult = null;
    const hasPromotion = sample([true, false]);

    if (hasPromotion) {
      promotionResult = promotions[random(0, 23)];
    }

    let badgesResult = null;
    const hasBadges = sample([true, false]);

    if (hasBadges) {
      badgesResult = badges[random(0, 1)];
    }

    const rate = random(0, 5);

    return {
      id: nanoid(),
      name: `Смартфон ${brand} ${uniqueNamesGenerator(customConfig)} ${memoryValue} Гб ${
        RAM[random(0, 4)]
      } RAM «${capitalize(color.displayValue)}»
      `,
      brand,
      parameters: {
        ram: {
          label: 'Объем памяти',
          value: memoryValue,
          displayValue: `${memoryValue} Гб`,
          slug: `obem-operativnoi-pamiati-${memoryValue}-gb`,
        },
        camera: {
          label: 'Камера',
          value: camera,
          displayValue: camera,
          slug: `camera-${camera}`,
        },
        screen: {
          label: 'Экран',
          value: screen,
          displayValue: screen,
          slug: `screen-${screen}`,
        },
      },
      color: {
        ...color,
      },
      isFastDelivery: sample([true, false]),
      rate,
      reviews: rate > 0 ? random(5, 32) : null,
      price: priceResult,
      promotion: promotionResult,
      badges: badgesResult,
    };
  });

export default generateSmartphonesData;
