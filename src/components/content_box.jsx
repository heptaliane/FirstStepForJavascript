import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import CodeView from './code_view.jsx';
import extractCodeBlock from '../utils/extract_code_block.jsx';


const boxStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #000000',
  boxShadow: '1px 0px 2px rgba(0, 0, 0, 0.75)',
  padding: '20px',
  paddingLeft: '50px',
  paddingRight: '50px',
  margin: 'auto',
  textAlign: 'left',
  width: '60%',
};


export default class ContentBox extends React.PureComponent {

  static getDerivedStateFromProps(nextProps) {
    const [
      code,
      nonCode,
    ] = extractCodeBlock(nextProps.body);

    return {
      codeBlocks: code,
      nonCodeBlocks: nonCode,
    };
  }

  constructor(props) {
    super(props);

    const [
      code,
      nonCode,
    ] = extractCodeBlock(props.body);

    this.state = {
      codeBlocks: code,
      nonCodeBlocks: nonCode,
    };
  }

  render() {
    return (
      <div style={boxStyle}>
        {this.state.nonCodeBlocks.map((code, idx) => {
          return (
            <div key={`section-${idx}`}>
              <Markdown
                key={`docs-${idx}`}
                escapeHtml={false}
                source={this.state.nonCodeBlocks[idx].join('\n')}
              />
              {idx < this.state.codeBlocks.length &&
                <CodeView
                  key={`code-${idx}`}
                  code={this.state.codeBlocks[idx].body}
                  filename={this.state.codeBlocks[idx].filename}
                  filetype={this.state.codeBlocks[idx].filetype}
                />
              }
            </div>
          );
        })}
      </div>
    );
  }

}

ContentBox.propTypes = {body: PropTypes.arrayOf(PropTypes.string)};

ContentBox.defaultProps = {body: []};
