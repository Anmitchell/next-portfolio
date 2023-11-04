import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from '@/components/project'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-[7rem]">
      <SectionHeading>Projects</SectionHeading>
      <div className="mt-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
