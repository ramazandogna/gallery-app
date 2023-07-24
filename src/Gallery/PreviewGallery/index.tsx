import { CommonClassProps, Photo } from '../types';

interface PreviewGalleryProps {}

interface PreviewGallery extends CommonClassProps {
   indexActivePhoto: number;
   photos: Photo;
   setNewPhoto: (id: number) => void;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
   clasName,
   indexActivePhoto,
   photos,
   setNewPhoto,
}) => <div>PreviewGallery</div>;
