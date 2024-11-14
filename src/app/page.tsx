// components
import Header from '@/components/about/Header'
import SocialList from '@/components/about/SocialList'
import { Divider } from '@/components/common/Divider/Divider'
// data
import about from '@/data/about.json'

export default function AboutPage() {
  return (
    <main>
      <Header author={about.author} introduce={about.introduce} />
      <Divider />
      <SocialList links={about.social.links} />
    </main>
  )
}
