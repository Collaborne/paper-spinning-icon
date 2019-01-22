import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon';
import '@polymer/iron-icons';

/**
Shows a spinning icon, e.g. to indicate ongoing updating

@element paper-spinning-icon
@demo demo/index.html
*/
class PaperSpinningIcon extends PolymerElement {
	static get template() {
		return html`
		<style>
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
			}
		</style>

		<iron-icon icon="[[icon]]" class="icon"></iron-icon>`;
	}

	static get is() {
		return 'paper-spinning-icon';
	}

	static get properties() {
		return {

			/**
			 * True if the icon is spinning
			 */
			active: {
				reflectToAttribute: true,
				type: Boolean,
				value: false,
			},

			/**
			* Name of the icon that is spinning
			*/
			icon: {
				type: String,
				value: 'icons:refresh',
			},
		};
	}
}
window.customElements.define(PaperSpinningIcon.is, PaperSpinningIcon);
