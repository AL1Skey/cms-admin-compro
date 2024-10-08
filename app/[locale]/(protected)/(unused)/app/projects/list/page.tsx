import React from 'react'
import ListTable from './components/list-table'
import { getProjects } from '../data'

const ProjectList = async () => {
    const projects = await getProjects()
    return (
        <div>
            <ListTable projects={projects} />
        </div>
    )
}

export default ProjectList