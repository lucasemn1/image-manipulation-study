import React, { useEffect, useState } from "react";
import { Container, Hat } from "./style";
import ImageMenu from '../../components/ImageMenu';
import hat from "../../assets/img/bone.webp";
import printImage from "../../assets/img/print.png";
import mergeImages from "merge-images";
import ImageModel from '../../models/ImageModel';

export default function Home() {
  const [imageResult, setImageResult] = useState<ImageModel>(new ImageModel(hat));
  const [background] = useState<ImageModel>(new ImageModel(hat));
  const [print, setPrint] = useState<ImageModel>(new ImageModel(printImage, 0.5));

  useEffect(() => {

    mergeImages(
      [
        { src: background.src },
        {
          src: print.src,
          x: background.getCenter().x - print.getCenter().x,
          y: background.getCenter().y - print.getCenter().y - 80,
          opacity: print.opacity,
        },
      ],
    ).then((img) => {
      setImageResult(new ImageModel(img));
    });
  }, [background, print]);

  return (
    <Container>
      <ImageMenu setImage={setPrint}/>
      <h1>Personalize seu boné!</h1>

      <Hat src={imageResult?.src} />
    </Container>
  );
}
