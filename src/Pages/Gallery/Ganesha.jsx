import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import axios from "axios";

import "./Ganesha.css";

export default function Ganesha() {
  const baseUrl = "https://aalayamapp.com/Backend";
  const authKey = "A6iWq]M}Z3bHtnn{kyBPAA";

  const [wallpapers, setWallpapers] = useState([]);

  // Fetch Category 1 Images
  const fetchGaneshaImages = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}/websiteImage`,
        { action: "get" },
        {
          headers: {
            authentication: authKey,
          },
        }
      );

      if (res.data.Response?.Success === "1") {
        const category1Images = res.data.Response.Data
          .filter(
            (item) =>
              Number(item.category_id) === 1 &&
              Number(item.status) === 1
          )
          .sort(
            (a, b) =>
              Number(a.sort_order || 0) -
              Number(b.sort_order || 0)
          );

        setWallpapers(category1Images);
      } else {
        setWallpapers([]);
      }
    } catch (error) {
      console.error("Error loading Ganesha images:", error);
    }
  };

  useEffect(() => {
    fetchGaneshaImages();
  }, []);

  return (
    <section className="ganesha-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="ganesha-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />
          <span className="ms-2">Back to Gallery</span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="ganesha-title">
            Ganesha Wallpapers
          </h1>

          <p className="ganesha-subtitle">
            Download beautiful HD Ganesha wallpapers for free.
          </p>

        </div>

        {/* Wallpapers */}

        <div className="row g-4">

          {
            wallpapers.map((item, index) => (

              <div
                className="col-lg-3 col-md-4 col-sm-6"
                key={item.id}
              >

                <div className="card ganesha-card border-0">

                  <img
                    src={`${baseUrl}${item.image_path}`}
                    alt={`Ganesha ${index + 1}`}
                    className="card-img-top"
                  />

                  <div className="ganesha-overlay">

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}







// sumathi 19sep26
// import { Link } from "react-router-dom";
// import { ArrowLeft, Download } from "lucide-react";

// import g1 from "../../assets/images/ganesha/ganesha1.jpg";
// import g2 from "../../assets/images/ganesha/ganesha2.jpg";
// import g3 from "../../assets/images/ganesha/ganesha3.jpg";
// import g4 from "../../assets/images/ganesha/ganesha4.jpg";
// import g5 from "../../assets/images/ganesha/ganesha5.jpg";
// import g6 from "../../assets/images/ganesha/ganesha6.jpg";
// import g7 from "../../assets/images/ganesha/ganesha7.jpg";
// import g8 from "../../assets/images/ganesha/ganesha8.jpg";
// import g9 from "../../assets/images/ganesha/ganesha9.jpg";
// import g10 from "../../assets/images/ganesha/ganesha10.jpg";
// import g11 from "../../assets/images/ganesha/ganesha11.jpg";
// import g12 from "../../assets/images/ganesha/ganesha12.jpg";

// import "./Ganesha.css";

// export default function Ganesha() {

//   const wallpapers = [
//     g1,
//     g2,
//     g3,
//     g4,
//     g5,
//     g6,
//     g7,
//     g8,
//     g9,
//     g10,
//     g11,
//     g12
//   ];

//   return (

//     <section className="ganesha-page py-5">

//       <div className="container">

//         {/* Back Button */}

//         <Link
//           to="/gallery"
//           className="ganesha-back-btn text-decoration-none"
//         >
//           <ArrowLeft size={20} />
//           <span className="ms-2">Back to Gallery</span>
//         </Link>

//         {/* Heading */}

//         <div className="text-center mb-5">

//           <h1 className="ganesha-title">
//             Ganesha Wallpapers
//           </h1>

//           <p className="ganesha-subtitle">
//             Download beautiful HD Ganesha wallpapers for free.
//           </p>

//         </div>

//         {/* Wallpapers */}

//         <div className="row g-4">

//           {
//             wallpapers.map((img, index) => (

//               <div
//                 className="col-lg-3 col-md-4 col-sm-6"
//                 key={index}
//               >

//                 <div className="card ganesha-card border-0">

//                   <img
//                     src={img}
//                     alt={`Ganesha ${index + 1}`}
//                     className="card-img-top"
//                   />

//                   <div className="ganesha-overlay">

                    
                    
//                   </div>

//                 </div>

//               </div>

//             ))
//           }

//         </div>

//       </div>

//     </section>

//   );

// }