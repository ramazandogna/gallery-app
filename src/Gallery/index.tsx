import { useState } from 'react';
import { Navigation } from './Navigation';
import { PreviewGallery } from './PreviewGallery';
import { TransitionPhoto } from './TransitionPhoto';
import { Photo } from './types';
import style from './index.module.scss';

interface MyGalleryProps {
   photos: Photo[];
}

export const MyGallery: React.FC<MyGalleryProps> = ({ photos }) => {
   if (!photos.length) {
      return null;
   }

   const [indexActivePhoto, setIndexActivePhoto] = useState(0);
   const prevPhoto = photos[indexActivePhoto - 1];
   const nextPhoto = photos[indexActivePhoto - 1];

   return (
      <div className={style.myGallery}>
         <TransitionPhoto
            photos={photos}
            indexActivePhoto={indexActivePhoto}
            className={style.myGalleryTransitionPhoto}
         />
         <Navigation
            clasName={style.myGalleryNavigation}
            disabledPrev={!prevPhoto}
            disabledNext={!nextPhoto}
            onPrevClick={() => {
               setIndexActivePhoto(indexActivePhoto - 1);
            }}
            onNextClick={() => {
               setIndexActivePhoto(indexActivePhoto + 1);
            }}
         />

         <PreviewGallery
            indexActivePhoto={indexActivePhoto}
            photos={photos}
            setNewPhoto={setIndexActivePhoto}
            clasName={style.myGalleryPreviewList}
         />
      </div>
   );
};
