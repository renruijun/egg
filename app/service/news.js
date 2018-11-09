const Service = require("egg").Service;

class NewsService extends Service {
  async list(page = 1) {
    const { pageSize, serverUrl } = this.config.news;

    const { data: idList } = await this.ctx.curl(
      `${serverUrl}/topStories.json`,
      {
        data: {
          orderBy: '"$key"',
          startAt: `"${pageSize * (page - 1)}"`,
          endAt: `"${pageSize * page - 1}"`
        },
        dataType: "json"
      }
    );
    const newsList = await promiss.all(
        Object.keys(idList).map((key)=>{
            const url = `${serverUrl}/item/${}`
        })
    )
  }
}
