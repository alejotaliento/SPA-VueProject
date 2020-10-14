class Article {
    constructor(title, content, image) {
        this.title = title;
        this.content = content;
        this.date = new Date();
        this.image = image;
    }
}

export default Article;