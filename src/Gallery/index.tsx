import { Navigation } from './Navigation';
import { PreviewGallery } from './PreviewGallery';
import { TransitionPhoto } from './TransitionPhoto';
import { Photo } from './types';

interface MyGalleryProps {
   photos: Photo[];
}

export const MyGallery: React.FC<MyGalleryProps> = ({}) => {
   return (
      <div>
         <TransitionPhoto />
         <Navigation />
         <PreviewGallery />
      </div>
   );
};
