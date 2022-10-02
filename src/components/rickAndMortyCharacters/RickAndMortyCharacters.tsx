import Pagination from "antd/lib/pagination/Pagination";
import Character from "components/character/Character";
import Loading from "components/common/loading/Loading";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { useEffect } from "react";
import { useState } from "react";
import { getCharacters } from "store/rickAndMortyCharacter/rickAndMortyCharacterActions";
import {
  charactersCountSelector,
  charactersloadedSelector,
  charactersSelector,
} from "store/rickAndMortyCharacter/rickAndMortyCharacterSelector";
import "./RickAndMortyCharacters.scss";

const RickAndMortyCharacters = () => {
  const disptach = useAppDispatch();
  const [pageNo, setPageNo] = useState(1);
  const characters = useAppSelector(charactersSelector);
  const charactersCount = useAppSelector(charactersCountSelector);
  const charactersloaded = useAppSelector(charactersloadedSelector);

  // useEffect(() => {
  //   disptach(getCharacters());
  // }, []);

  // useEffect(() => {
  //   disptach(getCharacters(pageNo));
  // }, [pageNo]);

  const onPageChange = (page: number) => {
    setPageNo(page);
  };

  const buildPager = () => {
    return (
      <div className="characters-pager">
        <Pagination
          current={pageNo}
          defaultCurrent={1}
          showSizeChanger={false}
          onChange={onPageChange}
          pageSize={20}
          total={charactersCount}
          disabled={!charactersloaded}
        />
      </div>
    );
  };

  return (
    <div className="characters">
      <div className="characters-title">Rick And Morty Characters</div>
      {buildPager()}
      <div className="characters-list">
        {charactersloaded ? (
          characters.map((character) => (
            <Character key={character.id} data={character} />
          ))
        ) : (
          <Loading />
        )}
      </div>
      {charactersloaded?buildPager():<></>}
    </div>
  );
};

export default RickAndMortyCharacters;
