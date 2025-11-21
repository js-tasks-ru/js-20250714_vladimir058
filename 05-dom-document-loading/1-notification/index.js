export default class NotificationMessage {
  constructor(message, options = {}) {
    this.message = message;
    this.duration = options.duration || 2000;
    this.type = options.type || "success";
    this.timer = null;
    this.element = this.createElement();
  }

  createElement() {
    const container = document.createElement("div");
    container.classList.add("notification", this.type);
    container.setAttribute("style", "--value:" + this.duration / 1000 + "s");

    const wrapper = document.createElement("div");
    wrapper.classList.add("inner-wrapper");

    const header = document.createElement("div");
    header.classList.add("notification-header");
    header.textContent = this.type;

    const body = document.createElement("div");
    body.classList.add("notification-body");
    body.textContent = this.message;

    wrapper.append(header, body);
    container.append(wrapper);

    return container;
  }

  show(targetElement = document.body) {
    const existingNotifications = document.querySelectorAll(".notification");
    for (let i = 0; i < existingNotifications.length; i++) {
      existingNotifications[i].parentNode.removeChild(existingNotifications[i]);
    }

    targetElement.appendChild(this.element);

    this.timer = setTimeout(() => {
      this.destroy();
    }, this.duration);
  }

  remove() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      this.element = null;
    }
  }

  destroy() {
    this.remove();

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
