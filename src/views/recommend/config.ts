import { Settings } from 'react-slick';
import styles from './index.module.scss';

export const slickSettings = {
  dots: true,
  dotsClass: styles['slick-dots'],
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500, // 轮播切换速度
  autoplaySpeed: 3000, // 轮播速度
  cssEase: 'linear',
  swipe: true,
  lazyLoad: (true as any) as Settings['lazyLoad']
};
