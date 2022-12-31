import { Application } from "@hotwired/stimulus"

const application = Application.start()
console.log("Hello from app/javascript/application.js")

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
