import "./Gallery.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Gallery() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const baseUrl = "https://aalayamapp.com/Backend";
  const authKey = "A6iWq]M}Z3bHtnn{kyBPAA";

  const [categories, setCategories] = useState([]);
  const [websiteImages, setWebsiteImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= Fetch Categories =================
  const fetchCategories = async () => {
    try {
      const res = await axios.post(
        `${baseUrl}/websitecategory`,
        { action: "get" },
        {
          headers: {
            authentication: authKey,
          },
        }
      );

      if (res.data.Response?.Success === "1") {
        const data = res.data.Response.Data || [];

        // Main categories only + active categories
        const activeCategories = data.filter(
          (category) =>
            category.type === "category" &&
            Number(category.status) === 1
        );

        setCategories(activeCategories);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  };

  // ================= Fetch Images =================
  const fetchImages = async () => {
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
        const activeImages = (res.data.Response.Data || []).filter(
          (image) => Number(image.status) === 1
        );

        setWebsiteImages(activeImages);
      } else {
        setWebsiteImages([]);
      }
    } catch (error) {
      console.error("Error fetching website images:", error);
      setWebsiteImages([]);
    }
  };

  // ================= Load Data =================
  useEffect(() => {
    const loadGallery = async () => {
      setLoading(true);

      await Promise.all([
        fetchCategories(),
        fetchImages(),
      ]);

      setLoading(false);
    };

    loadGallery();
  }, []);


  // sumathi 19sep26 start

  // ================= Get Category Image =================
  // const getCategoryImage = (categoryId) => {
  //   const categoryImages = websiteImages
  //     .filter(
  //       (image) =>
  //         Number(image.category_id) === Number(categoryId)
  //     )
  //     .sort(
  //       (a, b) =>
  //         Number(a.sort_order || 0) -
  //         Number(b.sort_order || 0)
  //     );

  //   return categoryImages.length > 0
  //     ? `${baseUrl}${categoryImages[0].image_path}`
  //     : null;
  // };
//sumathi end
  return (
    <section className="gallery-page">

      {/* ================= Hero Banner ================= */}

      <section className="gallery-banner">

        <div className="gallery-banner-overlay"></div>

        <div className="container">

          <div className="gallery-banner-content">

            <div className="gallery-banner-divider">
              <span></span>
              <i className="bi bi-flower1"></i>
              <span></span>
            </div>

            <h1 className="gallery-banner-title">
              {t("galleryPage.heroTitle")}
            </h1>

            <p className="gallery-banner-description">
              {t("galleryPage.heroDescription")}
            </p>

            <button
              className="btn gallery-banner-button"
              onClick={() =>
                document
                  .querySelector(".gallery-heading-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("galleryPage.exploreCollection")}

              <i className="bi bi-arrow-right ms-2"></i>
            </button>

          </div>

        </div>

      </section>


      {/* ================= Heading ================= */}

      <section className="gallery-heading-section">

        <div className="container text-center">

          <div className="gallery-small-divider">
            <i className="bi bi-flower1"></i>
          </div>

          <h2 className="gallery-heading-title">
            {t("galleryPage.title")}
          </h2>

          <p className="gallery-heading-text">
            {t("galleryPage.description")}
          </p>

        </div>

      </section>


      {/* ================= Cards ================= */}
      {/* sumathi 19sep26 start */}
      {/* <section className="pb-5">

        <div className="container">

          <div className="row g-4">

            {loading ? (

              <div className="col-12 text-center py-5">
                <div className="spinner-border"></div>
              </div>

            ) :
            (

              categories.map((category) => {

                const categoryImage = getCategoryImage(
                  category.category_id
                );

                // Category-ku image illana card show panna vendam
                if (!categoryImage) {
                  return null;
                }

                return (
                  <div
                    className="col-lg-4 col-md-6"
                    key={category.category_id}
                    data-aos="zoom-in"
                    data-aos-duration="800"
                  >

                    <div
                      className="card gallery-card border-0"
                      onClick={() =>
                        navigate(
                          `/gallery/category/${category.category_id}`
                        )
                      }
                    >

                      <img
                        src={categoryImage}
                        alt={category.title}
                        className="card-img-top"
                      />

                      <div className="card-img-overlay-bottom">

                        <h4>
                          {category.title}
                        </h4>

                      </div>

                    </div>

                  </div>
                );
              })

            )}

          </div>

        </div>

      </section> */}
      {/* sumathi end */}

      <section className="pb-5">

  <div className="container">

    <div className="row g-4">

      {loading ? (

        <div className="col-12 text-center py-5">
          <div className="spinner-border"></div>
        </div>

      ) : (

        categories.map((category) => {

          return (
            <div
              className="col-lg-4 col-md-6"
              key={category.category_id}
              data-aos="zoom-in"
              data-aos-duration="800"
            >

              <div
                className="card gallery-card border-0"
                onClick={() =>
                  navigate(
                    `/gallery/category/${category.category_id}`
                  )
                }
              >

                {/* <img
                  src={`${baseUrl}${category.category_image}`}
                  alt={category.title}
                  className="card-img-top"
                /> */}
                <img
  src={
    category.category_image?.startsWith("http")
      ? category.category_image
      : `${baseUrl}${category.category_image}`
  }
  alt={category.title}
  className="card-img-top"
  onError={(e) => {
    console.log("Image URL:", e.currentTarget.src);
    console.log("Category:", category);
  }}
/>

                <div className="card-img-overlay-bottom">

                  <h4>
                    {category.title}
                  </h4>

                </div>

              </div>

            </div>
          );

        })

      )}

    </div>

  </div>

</section>

    </section>
  );
}








//sumathi 19sep26
// import ganesha from "../../assets/images/ganesha/ganesha.jpg";
// import saibaba from "../../assets/images/saibaba/saibaba.jpg";
// import durga from "../../assets/images/durga/durga.jpg";
// import karupu from "../../assets/images/karupu/karupu.jpg";
// import shiva from "../../assets/images/shiva/shiva.jpg";
// import ram from "../../assets/images/ram/ram.jpg";
// import ayyappa from "../../assets/images/ayyappa/ayyappa.jpg";
// import lakshmi from "../../assets/images/lakshmi/lakshmi.jpg";
// import maruthi from "../../assets/images/maruthi/maruthi.jpg";
// import saraswati from "../../assets/images/saraswati/saraswati.jpg";
// import muruga from "../../assets/images/muruga/muruga.webp";
// import azhagar from "../../assets/images/azhagar/azhagar.webp";

// import "./Gallery.css";

// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function Gallery() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const images = [
//     {
//       id: 1,
//       key: "ganesha",
//       image: ganesha,
//       path: "/gallery/ganesha",
//     },
//     {
//       id: 2,
//       key: "shiva",
//       image: shiva,
//       path: "/gallery/shiva",
//     },
//     {
//       id: 3,
//       key: "saibaba",
//       image: saibaba,
//       path: "/gallery/saibaba",
//     },
//     {
//       id: 4,
//       key: "durga",
//       image: durga,
//       path: "/gallery/durga",
//     },
//     {
//       id: 5,
//       key: "karupu",
//       image: karupu,
//       path: "/gallery/karupu",
//     },
//     {
//       id: 6,
//       key: "ram",
//       image: ram,
//       path: "/gallery/ram",
//     },
//     {
//       id: 7,
//       key: "ayyappa",
//       image: ayyappa,
//       path: "/gallery/ayyappa",
//     },
//     {
//       id: 8,
//       key: "maruthi",
//       image: maruthi,
//       path: "/gallery/maruthi",
//     },
//     {
//       id: 9,
//       key: "saraswati",
//       image: saraswati,
//       path: "/gallery/saraswati",
//     },
//     {
//       id: 10,
//       key: "lakshmi",
//       image: lakshmi,
//       path: "/gallery/lakshmi",
//     },
//     {
//       id: 11,
//       key: "muruga",
//       image: muruga,
//       path: "/gallery/muruga",
//     },
//     {
//       id: 12,
//       key: "azhagar",
//       image: azhagar,
//       path: "/gallery/azhagar",
//     },
//   ];

//   return (
//     <section className="gallery-page">

//       {/* ================= Hero Banner ================= */}

//       <section className="gallery-banner">

//         <div className="gallery-banner-overlay"></div>

//         <div className="container">

//           <div className="gallery-banner-content">

//             <div className="gallery-banner-divider">
//               <span></span>
//               <i className="bi bi-flower1"></i>
//               <span></span>
//             </div>

//             <h1 className="gallery-banner-title">
//               {t("galleryPage.heroTitle")}
//             </h1>

//             <p className="gallery-banner-description">
//               {t("galleryPage.heroDescription")}
//             </p>

//             <button
//               className="btn gallery-banner-button"
//               onClick={() =>
//                 document
//                   .querySelector(".gallery-heading-section")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               {t("galleryPage.exploreCollection")}

//               <i className="bi bi-arrow-right ms-2"></i>
//             </button>

//           </div>

//         </div>

//       </section>


//       {/* ================= Heading ================= */}

//       <section className="gallery-heading-section">

//         <div className="container text-center">

//           <div className="gallery-small-divider">
//             <i className="bi bi-flower1"></i>
//           </div>

//           <h2 className="gallery-heading-title">
//             {t("galleryPage.title")}
//           </h2>

//           <p className="gallery-heading-text">
//             {t("galleryPage.description")}
//           </p>

//         </div>

//       </section>


//       {/* ================= Cards ================= */}

//       <section className="pb-5">

//         <div className="container">

//           <div className="row g-4">

//             {images.map((item) => (

//               <div
//                 className="col-lg-4 col-md-6"
//                 key={item.id}
//                 data-aos="zoom-in"
//                 data-aos-duration="800"
//               >

//                 <div
//                   className="card gallery-card border-0"
//                   onClick={() => navigate(item.path)}
//                 >

//                   <img
//                     src={item.image}
//                     alt={t(`galleryPage.items.${item.key}`)}
//                     className="card-img-top"
//                   />

//                   <div className="card-img-overlay-bottom">

//                     <h4>
//                       {t(`galleryPage.items.${item.key}`)}
//                     </h4>

//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//     </section>
//   );
// }