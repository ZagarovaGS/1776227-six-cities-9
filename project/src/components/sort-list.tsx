import { useState } from 'react';
import { SortMethods } from '../const';

const sortMethods: string[] = Object.values(SortMethods);
type SortListType = {
  sortOptionsHandle: (sortOption: string) => void;
}

export default function SortList({ sortOptionsHandle }: SortListType) {

  const [sortOptionsActive, setSortOptionsActive] = useState<boolean>(false);
  const [currentMethod, setCurrentMethod] = useState<string>(sortMethods[0]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortOptionsActive(true)}>
        {currentMethod}
        <svg className="places__sorting-arrow" width="7" height="4" onClick={() => setSortOptionsActive(true)}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened"
        style={sortOptionsActive ? { display: 'block' } : { display: 'none' }}
      >
        {sortMethods.map((method) => (
          <li
            className='places__option'
            tabIndex={0}
            key={method}
            onClick={() => {
              setSortOptionsActive(false);
              sortOptionsHandle(method);
              setCurrentMethod(method);
            }}
          >
            {method}
          </li>
        ))}
      </ul>
    </form>
  );
}
