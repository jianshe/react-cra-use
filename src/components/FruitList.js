import React from "react";

//显示水果列表
export default function FruitList({ fruits, setFruits }) {
  const delFruit = delIndex => {
    //在数组中删除指定下标元素
    const tem = [...fruits];
    tem.splice(delIndex, 1);
    setFruits(tem);
  };

  return (
    <ul>
      {fruits.map((item, index) => {
        return (
          <li key={item} onClick={() => delFruit(index)}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
