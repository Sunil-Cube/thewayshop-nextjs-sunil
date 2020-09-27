import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroSilder from '../components/Layout/components/HeroSilder/HeroSilder'
import ShopCategories from '../components/Layout/components/ShopCategories/ShopCategories.container'
import FeaturedProducts from '../components/Layout/components/FeaturedProducts/FeaturedProducts'

export default function Home() {
  return (
    <div>
      <HeroSilder/>
      <ShopCategories/>
      <FeaturedProducts/>
    </div>
  )
}
