import mongoose, { Schema, model, Document } from "mongoose";


interface IPost extends Document{
    author: string,
    body: string,
    createdTimestamp: string
}


const PostSchema = new Schema<IPost> (
    {
        author: {type: String, required: true},
        body: {type: String, required: true},
        createdTimestamp: {type: String, required: true}
    }
);


PostSchema.virtual('url').get( function() {
    return '/post/' + this.id;
});

const Post = model<IPost>('post', PostSchema);


export default Post;
