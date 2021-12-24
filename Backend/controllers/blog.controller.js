const Blog = require('../model/blog.model')


exports.new_blog_entry = async(req, res) => {

    let entry = new Blog();
    entry.title = req.body.title;
    entry.readingTime = req.body.readingTime;
    entry.mainImage = req.body.mainImage;
    entry.resumen = req.body.resumen;
    entry.body = req.body.body;
    entry.meta = {
        created: new Date(),
        by: {
            name: "Matias",
            avatar: "-"
        }
    }


    let saved = await entry.save().catch(ex => { console.log(ex); return null });
    if (saved) {
        return res.status(200).send({ saved, message: "Nueva entrada generada", success: true })
    } else {
        return res.status(500).send({ message: "Error", success: false })
    }


}

exports.get_resumed_blogs = async(req, res) => {
    let blogs = await Blog.find()
        .select('title readingTime mainImage resumen meta')
        .catch(err => { return [] })

    if (blogs.length == 0) {
        return res.status(200).send({ message: " No existen blogs", blogs: [] })
    }

    return res.status(200).send({ success: true, blogs })
}

exports.get_blog_page = async(req, res) => {
    let blogId = req.params.blogId ? req.params.blogId : null;

    if (!blogId) {
        return res.status(403).send({ message: "No se ha recibido el ID del blog", success: false })
    }


    let blog = await Blog.findById(blogId).catch(ex => { return null })

    if (!blog) {
        return res.status(404).send({ message: "No existe el blog", success: false })
    }


    return res.status(200).send({ blog, message: "Blog encontrado", success: true })
        /*     let patata;
            if(req.params.blogId){
                patata = req.params.blogId;
            }else{
                patata = null;
            } */
}