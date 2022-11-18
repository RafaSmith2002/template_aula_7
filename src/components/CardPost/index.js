/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { DATA_POST } from "./DATA_POST";
import { CardPostContain, WrapperCard } from "./style";

export default function CardPost() {
  const [post, setPost] = useState(DATA_POST);

  //use o console para ver a estrutura do array post
  console.log(post);

  const handleSetPost = (busca) => {
    //crie abaico o filter
    const filtered = [];
    setPost(filtered);
  };

  //crie abaico o map
  const lePosts = [];

  return (
    <CardPostContain>
      <input />
      {lePosts}
    </CardPostContain>
  );
}
