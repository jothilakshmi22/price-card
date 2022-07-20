import React from "react";
// import App from '../App'

function NewCompond(props) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {props.data.First}
          </h5>
          <h6 class="card-price text-center">
            ${props.data.price}
            <span class="period">/month</span>
          </h6>
          <hr />

          <ul class="fa-ul">
            <li class={props.data.UserEnab ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  class={props.data.UserEnab ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {props.data.userbold ? <b>{props.data.User}</b> : props.data.User}
            </li>

            <li class={props.data.storageEnab ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  class={
                    props.data.storageEnab ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.data.Storage}
            </li>

            <li class={props.data.publicEnab ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  class={
                    props.data.publicEnab ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.data.public}
            </li>
            <li class={props.data.accessEnab ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  class={
                    props.data.accessEnab ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.data.Access}
            </li>
            <li class={props.data.privateEnab ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  class={
                    props.data.privateEnab ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.data.Private}
            </li>
            <li class={props.data.phoneEnab ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  class={props.data.phoneEnab ? "fas fa-check" : "fas fa-times"}
                ></i>
              </span>
              {props.data.Phone}
            </li>
            <li class={props.data.subdomainEnab ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  class={
                    props.data.subdomainEnab ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.data.Subdomain}
            </li>
            <li class={props.data.statusEnab ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  class={
                    props.data.statusEnab ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.data.Status}
            </li>
          </ul>

          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
          {/* </> */}
        </div>
      </div>
    </div>
  );
}

export default NewCompond;
