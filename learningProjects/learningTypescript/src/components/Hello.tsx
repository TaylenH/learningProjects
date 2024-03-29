import * as React from 'react';

export interface HelloProps { compiler: string; framework: string;};

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}</h1>;

export class Hello2 extends React.Component<HelloProps, {}> {
  render(){
    return (
      <h1>hello from {this.props.compiler} and {this.props.framework}</h1>
    );
  }
}
