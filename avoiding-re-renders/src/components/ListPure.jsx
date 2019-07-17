import React, { PureComponent } from 'react';

/**
 * PureComponents basically do a shouldComponent Update for us and shallowly compare
 * the props and state objects. The same caveats hold for this:
 * 1) Don't optimize unless you have to.
 * 2) Make sure you are disciplined with regard to immutability.
 */
class ListPure extends PureComponent {
  render() {
    console.log('rendering ListPure');

    return (
      <div>
        <p>ListPure.jsx:</p>
        <ul className="list">
          {this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListPure;
