import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Portfolio } from "./pages/Portfolio";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ShippingDetails } from "./pages/ShippingDetails";
// import { ProfileDetails } from "./pages/ProfileDetails";
import { ProfileManager } from "./Profile/ProfileManager";
// import { useProfileStateManagement } from "./Profile/profileStateManagement";
import { MyProfile } from "./pages/MyProfileCopy";
import Dynamic from "./pages/dynamic";

function App() {
  // const [profileState, profileActions] = useProfileStateManagement();

  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <ProfileManager>
            <Routes>
              <Route path="entry" element={<Home />} />
              <Route path="entry/store" element={<Store />} />
              <Route path="entry/portfolio" element={<Portfolio />} />
              <Route
                path="entry/shipping-details"
                element={<ShippingDetails />}
              />
              <Route path="entry/profile" element={<MyProfile />} />
              <Route path="entry/dynamic" element={<Dynamic />} />
            </Routes>
          </ProfileManager>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
