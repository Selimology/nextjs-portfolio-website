import HeroSection from '@/components/herosection';
import { VStack, Heading, Stack, Grid } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { Skills } from '@/types/skills';
import { promises as fs } from 'fs';
import path from 'path';
import SkillCard from '@/components/skillcard';

type SkillsProps = {
  skills: Skills[];
};

type SkillsColorProps = SkillsProps & { color: string };

//works only on /pages
export const getStaticProps: GetStaticProps<SkillsProps> = async () => {
  const jsonPath = path.join(process.cwd(), 'data/skills.json');
  const skillsContent = await fs.readFile(jsonPath, 'utf8');
  const { skills } = JSON.parse(skillsContent) as { skills: Skills[] };
  const props: SkillsProps = {
    skills,
  };

  return {
    props,
  };
};

export default function Home({ skills }: SkillsProps) {
  return (
    <VStack w="full" spacing={8}>
      <HeroSection />
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
    </VStack>
  );
}
