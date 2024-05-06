import React from "react";
import { NXT, PREV, SURPRISE } from "./aaction/ReviewAction";
import { useDispatch, useSelector } from "react-redux";

const ReviewRedux = () => {
  const s = useSelector((y) => y.review);
  const dis = useDispatch();

  const PREVIOUS = () => {
    dis(PREV());
  };
  const NEXT = () => {
    dis(NXT());
  };
  const SURP = () => {
    dis(SURPRISE());
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
                <img src={s.data[s.index].img} id="person-img" alt="" />
              </div>
              <h4 id="author">{s.data[s.index].name}</h4>
              <p id="job">{s.data[s.index].job}</p>
              <p id="info">{s.data[s.index].text}</p>
              <p id="ids">{s.data[s.index].id}</p>

              <div class="button-container">
                <button
                  class="prev-btn"
                  onClick={() => {
                    PREVIOUS(s.index);
                  }}
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button
                  class="next-btn"
                  onClick={() => {
                    NEXT(s.index);
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>

              <button
                class="random-btn"
                onClick={() => {
                  SURP(s.index);
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


export default ReviewRedux
