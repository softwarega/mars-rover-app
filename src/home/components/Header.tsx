const Header: React.FC = () => (
  <div className="header flex h-1/3 xl:h-1/4 w-full items-center justify-center">
    <div className="flex items-center justify-center flex-col bg-black opacity-60 p-6">
      <h1 className="text-white text-3xl md:text-6xl">Mars Rover Photos</h1>
      <p className="text-white text-md md:text-2xl text-justify">
        Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars
      </p>
    </div>
  </div>
)

export { Header }
