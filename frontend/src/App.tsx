import Navbar from "./components/Navbar";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <div className="w-full h-dvh flex bg-base-100 flex-0 flex-col">
      <Navbar />
      <Wishlist
        name="My Wishlist"
        items={[
          { name: "Wireless Headphones", link: "https://example.com/headphones", price: 99.99 },
          { name: "Smart Watch", link: "https://example.com/smartwatch", price: 199.99 },
          { name: "E-Reader", link: "https://example.com/ereader", price: 129.99 },
        ]}
      />
    </div>
  );
}

export default App;
