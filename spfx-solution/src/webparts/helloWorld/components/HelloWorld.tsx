import * as React from 'react';
import type { IHelloWorldProps } from './IHelloWorldProps';
import App from 'react-app/lib/App';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {

    return (
      <>
        <App />
      </>
    );
  }
}
