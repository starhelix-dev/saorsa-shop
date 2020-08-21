import React, { useState } from 'react';
import classnames from 'classnames'

const NavItem = (props) => {
    const [visible, setVisibility] = useState(false)
    const navLink = classnames(`nav-item dropdown`, {
        'show hovered': visible
    })
    return (
        <ul className="navbar-nav mx-auto">
            <li onMouseOut={() => setVisibility(false)} onMouseOver={() => setVisibility(true)} className={navLink}>
            <a className='nav-link' data-toggle="dropdown" href={props.link}>{props.title}</a>
            {props.group && (
                <div onMouseOut={() => setVisibility(false)} className={`${classnames('dropdown-menu', {
                    'show': visible
                })}`}>
                    <div className="card-body">
                        <ul className="list-styled font-size-sm">
                            {props.group.allMarkdownRemark.edges.map(category => {
                                return (
                                    <li className="list-styled-item">
                                <a className="list-styled-link" href={category.node.fields.slug}>
                                    {category.node.frontmatter.title}
                                </a>
                            </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}

            </li>
        </ul>
    )
}

export default NavItem