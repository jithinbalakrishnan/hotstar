// https://www.youtube.com/watch?v=T3b5khnxYQg
import React, { useEffect } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { faker } from "@faker-js/faker";
import './virtualList.css'

const VirtualList = () => {
  const [people, setPeople] = React.useState([]);
  const [time, setTime] = React.useState(new Date());

  useEffect(() => {
    setPeople(
      [...Array(1000).keys()].map((key) => {
        return {
          userId: faker.string.uuid(),
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
          password: faker.internet.password(),
          birthDate: faker.date.birthdate(),
          registeredAt: faker.date.past(),
        };
      })
    );
  }, []);
  const RowRenderer = ({key, index, style}) => {
   return  <div className="list" key={key} style={style}>
        {people[index].userName}
    </div>
  }
  return (
   <div className="list-container ">
       <div className="list-wrapper" >
      <h1>List</h1>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowCount={people.length}
            rowHeight={50}
            rowRenderer={RowRenderer}
          ></List>
        )}
      </AutoSizer>
    </div>
   </div>
  );
};
export default VirtualList;
