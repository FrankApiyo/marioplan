import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-o">
                <span className="card-title">
                    Project Title-{id}
                </span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic placeat eos, rem modi animi amet cumque perspiciatis dolorum rerum nostrum quisquam! Beatae nisi, dolorum quisquam blanditiis recusandae similique? Veritatis?
                </p>
                <div className="card-action grey lighten-4 grey-text">
                    <div>
                        Posted by the net ninja
                    </div>
                    <div>
                        2nd september, am
                    </div>
                </div>
            </div>
        </div>
    )
}
