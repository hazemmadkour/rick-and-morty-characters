import { statuses } from "constants/enums";
import { CharacterModel } from "models/CharacterModel";
import "./Character.scss";

const Character: React.FC<{ data: CharacterModel }> = ({ data }) => {
  let status = "unknown";
  if (data.status === statuses.alive) status = "alive";
  else if (data.status === statuses.dead) status = "dead";

  return (
    <div className="character">
      <img data-testId="character-img" alt={data.name} src={data.image} className="character-img" />
      <div className="character-details">
        <h1 data-testId="character-name" className="character-details-header">{data.name}</h1>
        <div className="character-details-info">
          <div
            className={`character-details-status character-details-status-${status}`}
          />
          <span data-testId="character-info">{`${data.status} - ${data.species}`}</span>
        </div>
        <div className="character-details-info">
          <div className="character-details-info-title">
            Last known location:
          </div>
          <div data-testId="character-location" className="character-details-info-value" title={data.location.name}>{data.location.name}</div>
        </div>
        {data.type ? (
          <div className="character-details-info">
            <div className="character-details-info-title">Type:</div>
            <div data-testId="character-type" className="character-details-info-value" title={data.type}>{data.type}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Character;
