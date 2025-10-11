import Head from 'next/head';

import projects from '@/data/projects.json';
import Layout from '@/components/layouts/Layout';
import Container from '@/components/ui/Container';
import ProjectList from '@/components/projects/ProjectList';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Product engineer turning ideas into well-crafted usable products that create business value and improve lives. Discover my projects, thoughts, and more about me."
        />
        <title>Projects | Nadia Neyla</title>
      </Head>

      <section className="text-main py-8 sm:py-12 w-full">
        <Container>
          <h1 className="text-2xl md:text-3xl inline-block border-b border-gray-300 dark:border-gray-600 mb-7">
            Projects
          </h1>
          <ProjectList projects={projects} />
        </Container>
      </section>
    </>
  );
}

ProjectsPage.getLayout = (page) => <Layout>{page}</Layout>;
