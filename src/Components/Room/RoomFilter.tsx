import "./RoomFilter.scss";

const RoomFilter = () => {
  return (
    // <div className="room-filter">
    //   <input
    //     type="checkbox"
    //     className="room-filter__checkbox"
    //     id="room-filter"
    //   />
    //   <label htmlFor="room-filter" className="room-filter__text">
    //     Только мои комнаты
    //   </label>
    // </div>
    <div className="room-filter checkbox">
      <input className="checkbox__input" type="checkbox" id="my-rooms" />
      <label className="checkbox__text" htmlFor="my-rooms">
        Только мои комнаты
      </label>
    </div>
  );
};

export default RoomFilter;
