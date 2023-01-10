import HeroSection from '@/components/herosection';
import { VStack } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { Skills } from '@/types/skills';
import SkillSection from '@/components/skillsection';
import { readData } from 'src/utils/readdata';
import { Projects } from '@/types/projects';

type Props = {
  skills: Skills[];
  projects: Projects[];
};

//works only on /pages
export const getStaticProps: GetStaticProps<Props> = async () => {
  const { skills } = await readData<{ skills: Skills[] }>('/data/skills.json');

  const { projects } = await readData<{ projects: Projects[] }>(
    'data/projects.json'
  );

  const props: Props = {
    skills,
    projects,
  };

  return {
    props,
  };
};

export default function Home({ skills, projects }: Props) {
  return (
    <VStack w="full" spacing={8}>
      <HeroSection />
      <SkillSection skills={skills} />
    </VStack>
  );
}
