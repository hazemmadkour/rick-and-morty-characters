import { statuses } from "constants/enums";
import { CharacterModel } from "models/CharacterModel";
import "./Character.scss";

const Character: React.FC<{ data: CharacterModel }> = ({ data }) => {
  let status = "unknown";
  if (data.status === statuses.alive) status = "alive";
  else if (data.status === statuses.dead) status = "dead";

  return (
    <div className="character">
      <img alt={data.name} src={data.image} className="character-img" />
      <div className="character-details">
        <h1 className="character-details-header">{data.name}</h1>
        <div className="character-details-info">
          <div
            className={`character-details-status character-details-status-${status}`}
          />
          <span>{`${data.status} - ${data.species}`}</span>
        </div>
        <div className="character-details-info">
          <div className="character-details-info-title">
            Last known location:
          </div>
          <div>{data.location.name}</div>
        </div>
        {data.type ? (
          <div className="character-details-info">
            <div className="character-details-info-title">Type:</div>
            <div>{data.type}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Character;
