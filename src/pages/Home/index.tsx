import React, { useEffect, useState } from "react";
import hat from "../../assets/img/bone.webp";
import printImage from "../../assets/img/print.png";
import mergeImages from "merge-images";
import { Container, Hat } from "./style";

export default function Home() {
  const [imageResult, setImageResult] = useState<string>();
  const [background] = useState<string>(hat);
  const [print] = useState<string>(printImage);

  useEffect(() => {
    mergeImages([
      { src: background },
      {
        src: print,
        x: getImageCenter(background).x - getImageCenter(print).x,
        y: getImageCenter(background).y - getImageCenter(print).y - 80,
      },
    ]).then((imgBase64) => {
      setImageResult(imgBase64);
    });
  }, [background, print]);

  function getImageCenter(src: string) {
    const img = new Image();
    img.src = src;

    return { x: img.width / 2, y: img.height / 2 };
  }

  return (
    <Container>
      <h1>Personalize seu boné!</h1>

      <Hat src={imageResult} />
    </Container>
  );
}
