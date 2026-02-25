import { Component, signal } from '@angular/core';
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [ ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb Orange',
      description: 'Apple iPhone 17 Pro 256Gb is the epitome of innovation and style, combining unrivaled performance, amazing camera, and bright OLED display.',
      price: 842000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Lenovo IdeaPad 3 15.6" Laptop / 8 GB / 256 GB SSD / DOS / 15IGL05 / 81WQ00ERRK',
      description: 'The IdeaPad 3 laptop operates more quietly and with less heat generation, thanks to an optimized mechanical airflow distribution system and smart ventilation that prevents cold and warm air from mixing. ',
      price: 173689,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000'
    },
    {
      id: 3,
      name: 'Sky Elite running shoes light pink',
      description: 'Sky Elite sneakers are a versatile model for active women that combines comfort and functionality in every detail.',
      price: 22300,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p57/p81/92701015.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p57/p81/92701015.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p9b/p28/92701020.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf4/p1a/92701024.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/krossovki-sky-elite-30205886-752266190-svetlo-rozovyi-44-153901493/?c=750000000&hasVariants=true'
    },
    {
      id: 4,
      name: 'WE LIKE burgundy Shirt',
      description: 'The silk shirt is a true embodiment of elegance and style. It is elegant and comes in a variety of noble colors, making it suitable for any occasion, whether it is for everyday activities or office events.',
      price: 8980,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7e/p9a/28210533.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p7e/p9a/28210533.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p51/pa1/28210535.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pbb/pa4/28210536.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/rubashka-we-like-007-bordovyi-42-135746468/?c=750000000'
    },
    {
      id: 5,
      name: 'Sport&Fitness SF-TMBr-010Combo Electric Treadmill',
      description: 'Introducing the SF-TMBr-010 electric treadmill, the perfect solution for home workouts 🏃‍♀️. This model provides a comfortable and effective sports experience right in your own home.',
      price: 279807,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p6e/84570875.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pab/p6e/84570875.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p8f/p6e/84570876.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p73/p6e/84570877.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/begovaja-dorozhka-sport-fitness-sf-tmbr-010combo-elektricheskaja-128248612/?c=750000000'
    },
    {
      id: 6,
      name: 'LUXVISAGE Active complex SPF10 CC cream 10 Fair 35 ml',
      description: 'Corrective and leveling foundation with sun protection factor SPF 10. CC-cream perfectly adapts to the skin tone, improves its natural hue, provides maximum color correction. Also, the cream reduces the visibility of dilated capillaries, redness, hides pigmentation. ',
      price: 1974,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/h79/86668728434718.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h72/h79/86668728434718.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h65/hc3/86668728467486.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h66/h5a/86668728500254.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/luxvisage-active-complex-spf10-ss-krem-10-fair-35-ml-106325149/?c=750000000'
    },
    {
      id: 7,
      name: 'Felix Appetizing Bits in Jelly Beef 75 g 1 piece',
      description: 'Every cat wants to enjoy a special meal that looks and tastes just like you made it yourself. Each bag of Felix Appetite Bits Adult Cat Food contains tender pieces in juicy jelly, making it irresistible for your cat. ',
      price: 229,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/h79/86668728434718.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h3b/h01/84564384645150.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf8/h5b/84564384677918.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h6c/86904007819294.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/felix-appetitnye-kusochki-v-zhele-govjadina-75-g-1-sht-107965425/?c=750000000'
    },
    {
      id: 8,
      name: 'Icicle plastic 12 pieces, transparent',
      description: 'Plastic icicles are a beautiful decoration for your Christmas tree that will add magic and coziness to your holiday days.',
      price: 367,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9c/p16/15998661.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p9c/p16/15998661.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p80/p16/15998662.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p64/p16/15998663.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sosul-ka-plastik-12-sht-prozrachnyi-113778349/?c=750000000'
    },
    {
      id: 9,
      name: 'Modern New Design TT TV stand, 180x40x35 cm, white, brown',
      description: 'The elegant TV stand combines style and functionality. With its modern and minimalist design, it will fit seamlessly into any interior, from Scandinavian to modern. The white body and contrasting brown accents give the stand a visually light and cozy feel. It is suitable for use in living rooms, bedrooms, or media areas.',
      price: 24700,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h47/h2f/67423805636638.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h13/67423806554142.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/tv-tumba-napol-naja-modern-new-design-tt-180x40x35-sm-belyi-korichnevyi-108268540/?c=750000000'
    },
    {
      id: 10,
      name: 'Cello Maxriter XS ballpoint pen, 1 piece, ink color black',
      description: 'Cello Maxriter XS ballpoint pen - soft writing in one touch up to 4,000 meters long. The pen is suitable for studying, working, document management, notes in a diary, drawings in a sketchbook',
      price: 50,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/h76/63888818962462.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h7e/h76/63888818962462.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha7/hed/63888821420062.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h20/hf6/63888825942046.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-cello-maxriter-xs-1-sht-tsvet-chernil-chernyi-100370005/?c=750000000'
    }
  ];
}
