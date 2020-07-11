import React from "react";

/* class Card extends Component {
    render(){
        return(
            <div className="f1 tc">A Card</div>
        )
    }
}
 */
const Card = (props) => {
  const { id, name, username, email } = props.robotData;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt={username} src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
