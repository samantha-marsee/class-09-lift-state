import BusinessCard from './components/BusinessCard'
import ImageSelector from './components/ImageSelector'
import Gallery from './components/Gallery'
import Accordion from './components/Accordion'

export default function Home() {
  return (
    <main>
      <h2>Business Card</h2>
      <BusinessCard
        image="/images/cornell-seal-black.svg"
        name="Ezra Cornell"
        email="ezra@cornell.edu"
      />
      <ImageSelector />

      <h2>Gallery Example</h2>
      <Gallery />

      <h2>Accordion Example</h2>
      <Accordion />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
