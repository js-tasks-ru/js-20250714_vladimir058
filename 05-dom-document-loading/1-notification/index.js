export default class NotificationMessage {
  static lastShownComponent = null;

  constructor(message = "", options = {}) {
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
    if (NotificationMessage.lastShownComponent) {
      NotificationMessage.lastShownComponent.destroy();
    }
    NotificationMessage.lastShownComponent = this;

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
    clearTimeout(this.timer);
    this.remove();
    NotificationMessage.lastShownComponent = null;
  }
}
