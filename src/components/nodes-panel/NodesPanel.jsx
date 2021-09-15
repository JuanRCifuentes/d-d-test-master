import React from 'react';
import Node from './Node';

class NodesPanel extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <div className="nodes-panel">
                    <div className='nodes-panel-title'>
                        <h1>Hello World!</h1>
                    </div>
                    <hr
                        style={{
                            height: 0
                        }}
                    />
                    <br/>
                    <div className='node-wrapper'>
                        <Node type='imagenode' color='rgb(238, 238, 238)' />
                    </div>
                    <div className='node-wrapper'>
                        <Node type='imagenode' color='rgb(238, 238, 238)' />
                    </div>
                    {/* Other nodes */}
                </div>
            </div>
        );
    }
}

export default NodesPanel;