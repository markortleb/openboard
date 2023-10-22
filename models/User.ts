import mongoose, { Schema, model, Document } from "mongoose";


interface IUser extends Document{
    username: string,
    password: string,
    createdTimestamp: string,
    lastLoginTimestamp: string
}


const UserSchema = new Schema<IUser> (
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        createdTimestamp: {type: String, required: true},
        lastLoginTimestamp: {type: String, required: true}
    }
);


UserSchema.virtual('url').get( function() {
    return '/user/' + this.username;
});

const User = model<IUser>('user', UserSchema);


export default User;
