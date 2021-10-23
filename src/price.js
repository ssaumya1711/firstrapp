import React from "react";

export default function PriceCard(props){
    return(
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.packtitle}</h5>
            <h6 class="card-price text-center">{props.data.price}<span class="period">{props.data.period}</span></h6>
            <hr/>
            <ul class="fa-ul">
                {
                    props.data.features.map((plan) => {
                        return <li className={plan.dis ? 'text-muted' : ''}><span class="fa-li"><i class={`fas ${plan.dis ? 'fa-times' : 'fa-check'}`}></i></span>{
                                        plan.isb ? <strong>{plan.name}</strong> : <span>{plan.name}</span>
                                    }</li>
                    })
                }
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    )
}