import React from "react";
import { Link } from "react-router-dom";
export default function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row  align-items-center">
          <div className="col-5">
            <img src={imageUrl} alt="" />
          </div>
          <div className="col-2"></div>
          <div className="col-5 p-5">
            <h2>{productName}</h2>
            <p className="text-muted mt-5 ">
              {productDescription}
            </p>
            <div className="mb-4">
            <Link className="pe-5"  style={{ textDecoration: "none" }} to={tryDemo}>
              Try demo<i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link className="ps-5" style={{ textDecoration: "none" }} to={learnMore}>LearnMore
              <i class="fa-solid fa-arrow-right"></i>
            </Link>
            </div>
            <div >
            <Link  className="pe-5" style={{ textDecoration: "none" }} to="">
              <img  src="media/images/googlePlayBadge.svg" alt="" />
            </Link>
            <Link style={{ textDecoration: "none" }} to="">
             <img src="media/images/appstoreBadge.svg" alt="" />
            
            </Link>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
