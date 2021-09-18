import React from 'react';
import * as RJD from '../../../../lib/main';
import { ImageNodeModel } from './ImageNodeModel';

export class ImageNodeWidget extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      brand: 'Some text'
    };
  }

  static defaultProps = {
    node: null,
    color: 'rgb(224, 98, 20)'
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      inputNode = new ImageNodeModel(node.name, color);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new ImageNodeModel(node.name, color);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  onDoubleClickText = () => {
    let newText = prompt("Enter new text", this.state.brand)
    newText === "" || newText === null ? newText=this.state.brand : this.setState({brand: newText})
  }

  render() {
    const { node, displayOnly, color: displayColor } = this.props;
    const { name, color } = node;
    const style = {};
    if (color || displayColor) {
      style.background = color || displayColor;
    }

    // Images for AWS service
    let imagesSrcList = {
      'RDS': 'https://cdn.worldvectorlogo.com/logos/aws-rds.svg',
      'EC2': 'https://cdn.worldvectorlogo.com/logos/aws-ec2.svg',
      'Elastic Load Balancing': 'https://cdn.worldvectorlogo.com/logos/aws-elastic-load-balancing.svg',
    }

    var srcVal = node.name in imagesSrcList ? imagesSrcList[node.name] : 'https://s3.amazonaws.com/www.wok.treble.ai/treble.png';

    return (
      <div className='basic-node' style={style}>
        {node.name === 'Text' ? null : <div className='close-icon'>
          {!displayOnly ? <div className='fa fa-close' onClick={this.onRemove.bind(this)} /> : null}
        </div>}
        <div className='title'>
          {!displayOnly ? 
            <div className='in'>
              {this.getInPort()}
            </div>
          : null}
          {node.name === 'Text' ? (
            <div className='editable-text-box'>
              <a
                onDoubleClick={this.onDoubleClickText}
              >
                {this.state.brand}
              </a>
            </div>
          ) : (
          <img className='logo' src={srcVal} />)
          }
          {!displayOnly ? 
            <div className='out'>
              {this.getOutPort()}
            </div>
          : null}
        </div>
        {
          node.name === 'Text' ? <div/>: <div className='title'>
          <div className='name'>
            {node.name}
          </div>
        </div>
        }
        
      </div>
    );
  }
}

export const ImageNodeWidgetFactory = React.createFactory(ImageNodeWidget);
