import SideMenu from "./components/main/menu/sidemenu"
import Payment from "./components/main/payments/payment"

function App() {

  return (
    <div className="flex flex-row overflow-x-hidden">
      <div>
        <SideMenu />
      </div>
      <div className="bg-[#fafafa] min-w-[300px] md:w-screen min-h-screen">
        <Payment />
      </div>
    </div>
  )
}

export default App
