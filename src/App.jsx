import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Common Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SplashScreen from "./components/SplashScreen/SplashScreen";

// Home Components
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Crafted from "./components/Crafted/Crafted";

// Contact Us
import Contactus from "./components/Contactus/Contactus";

// Pages

import About from "./Pages/About/About";
import Features from "./Pages/Features/Features";
import Gallery from "./Pages/Gallery/Gallery";
import Testimonials from "./Pages/Testimonials/Testimonials";

// Gallery Category images
import CategoryImages from "./Pages/Gallery/CategoryImages";
/* =====================================================
   LAYOUT
===================================================== */

function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* Page Content */}
      {children}

      {/* Footer */}
      <Footer />
    </>
  );
}

/* =====================================================
   HOME
===================================================== */

function Home() {
  return (
    <>
      <Hero />

      <Categories />

      <Crafted />
    </>
  );
}

/* =====================================================
   APP
===================================================== */

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* =================================================
            VIDEO
        ================================================= */}

        

        {/* =================================================
            ABOUT
        ================================================= */}

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        {/* =================================================
            FEATURES
        ================================================= */}

        <Route
          path="/features"
          element={
            <Layout>
              <Features />
            </Layout>
          }
        />

        {/* =================================================
            GALLERY
        ================================================= */}

        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />

        {/* =================================================
            TESTIMONIALS
        ================================================= */}

        <Route
          path="/testimonials"
          element={
            <Layout>
              <Testimonials />
            </Layout>
          }
        />

        {/* =================================================
            CONTACT US
            Separate Page
        ================================================= */}

        <Route
          path="/contactus"
          element={
            <Layout>
              <Contactus />
            </Layout>
          }
        />

        {/* =================================================
            GALLERY CATEGORY image 
        ================================================= */}

 <Route
  path="/gallery/category/:categoryId"
  element={
    <Layout>
      <CategoryImages />
    </Layout>
  }
/>

</Routes>
    </BrowserRouter>
  );
}

export default App;








//sumathi 19sep26
// import "./i18n";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

// // Common Components
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import SplashScreen from "./components/SplashScreen/SplashScreen";

// // Home Components
// import Hero from "./components/Hero/Hero";
// import Categories from "./components/Categories/Categories";
// import Crafted from "./components/Crafted/Crafted";

// // Contact Us
// import Contactus from "./components/Contactus/Contactus";

// // Pages

// import About from "./Pages/About/About";
// import Features from "./Pages/Features/Features";
// import Gallery from "./Pages/Gallery/Gallery";
// import Testimonials from "./Pages/Testimonials/Testimonials";

// // Gallery Category Pages
// import Ganesha from "./Pages/Gallery/Ganesha";
// import Shiva from "./Pages/Gallery/Shiva";
// import Ayyappa from "./Pages/Gallery/Ayyappa";
// import Saibaba from "./Pages/Gallery/Saibaba";
// import Durga from "./Pages/Gallery/Durga";
// import Karupu from "./Pages/Gallery/Karupu";
// import Ram from "./Pages/Gallery/Ram";
// import Maruthi from "./Pages/Gallery/Maruthi";
// import Saraswati from "./Pages/Gallery/Saraswati";
// import Lakshmi from "./Pages/Gallery/Lakshmi";
// import Muruga from "./Pages/Gallery/Muruga";
// import Azhagar from "./Pages/Gallery/Azhagar";

// /* =====================================================
//    LAYOUT
// ===================================================== */

// function Layout({ children }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <SplashScreen />;
//   }

//   return (
//     <>
//       <ScrollToTop />

//       {/* Header */}
//       <Header />

//       {/* Page Content */}
//       {children}

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }

// /* =====================================================
//    HOME
// ===================================================== */

// function Home() {
//   return (
//     <>
//       <Hero />

//       <Categories />

//       <Crafted />
//     </>
//   );
// }

// /* =====================================================
//    APP
// ===================================================== */

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* =================================================
//             HOME
//         ================================================= */}

//         <Route
//           path="/"
//           element={
//             <Layout>
//               <Home />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             VIDEO
//         ================================================= */}

        

//         {/* =================================================
//             ABOUT
//         ================================================= */}

//         <Route
//           path="/about"
//           element={
//             <Layout>
//               <About />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             FEATURES
//         ================================================= */}

//         <Route
//           path="/features"
//           element={
//             <Layout>
//               <Features />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY
//         ================================================= */}

//         <Route
//           path="/gallery"
//           element={
//             <Layout>
//               <Gallery />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             TESTIMONIALS
//         ================================================= */}

//         <Route
//           path="/testimonials"
//           element={
//             <Layout>
//               <Testimonials />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             CONTACT US
//             Separate Page
//         ================================================= */}

//         <Route
//           path="/contactus"
//           element={
//             <Layout>
//               <Contactus />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - GANESHA
//         ================================================= */}

//         <Route
//           path="/gallery/ganesha"
//           element={
//             <Layout>
//               <Ganesha />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - SHIVA
//         ================================================= */}

//         <Route
//           path="/gallery/shiva"
//           element={
//             <Layout>
//               <Shiva />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - AYYAPPA
//         ================================================= */}

//         <Route
//           path="/gallery/ayyappa"
//           element={
//             <Layout>
//               <Ayyappa />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - SAIBABA
//         ================================================= */}

//         <Route
//           path="/gallery/saibaba"
//           element={
//             <Layout>
//               <Saibaba />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - DURGA
//         ================================================= */}

//         <Route
//           path="/gallery/durga"
//           element={
//             <Layout>
//               <Durga />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - KARUPU
//         ================================================= */}

//         <Route
//           path="/gallery/karupu"
//           element={
//             <Layout>
//               <Karupu />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - RAM
//         ================================================= */}

//         <Route
//           path="/gallery/ram"
//           element={
//             <Layout>
//               <Ram />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - MARUTHI
//         ================================================= */}

//         <Route
//           path="/gallery/maruthi"
//           element={
//             <Layout>
//               <Maruthi />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - SARASWATI
//         ================================================= */}

//         <Route
//           path="/gallery/saraswati"
//           element={
//             <Layout>
//               <Saraswati />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - LAKSHMI
//         ================================================= */}

//         <Route
//           path="/gallery/lakshmi"
//           element={
//             <Layout>
//               <Lakshmi />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - MURUGA
//         ================================================= */}

//         <Route
//           path="/gallery/muruga"
//           element={
//             <Layout>
//               <Muruga />
//             </Layout>
//           }
//         />

//         {/* =================================================
//             GALLERY CATEGORY - AZHAGAR
//         ================================================= */}

//         <Route
//           path="/gallery/azhagar"
//           element={
//             <Layout>
//               <Azhagar />
//             </Layout>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;