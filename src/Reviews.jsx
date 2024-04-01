import React, { useState } from "react";
import { reviews } from "./Review";

const Reviews = () => {
  const [data, setData] = useState(reviews);
  const [index, setIndex] = useState(0);

  const next = (index) => {
    if (index == data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const pre = (index) => {
    if (index <= 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const Surprise = () => {
    setIndex(0);
  };
  return (
    <div>
      {
        <main>
          <section class="container">
            <div class="title">
              <h2>our reviews</h2>
              <div class="underline"></div>
            </div>

            <article class="review">
              <div class="img-container">
                <img src={data[index].img} id="person-img" alt="" />
              </div>
              <h4 id="author">{data[index].name}</h4>
              <p id="job">{data[index].job}</p>
              <p id="info">{data[index].text}</p>
              <p id="ids">{data[index].id}</p>

              <div class="button-container">
                <button
                  class="prev-btn"
                  onClick={() => {
                    pre(index);
                  }}
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button
                  class="next-btn"
                  onClick={() => {
                    next(index);
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>

              <button
                class="random-btn"
                onClick={() => {
                  Surprise();
                }}
              >
                surprise me
              </button>
            </article>
          </section>
        </main>
      }
    </div>
  );
};

export default Reviews;
