import logo from './logo.svg';
import './App.css';
import PriceCard from './price';
import testUtils from 'react-dom/test-utils';

function App() {
  let details = [
    {
      packtitle: "FREE",
      price: "$0",
      period:"/month",
      features:[
      {
        name:"Single USer",
        dis: false
      },
      {
        name:"5GB Storage",
        dis: false
      },
      {
        name:"Unlimited Public Projects",
        dis: false
      },
      {
        name:"Community Access",
        dis: false
      },
      {
        name:"Unlimited Private Projects",
        dis: true
      },
      {
        name:"Dedicated Phone Support",
        dis: true
      },
      {
        name:"Free Subdomain",
        dis: true
      },
      {
        name:"Monthly Status Reports",
        dis: true
      }  
     ]
    },
    {
      packtitle:"PLUS",
      price:"$9",
      period:"/month",
      features:[
        {
          name:"5 Users",
          dis:false,
          isb: true
        },
        {
          name:"50GB Storage",
          dis:false
        },
        {
          name:"Unlimited Public Projects",
          dis:false
        },
        {
          name:"Community Access",
          dis:false
        },
        {
          name:"Unlimited Private Projects",
          dis:false
        },
        {
          name:"Dedicated Phone Support",
          dis:false
        },
        {
          name:"Free Subdomain",
          dis:false
        },
        {
          name:"Monthly Status Reports",
          dis:true
        }
      ]
    },
    {
      packtitle:"PRO",
      price:"$49",
      period:"/month",
      features:[
        {
          name:"Unlimited Users",
          dis:false,
          isb: true
        },
        {
          name:"150GB Storage",
          dis:false
        },
        {
          name:"Unlimited Public Projects",
          dis:false
        },
        {
          name:"Community Access",
          dis:false
        },
        {
          name:"Unlimited Private Projects",
          dis:false
        },
        {
          name:"Dedicated Phone Support",
          dis:false
        },
        {
          name:"Unlimited Free Subdomain",
          dis:false,
          isb: true
        },
        {
          name:"Monthly Status Reports",
          dis:false
        }
      ]
    }
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            details.map((obj) => {
              return <PriceCard data = {obj}></PriceCard>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
