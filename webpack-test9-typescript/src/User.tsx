import React from "react";

type UserPropsType = {
  name: string;
  age: number;
};

const User = (props: UserPropsType) => {
  return (
    <div>
      <h2>
        {props.name}님의 나이는 {props.age}
      </h2>
    </div>
  );
};

export default User;
