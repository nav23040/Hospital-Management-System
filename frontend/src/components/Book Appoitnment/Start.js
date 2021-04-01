
import './Start.css';
import Check from './Checkout'
import Pr from './card'
export default function Start(props)
 {

  return (
    <>
    
    <div className="row">
     
    <div className="column">
    < Pr />
    </div>
    <div className="column"  style = {{display: "flex",justifyContent: "center",alignItems: "center" }}>
    < Check />
    </div>
    </div>
    </>
  );
}

// export default Start;
