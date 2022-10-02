import { lazy, Suspense } from "react";
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
import Skeleton from "antd/lib/skeleton/Skeleton";

const Character = lazy(
  () =>
    import(/* webpackChunkName: "character" */ "components/character/Character")
);

const Pagination = lazy(
  () => import(/* webpackChunkName: "antd" */ "antd/lib/pagination/Pagination")
);

const RickAndMortyCharacters = () => {
  const disptach = useAppDispatch();
  const [pageNo, setPageNo] = useState(1);
  const characters = useAppSelector(charactersSelector);
  const charactersCount = useAppSelector(charactersCountSelector);
  const charactersloaded = useAppSelector(charactersloadedSelector);

  useEffect(() => {
    disptach(getCharacters());
  }, []);

  const onPageChange = (page: number) => {
    setPageNo(page);
    disptach(getCharacters(page));
  };

  const buildPager = () => {
    return (
      <div className="characters-pager">
        <Suspense fallback={<div />}>
          <Pagination
            current={pageNo}
            defaultCurrent={1}
            showSizeChanger={false}
            onChange={onPageChange}
            pageSize={20}
            total={charactersCount}
            disabled={!charactersloaded}
          />
        </Suspense>
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
            <Suspense
              fallback={<Skeleton style={{ width: 700, marginRight: 20 }} />}
            >
              <Character key={character.id} data={character} />
            </Suspense>
          ))
        ) : (
          <Loading />
        )}
      </div>
      {charactersloaded ? buildPager() : <></>}
    </div>
  );
};

export default RickAndMortyCharacters;
