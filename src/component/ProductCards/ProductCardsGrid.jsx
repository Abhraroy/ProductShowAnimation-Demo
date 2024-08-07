import React from "react";
import "./ProductCardsGrid.css";
import ProductCard from "../ProductCardShow/ProductCard";
import { useEffect, useState } from "react";
import Product from "./Product";

function ProductCardsGrid() {
  const [Initial, setInitial] = useState([
    {
      name: "AirJordan",
      img: "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      name: "AirForce",
      img: "https://cdn.pixabay.com/photo/2024/01/26/06/49/elderly-man-8533488_960_720.png",
    },
    {
      name: "Dunk",
      img: "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      name: "Blazer",
      img: "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      name: "AirJordan",
      img: "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      name: "AirJordan",
      img: "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      name: "AirJordan",
      img: "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      name: "AirJordan",
      img: "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
  ]);
  const [ShowInitial, setShowInitial] = useState([
    {
      firstslide:
        "https://cdn.pixabay.com/photo/2024/01/26/06/49/elderly-man-8533488_960_720.png",
      secondslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      thirdslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fourthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fifthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      firstslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      secondslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      thirdslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fourthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fifthslide:
        "https://cdn.pixabay.com/photo/2024/01/26/06/49/elderly-man-8533488_960_720.png",
    },
    {
      firstslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      secondslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      thirdslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fourthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fifthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      firstslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      secondslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      thirdslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fourthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fifthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      firstslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      secondslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      thirdslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fourthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fifthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      firstslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      secondslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      thirdslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fourthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fifthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      firstslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      secondslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      thirdslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fourthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fifthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
    {
      firstslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      secondslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      thirdslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fourthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
      fifthslide:
        "https://cdn.pixabay.com/photo/2024/03/26/15/12/sunset-8657085_1280.jpg",
    },
  ]);
  useEffect(() => {
    // const Product = document.querySelectorAll('.product')
    // const Target = document.querySelector('.produced')

    // const closebtn = document.querySelector('.closebtn')
    // Product.forEach((item,index) => {
    //   if(index%2===0){
    //     item.addEventListener('click',()=>{
    //         Target.style.opacity=1;
    //         Target.classList.remove("pointerevent");
    //         closebtn.style.opacity=1;
    //         console.log("hey");
    //     })
    //     }
    // });

    const TargetProductCardSwipe = document.querySelectorAll(".boom");
    const Product = document.querySelectorAll(".product");
    const Target = document.querySelector(".produced");

    const closebtn = document.querySelector(".closebtn");
    Product.forEach((item, index) => {
      item.addEventListener("click", () => {
        Target.style.opacity = 1;
        Target.classList.remove("pointerevent");
        closebtn.style.opacity = 1;
        console.log("hey");
        console.log(Product);
        console.log(TargetProductCardSwipe);
        console.log(index);
        TargetProductCardSwipe[index].style.opacity = 1;
        TargetProductCardSwipe[index].style.pointerEvents = "auto";

        closebtn.addEventListener("click", () => {
          Target.style.opacity = 0;
          Target.classList.add("pointerevent");
          closebtn.style.opacity = 0;
          TargetProductCardSwipe[index].style.pointerEvents = "none";
          TargetProductCardSwipe[index].style.opacity = 0;
        });
      });
    });

    return () => {};
  }, []);
  return (
    <>
      <div className="closebtn"></div>
      <div className="produced pointerevent">
        {ShowInitial.map((i) => {
          console.log(i);
          return (
            <div className="boom">
              <ProductCard
                firstslide={i.firstslide}
                secondslide={i.secondslide}
                thirdslide={i.thirdslide}
                fourthslide={i.fourthslide}
                fifthslide={i.fifthslide}
              />
            </div>
          );
        })}
      </div>
      <div className="Container">
        <div className="ProductContainer">
          {Initial.map((i) => {
            return <Product name={i.name} img={i.img} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductCardsGrid;
