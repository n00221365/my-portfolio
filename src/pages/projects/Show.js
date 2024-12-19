import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectsJSON from '../../data/projects.json';
import 'bootstrap/dist/css/bootstrap.min.css'

const Show = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    // const Demo = lazy(() => import(`./demos/${project.demo}/App`));

    useEffect(() => {

        const found = projectsList.find((project) => {
            return project.slug === slug;
        });

        setProject(found);

    }, []);

    if(project === null) return <h2>Loading...</h2>

    if(project === undefined) return <Navigate to={`/project/${slug}`} />

    return (
        <>
        <div style={{backgroundColor: "#eab8fb"}}>
            <h2>Title: {project.title}</h2>
            <br />
            <p>{project.description}</p>
            <p>{project.technologies}</p>

            <h2>Find this project here: https://github.com/n00221365</h2>

            {/* <iframe width="560"
                        height="315"
                        src=
"https://github.com/n00221365/todo-app"
                        title="reactGiphy" >
                </iframe> */}

            {/* {
                (project.demo) ? (
                    <Suspense fallback={"loading..."}>
                        <>
                        <h2>Demonstration of Project:</h2>
                        <Demo />
                        </>
                    </Suspense>
                ) : ("")
            } */}
</div>
        </>
    );

};

export default Show;