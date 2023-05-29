import { Wrap, ButtonIcon } from './ButtonSearch.styled';
import icons from '../../../images/icons/check.svg';

export const ButtonSearch = () => {
  return (
    <Wrap>
      <ButtonIcon type="submit" color="#54ADFF" hovercolor="#1075d3">
        <svg width={24} height={24} fill="#54ADFF">
          <use href={icons + '#icon-search'}></use>
        </svg>
      </ButtonIcon>
    </Wrap>
  );
};

export default ButtonSearch;
