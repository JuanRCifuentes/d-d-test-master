import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget } from '../nodes/imagenode/ImageNodeWidget';

class Node extends React.Component {
    renderNode() {
        const { type, color } = this.props;

        // TODO: MAKE THIS OK
        if (type === 'rds') {
            return <ImageNodeWidget node={{ name: 'RDS' }} color={color} displayOnly/>;
        }
        if (type === 'ec2') {
            return <ImageNodeWidget node={{ name: 'EC2' }} color={color} displayOnly/>;
        }
        if (type === 'elastic') {
            return <ImageNodeWidget node={{ name: 'Elastic Load Balancing' }} color={color} displayOnly/>;
        }
        if (type === 'text') {
            return <ImageNodeWidget node={{ name: 'Text' }} color={color} displayOnly/>;
        }
        
        console.warn('Unknown node type');

        return null;
    }

    render() {
        const { type, color } = this.props;

        return (
            <DragWrapper type={type} color={color} style={{ display: 'inline-block' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;