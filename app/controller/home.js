const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "你好！开发者";
  }
}

module.exports = HomeController;
