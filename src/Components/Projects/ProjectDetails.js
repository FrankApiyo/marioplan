import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetails(props) {
    const { project } = props;
    console.log(project ? new Date(project.createdAt.seconds): "nothing")
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-o">
                    <span className="card-title">
                        {project.title}
                    </span>
                    <p>{project.content}</p>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>
                            Posted by {project.authorFirstName} {project.authorLastName}
                    </div>
                        <div>
                            {project.createdAt ? new Date(project.createdAt.seconds).toString() : "I don't know when this was created"}
                    </div>
                    </div>
                </div>
            </div>)
    }else{
        return 'test'
    }
    }

    const mapStateToProps = (state, ownProps) => {

        const id = ownProps.match.params.id;
        const projects = state.firestore.data.projects;
        const project = projects ? projects[id] : null;
        return {
            project
        }
    }

    export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'projects' }
        ])
    )(ProjectDetails);