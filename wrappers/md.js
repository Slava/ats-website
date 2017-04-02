import React from 'react'
import 'css/markdown-styles.css'
import Helmet from 'react-helmet'
import { config } from 'config'

module.exports = React.createClass({
    propTypes () {
        return {
            router: React.PropTypes.object,
        }
    },
    render () {
        const post = this.props.route.page.data
        const pageTitle = config.siteTitle + (post.title ? ` | {post.title}` : '');

        this.picture = post.picture;

        return (
            <div className="markdown">
            <Helmet
            title={pageTitle}
            />
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
        )
    },
})
