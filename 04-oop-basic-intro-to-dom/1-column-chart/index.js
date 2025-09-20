export default class ColumnChart {
  chartHeight = 50;
  constructor({
    data = [], // данные
    label = "", // Название диаграммы
    value = 0, // Общее значение диаграммы
    link = "", // Ссылка
    formatHeading = null, //Формат заголовка
  } = {}) {
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.formatHeading = formatHeading || ((val) => val);

    this.element = document.createElement("div");
    // eslint-disable-next-line no-unused-expressions
    this.element.classList.add("column-chart");
    if (!this.data.length) {
      this.element.classList.add("column-chart_loading");
    }
    this.element.style = "--chart-height: 50px";

    this.render();
  }

  render() {
    // Заголовок
    const title = document.createElement("div");
    title.classList.add("column-chart__title");
    title.textContent = this.label;
    if (this.link) {
      const linkEl = document.createElement("div");
      linkEl.href = this.link;
      linkEl.classList.add("column-chart__link");
      linkEl.textContent = "View all";
      title.append(linkEl);
    }
    this.element.append(title);

    //Контейнер
    const container = document.createElement("div");
    container.classList.add("column-chart__container");

    const containerHeader = document.createElement("div");
    containerHeader.classList.add("column-chart__header");
    containerHeader.textContent = this.formatHeading(String(this.value));

    const containerBody = document.createElement("div");
    containerBody.classList.add("column-chart__chart");
    containerBody.dataset.element = "body";

    //рисуем столбцы графика
    if (this.data && this.data.length > 0) {
      const maxValue = Math.max(...this.data.map((el) => el));

      for (const item of this.data) {
        const column = document.createElement("div");

        const columnHeightCalc = ((item / maxValue) * 100).toFixed(0);
        column.style.setProperty(
          "--value",
          String(Math.floor((item * this.chartHeight) / maxValue))
        );
        column.dataset.tooltip = `${columnHeightCalc}%`;
        containerBody.append(column);
      }
    } else {
      //отображаем заглушку
      const templateLoading = document.createElement("img");
      templateLoading.src = "./charts-skeleton.svg";
      templateLoading.classList.add("column-chart_loading");
      this.element.append(templateLoading);
    }

    container.append(containerHeader);
    container.append(containerBody);

    this.element.append(title);
    this.element.append(container);
  }

  update(newData) {
    this.data = newData;
    this.render(); // Перерисовываем после обновления данных
  }
  //вообще в ТЗ не вижу что это нужно сделать, потому буду гадать на кофейной гуще)
  remove() {
    if (this.element) {
      this.element.remove();
    }
  }
  destroy() {
    this.element.remove();
  }
}
