import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";

import "./Ganesha.css";

export default function CategoryImages() {
  const { categoryId } = useParams();

  const baseUrl = "https://aalayamapp.com/Backend";
  const authKey = "A6iWq]M}Z3bHtnn{kyBPAA";

  const [category, setCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategoryData();
  }, [categoryId]);

  const fetchCategoryData = async () => {
    try {
      setLoading(true);

      // ================= CATEGORY =================

      const categoryRes = await axios.post(
        `${baseUrl}/websitecategory`,
        { action: "get" },
        {
          headers: {
            authentication: authKey,
          },
        }
      );

      let selectedCategory = null;

      if (categoryRes.data.Response?.Success === "1") {
        const categoryList =
          categoryRes.data.Response.Data || [];

        selectedCategory = categoryList.find(
          (item) =>
            Number(item.category_id) === Number(categoryId) &&
            item.type === "category" &&
            Number(item.status) === 1
        );

        setCategory(selectedCategory || null);
      }

      // ================= IMAGES =================

      const imageRes = await axios.post(
        `${baseUrl}/websiteImage`,
        { action: "get" },
        {
          headers: {
            authentication: authKey,
          },
        }
      );

      if (imageRes.data.Response?.Success === "1") {
        const categoryImages =
          imageRes.data.Response.Data
            .filter(
              (item) =>
                Number(item.category_id) ===
                  Number(categoryId) &&
                Number(item.status) === 1
            )
            .sort(
              (a, b) =>
                Number(a.sort_order || 0) -
                Number(b.sort_order || 0)
            );

        setImages(categoryImages);
      } else {
        setImages([]);
      }
    } catch (error) {
      console.error(
        "Error loading category images:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ganesha-page py-5">

      <div className="container">

        {/* Back Button */}

        <Link
          to="/gallery"
          className="ganesha-back-btn text-decoration-none"
        >
          <ArrowLeft size={20} />

          <span className="ms-2">
            Back to Gallery
          </span>
        </Link>

        {/* Heading */}

        <div className="text-center mb-5">

          <h1 className="ganesha-title">
            {category?.title || "Wallpapers"}
          </h1>

          <p className="ganesha-subtitle">
            Download beautiful HD{" "}
            {category?.title || ""} wallpapers for free.
          </p>

        </div>

        {/* Images */}

        {loading ? (

          <div className="text-center py-5">
            <div className="spinner-border"></div>
          </div>

        ) : images.length > 0 ? (

          <div className="row g-4">

            {images.map((item, index) => (

              <div
                className="col-lg-3 col-md-4 col-sm-6"
                key={item.id}
              >

                <div className="card ganesha-card border-0">

                  <img
                    src={`${baseUrl}${item.image_path}`}
                    alt={`${category?.title || "Image"} ${
                      index + 1
                    }`}
                    className="card-img-top"
                  />

                  <div className="ganesha-overlay"></div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="text-center text-muted py-5">
            No images available for this category.
          </div>

        )}

      </div>

    </section>
  );
}