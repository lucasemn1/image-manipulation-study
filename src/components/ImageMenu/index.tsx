import React, { ChangeEvent } from 'react';
import { ListOptions, OptionItem, ImageInput } from './style';
import { FiPlus } from 'react-icons/fi';
import ImageModel from '../../models/ImageModel';

interface Props {
  setImage: Function,
}

export default function ImageMenu(props: Props) {
  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files;

    if(file) {
      const image = Array.from(file)[0];

      props.setImage(new ImageModel(URL.createObjectURL(image)));
    }
  }

  return (
    <ListOptions>
      <OptionItem>
        <FiPlus size="20" />
        <div>
          <label htmlFor="image-input">Adicionar <br/> Estampa</label>

          <ImageInput
            type="file"
            id="image-input"
            onChange={handleSelectImage}
          />
        </div>
      </OptionItem>
    </ListOptions>
  )
}
