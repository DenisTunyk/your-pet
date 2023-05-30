import { ButtonIcon } from './ButtonSearch.styled';
import crossIcon from '../../../images/iconsSearch/cross-small.svg';
import searchIcon from '../../../images/iconsSearch/search.svg';

export const ButtonSearch = ({ searchQuery, setSearchQuery }) => {
  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <>
      {searchQuery ? (
        <>
          <ButtonIcon type="submit" style={{ marginRight: '30px' }}>
            <img src={searchIcon} alt="" />
          </ButtonIcon>
          <ButtonIcon type="submit" onClick={handleClear}>
            <img src={crossIcon} alt="" />
          </ButtonIcon>
        </>
      ) : (
        <ButtonIcon type="submit">
          <img src={searchIcon} alt="" />
        </ButtonIcon>
      )}
    </>
  );
};

export default ButtonSearch;
