import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { chakra, ImageProps as ChakraImageProps } from '@chakra-ui/react';

type ImageProps = NextImageProps & Omit<ChakraImageProps, 'src'>;
//chakra factory function

const GeneralImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'src',
      'layout',
      'alt',
      'placeholder',
      'style',
      'width',
      'height',
      'priority',
    ].includes(prop),
});

const Image = (props: ImageProps) => <GeneralImage {...props} />;

export default Image;
