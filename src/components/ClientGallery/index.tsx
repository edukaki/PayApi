import React from 'react';
import { ReactComponent as Tesla } from '../../assets/img/shared/desktop/tesla.svg';
import { ReactComponent as Microsoft } from '../../assets/img/shared/desktop/microsoft.svg';
import { ReactComponent as Hewlett } from '../../assets/img/shared/desktop/hewlett-packard.svg';
import { ReactComponent as Oracle } from '../../assets/img/shared/desktop/oracle.svg';
import { ReactComponent as Google } from '../../assets/img/shared/desktop/google.svg';
import { ReactComponent as Nvidia } from '../../assets/img/shared/desktop/nvidia.svg';
import { v4 as uuidv4 } from 'uuid';
import style from './ClientGallery.module.scss';

type ClientGalleryProps = {
  backgroundTheme: 'dark' | 'light';
};

const ClientGallery = ({ backgroundTheme }: ClientGalleryProps) => {
  const gallery = [Tesla, Microsoft, Hewlett, Oracle, Google, Nvidia];

  return (
    <div className={style.gallery}>
      {gallery.map((Brand) => (
        <Brand
          fill={backgroundTheme === 'light' ? '#36536b' : '#fbfcfe'}
          key={uuidv4()}
        />
      ))}
    </div>
  );
};

export default ClientGallery;
