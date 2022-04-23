import CurrencyYuanIcon from '@mui/icons-material/CurrencyYuan';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import EuroIcon from '@mui/icons-material/Euro';
import { Description } from '@mui/icons-material';

export type CurrencyData = {countryIcon: JSX.Element, moneyIcon: JSX.Element, countryName: string}[];

export const mockCurrency: CurrencyData = [
  {countryIcon: <CurrencyYuanIcon />, moneyIcon: <CurrencyYuanIcon />, countryName: 'China',},
  {countryIcon: <CurrencyLiraIcon />, moneyIcon: <CurrencyLiraIcon />, countryName: 'Lira',},
  {countryIcon: <EuroIcon />, moneyIcon: <EuroIcon />, countryName: 'England',},
];

export type CommonQuestions = {question: string, answer: string}[];

export const mockCommonQuestions: CommonQuestions = [
  {question: 'What is this website for?', answer: 'Convenient blockchain ticket market.'},
  {question: 'When we start up?', answer: '2022.'},
]

export type DiscoveryAdvertisements = {src: string, description: string}[];

export const mockDiscoveryAdvertisements: DiscoveryAdvertisements = [{
  src: 'https://image.kkday.com/v2/image/get/w_628%2Ch_472%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_863/20190813032257_mvfDq/jpg',
  description: 'Singapore',
},
{src: 'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_6184/20210519060022_f1pi6/jpg',
  description: 'Ticket | Australia',
},
{src: 'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_6094/20210512072525_4WsPI/jpg',
  description: 'SkyFeast at Sydney Tower',
},
{src: 'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_10637/20170111082806_KRGfc/jpg',
  description: '[Eco Tour]'
},
{src: 'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_10637/20170111082806_KRGfc/jpg',
  description: 'Queensland'
},
]

export type ItemOverview = {
  src: string,
  title: string,
  des: string
}

export const mockItemOverview: ItemOverview[] = [{
  src: 'https://image.kkday.com/v2/image/get/w_628%2Ch_472%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_863/20190813032257_mvfDq/jpg',
  des: 'A two day trip to Singapore',
  title: 'Singapore'
},
{src: 'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_6184/20210519060022_f1pi6/jpg',
  des: 'Sydney Royal Easter Show Ticket | Australia',
  title: 'Sydney'
},
{src: 'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_6094/20210512072525_4WsPI/jpg',
  title: 'Melbourne',
  des: 'SkyFeast at Sydney Tower with Guaranteed Window Table | Australia',
},
{src: 'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_10637/20170111082806_KRGfc/jpg',
 title: 'Brisbane',
 des: '[Eco Tour] Moreton Island Day Tour: Shipwreck Snorkeling & Sand Tobogganing | Queensland'
}
]

type TicketDetailData = {
  title: string;
  overview: {[index: string]: string},
  des: string;
  photos: string[];
  subTitle: string;
}

export const mockTicketDetailData: TicketDetailData = {
  title: 'Singapore Livehouse',
  overview: {date: '04/26/2022', location: 'Singapore Airport', grade: 'normal/high/premium'},
  des: 'The adidas Yeezy Slide Pure (Restock Pair) features a slightly different composition than the original adidas Yeezy Slide Pure that debuted in the spring of 2021. Instead of a smooth EVA foam construction, it has a pebbled, more textural touch. At the base, a grooved sole and cushioned footbed completes the design.',
  photos: [
    'https://image.kkday.com/v2/image/get/w_628%2Ch_472%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_863/20190813032257_mvfDq/jpg',
    'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_6184/20210519060022_f1pi6/jpg',
    'https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_6094/20210512072525_4WsPI/jpg',
  ],
  subTitle: 'A very amazing live house.'
}

type footerData = {title: string, menuItems: {title: string, src: string}[]}[]

export const mockFooterData: footerData = [{
 title: 'Find Us on Social',
 menuItems: [{title: 'Facebook', src: 'https://www.facebook.com/'},
  {title: 'Instagram', src: 'https://www.instagram.com/'},
  {title: 'Discord', src: 'https://discord.com/'}]
},{
  title: 'mock2',
  menuItems: [{title: 'mockitem1', src: 'https://www.facebook.com/'},
   {title: 'mockitem2', src: 'https://www.instagram.com/'},
   {title: 'mockitem3', src: 'https://discord.com/'}]
 },{
  title: 'mock2',
  menuItems: [{title: 'mockitem1', src: 'https://www.facebook.com/'},
   {title: 'mockitem2', src: 'https://www.instagram.com/'},
   {title: 'mockitem3', src: 'https://discord.com/'}]
 },{
  title: 'mock2',
  menuItems: [{title: 'mockitem1', src: 'https://www.facebook.com/'},
   {title: 'mockitem2', src: 'https://www.instagram.com/'},
   {title: 'mockitem3', src: 'https://discord.com/'}]
 },]