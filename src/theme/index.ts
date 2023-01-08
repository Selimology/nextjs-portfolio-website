import {
  extendTheme,
  StyleFunctionProps,
  theme as base,
} from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.700',
      }),
    },
    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.700',
      }),
    },
  },
  colors: {
    linkedin: '#0077b5',
    github: 'gray.700',
    twitter: '#08a0e9',
  },
  fonts: {
    heading: `Inter, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
});

export default theme;
