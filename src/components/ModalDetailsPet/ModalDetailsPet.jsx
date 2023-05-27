import PropTypes from 'prop-types';

const ModalDetailsPet = () => {
    return (
    <div className='modalWindow'>
    <img className={dog} src={edit} alt="edit" />
    <p>Сute dog looking for a home</p>
    <li>Name:</li><li>{name}Rich</li>
    <li>Birthday:</li><li>{birth}21.09.2020</li>
    <li>Bread:</li><li>{bread}Pomeranian</li>
    <li>Place:</li><li>{place}Lviv</li>
    <li>The Sex:</li><li>{sex}male</li>
    <li>Email:</li><a>{email}user@mail.com</a>
    <li>Phone:</li><a>{phone}+380971234567</a>
    <p>Comments: Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! </p>
    <button>Add to</button>
    <button>Contact</button>
    </div>
    )
};

export default ModalDetailsPet;