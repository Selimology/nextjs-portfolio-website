import { VStack, Stack, Grid, Heading } from '@chakra-ui/react';
import { Skills } from '@/types/skills';
import SkillCard from '@/components/skillcard';

type SkillsProps = {
  skills: Skills[];
};

const SkillSection = ({ skills }: SkillsProps) => {
  return (
    <VStack w="full" alignItems="flex-start">
      <Stack
        spacing={8}
        w="full"
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Heading size="md" fontWeight={'bold'}>
          Skills & Technologies.
        </Heading>
        <Grid
          w="full"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          alignItems="center"
          templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }}
          gap="5"
        >
          {skills.map((skill) => (
            <SkillCard {...skill} key={skill.title} />
          ))}
        </Grid>
      </Stack>
    </VStack>
  );
};

export default SkillSection;
