import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * card title
   */
  @Prop() title: string;

  /**
   * card subtitle
   */
  @Prop() subtitle: string;

  /**
   * card content
   */
  @Prop() content: string;


  render() {
    return <div>
        <div class="card">
          <img src="https://via.placeholder.com/300/09f/fff.png?text=Strncil+card+component" alt="Avatar"/>
          <div class="container">
            <span>{this.subtitle}</span>
            <h4><b>{this.title}</b></h4>
            <p>{this.content}</p>
          </div>
        </div>
      </div>;
  }
}
