import { Content } from "./Content"
import { Header } from "./Header"

const Home: React.FC = () => (
  <div className="flex flex-col w-full h-screen">
    <Header />
    <Content />
  </div>
)

export { Home }
