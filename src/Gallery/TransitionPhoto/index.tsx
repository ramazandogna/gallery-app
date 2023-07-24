import { Photo, CommonClassProps } from '../types';
import style from './index.module.scss';
import cl from 'classnames';

interface TransitionPhotoProps extends CommonClassProps {
   photos: Photo[];
   indexActivePhoto: number;
}

export const TransitionPhoto: React.FC<TransitionPhotoProps> = ({
   className,
   photos,
   indexActivePhoto,
}) => {
   return (
      <div className={cl(style.transitionPhoto, className)}>
         {photos.map((photo, id) => (
            <img
               className={
                  (style.transitionPhotoImage,
                  indexActivePhoto === id && style.transitionPhotoImageActive)
               }
               src={photo.src}
               alt={photo.description}
               key={photo.id}
               loading="lazy"
            />
         ))}
      </div>
   );
};
