import React from 'react';
import PropTypes from 'prop-types';

import hljs from 'highlight.js';
import {Row, Col, Button, Tooltip} from 'antd';

import copyToClipboard from '../utils/copy_to_clipboard.js';

const labelZValue = 11;
const defaultCopyLabel = 'copy';

const codeBlockStyle = {
  position: 'relative',
  textAlign: 'left',
};

const filenameStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.25)',
  color: '#ffffff',
  fontWeight: 'bold',
  right: '0px',
  padding: '5px',
  paddingLeft: '10px',
  paddingRight: '10px',
  position: 'absolute',
  zIndex: labelZValue,
};

const lineNumberRowStyle = {
  backgroundColor: '#2d2d2d',
  color: '#cccccc',
  fontWeight: 'bold',
  marginTop: '1px',
  padding: '10px',
  textAlign: 'right',
};

const copyButtonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  border: 'none',
  borderRadius: '0px',
  bottom: '12px',
  color: '#ffffff',
  position: 'absolute',
  right: '0px',
  zIndex: labelZValue,
};


export default class CodeView extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      code: props.code,
      copyText: defaultCopyLabel,
      filetype: props.filetype,
      filename: props.filename,
    };

    this.handleCopy = this.handleCopy.bind(this);
    this.handleVisible = this.handleVisible.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      code: nextProps.code,
      copyText: defaultCopyLabel,
      filename: nextProps.filename,
      filetype: nextProps.filetype,
    };
  }

  componentDidMount() {
    document.querySelectorAll('code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  handleCopy() {
    const result = copyToClipboard(this.state.code.join('\n'));

    if (result) {
      this.setState({copyText: 'copied!'});
    }
  }

  handleVisible(isVisible) {
    if (!isVisible && this.state.copyText !== defaultCopyLabel) {
      this.setState({copyText: defaultCopyLabel});
    }
  }

  render() {
    return (
      <div style={codeBlockStyle}>
        <div style={filenameStyle}>
          {this.state.filename}
        </div>
        <Row>
          <Col
            span={1}
            style={lineNumberRowStyle}
          >
            {this.state.code.map((line, idx) => {
              return (
                <div key={`line-${idx}$`}>
                  {idx + 1}
                </div>
              );
            })}
          </Col>
          <Col span={23}>
            <pre>
              <code
                className={this.state.filetype}
              >
                {this.state.code.join('\n')}
              </code>
            </pre>
          </Col>
        </Row>
        <Tooltip
          onVisibleChange={this.handleVisible}
          placement="bottom"
          title={this.state.copyText}
        >
          <Button
            icon="copy"
            onClick={this.handleCopy}
            style={copyButtonStyle}
          />
        </Tooltip>
      </div>
    );
  }

}

CodeView.propTypes = {
  code: PropTypes.arrayOf(PropTypes.string),
  filename: PropTypes.string,
  filetype: PropTypes.string,
};

CodeView.defaultProps = {
  code: [],
  filename: '',
  filetype: 'none',
};
