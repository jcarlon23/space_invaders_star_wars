// app/javascript/controllers/button_controller.js
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="button"
export default class extends Controller {
  connect() {
    this.button.bind('click', $.proxy(function() {
      this.button.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
  }

}

// Start the animation
this.start = this.el.find('.intro');

// The animation wrapper
this.intro = this.el.find('.intro');

// Remove animation and shows the start screen
this.reset();
