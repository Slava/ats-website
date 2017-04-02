import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/reset'
import '../css/template_styles'
import '../css/backgrounds'
import '../css/markdown-theme'

import LogoImg from '../static/logo.png';

function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}

function Nav(props, state) {
    return (
        <div className="nav">
            <div className="nav-left">
                <Link to={prefixLink('/')}>Home</Link>
                <Link to={prefixLink('/about/')}>About</Link>
                <Link to={prefixLink('/events/')}>Events</Link>
                <Link to={prefixLink('/families/')}>Families</Link>
                <Link to={prefixLink('/photos/')}>Photos</Link>
            </div>
            <div className="nav-right">
                <Link to={prefixLink('/execportal/')}>ExecPortal</Link>
                <Link to={prefixLink('/exec/')}>Exec</Link>
            </div>
            <div className="clear-fix"></div>
        </div>
    );
}

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    onScroll() {
         var pos = document.getElementById('main-content').scrollTop;
         var blurDiv = document.querySelectorAll('.bg-image.blur')[0];
         blurDiv.style.opacity = pos / 300;
         var solidDiv = document.querySelectorAll('.bg-solid')[0];
         solidDiv.style.opacity = Math.min(pos / 700, 0.70);
         var header = document.querySelectorAll('header')[0];
         header.className = 'globally-positioned ' + (pos > 100 ? 'sticky' : '');
         var logo = document.querySelectorAll('#logo-title')[0];
         logo.style.opacity = pos > 100 ? 0 : 1;
    },
    render () {
        const parts = this.props.location.pathname.split('/').filter(x => !!x);
        const pageName = parts[parts.length - 1] || 'index';
        return (
            <div>
                <header className="globally-positioned">
                    <Nav/>
                </header>
                <div id="logo-title">
                    <img src={LogoImg} height="150"/>
                    <div className="container">
                        <div id="title">MIT ATS</div>
                        <subtitle>Association of Taiwanese Students</subtitle>
                    </div>
                </div>
                <div id="main-content" className="globally-positioned" onScroll={throttle(this.onScroll, 50, true)}>
                    <div id="filler"></div>
                    <div id="content">
                        {this.props.children}
                    </div>
                </div>

                <div id="background" className={`globally-positioned ${pageName}`}>
                    <div className="globally-positioned bg-image"></div>
                    <div className="globally-positioned bg-image blur"></div>
                    <div className="globally-positioned bg-solid"></div>
                </div>
            </div>
        )
    },
})
