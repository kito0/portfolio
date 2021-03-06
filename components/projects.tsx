import { ReactElement } from 'react';

import { ProjectCard } from 'components';
import { projects } from 'data';

/**
 * Section for showcasing featured projects.
 *
 * @param projects - Array of GitHub repository objects
 */
export const Projects = (): ReactElement => {
  return (
    <section className='home section projects'>
      <div className='container'>
        <h1 className='projects-title'>Projects</h1>
        <div className='project-list'>
          {projects?.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </section>
  );
};
