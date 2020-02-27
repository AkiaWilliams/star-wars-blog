import React from "react";

const Cards = () => {
  return (
    <div className="container">
      <div className="row charaters p-2 bd-highlight">
        <div class="card-deck">
          <div class="card">
            <img
              src="https://statig4.akamaized.net/bancodeimagens/et/xi/1c/etxi1c3g110r11dy0140wcvei.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Luke Skywalker</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <button type="button mb-5" class="btn btn-outline-primary">
                Learn More
              </button>
              <button type="button mb-5" class="btn btn-outline-primary">
                <i class="fa fa-gratipay"></i>
              </button>

              <button type="button"></button>
            </div>
          </div>
          <div class="card">
            <img
              src="https://am22.mediaite.com/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Princess Leia</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://cnet3.cbsistatic.com/img/_XpU5t4ywu3xYvA4dClTJay1hQA=/644x0/2015/07/07/4eb66f23-8702-46ac-b15f-c61352b41ccd/hansolo2.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Han Solo</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
