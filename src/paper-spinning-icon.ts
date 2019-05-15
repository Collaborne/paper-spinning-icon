import { css, customElement, html, LitElement, property } from 'lit-element';

import '@polymer/iron-icon';
import '@polymer/iron-icons';

/**
 * Shows a spinning icon, e.g. to indicate ongoing updating
 */
@customElement('paper-spinning-icon')
export class PaperSpinningIcon extends LitElement {
	/**
	 * True if the icon is spinning
	 */
	@property({type: Boolean, reflect: true})
	public active: boolean = false;

	/**
	 * Name of the icon that is spinning
	 */
	@property({type: String})
	public icon: string = 'icons:refresh';

	static get styles() {
		return css`
			.icon {
				@apply --paper-spinning-icon-icon;
			}

			@keyframes spinning {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}
			:host([active]) .icon {
				animation: spinning 1s linear infinite;
			}`;
	}

	protected render() {
		return html`
			<iron-icon icon="${this.icon}" class="icon"></iron-icon>
		`;
	}
}
