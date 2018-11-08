//此模块使用ES6模块规范编写
const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: "歼10矢量发动机", url: "/news/1" },
        { id: 2, title: "歼20三机编队", url: "/news/2" }
      ]
    };

    await this.ctx.render("news/list.tpl", dataList);
  }
}

module.exports = NewsController;
