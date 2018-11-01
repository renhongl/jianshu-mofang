
import * as React from "react";
import '../styles/style.less';
import MarkdownIt from 'markdown-it';
import renderHTML from 'react-render-html';
import hljs from 'highlight.js';


export default class Writing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        const md = new MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
            breaks: false,
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return '<pre class="hljs"><code>' +
                           hljs.highlight(lang, str, true).value +
                           '</code></pre>';
                  } catch (__) {}
                }
                return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
              }
        });
        const source = e.target.value;
        const value = md.render(source);
        this.setState({
            value,
        });
        console.log(value.replace(/\s/g, ''));
    }

    render() {
        return (
            <section className="writing">
                <div className="navigation">
                    navigation
                </div>
                <textarea className="textarea" onChange={this.onChange} />
                <div className="preview">
                    {renderHTML(this.state.value)}
                </div>
            </section>
        );
    }
}