"use server"

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt"

export const addPost = async(formData) => {
    const {title,desc,slug,userId} = Object.fromEntries(formData)

// console.log(title,desc,slug,userId);
try {
    connectToDb()
    const newPost = new Post({
        title,
        desc,
        slug,
        userId
    })
    await newPost.save();
    revalidatePath("/blog")
    console.log("saved to db");
    
} catch (error) {
    console.log(error);
}
}


export const deletePost = async(formData) => {
    "use server"
    const {id} = Object.fromEntries(formData)

try {
    connectToDb()
    await Post.findByIdAndDelete(id)
    revalidatePath("/blog")
    console.log("Post has been deleted");
    
} catch (error) {
    console.log(error);
}
}

export const register = async (formData) => {
    const {username,email,password,passwordRepeat,img} = Object.fromEntries(formData)
    if (password != passwordRepeat)
    return "Passwords do not match!"

    try {
        connectToDb();
        const user = await User.findOne({username});
        if (user) {
            return "User already exists"
        }
        const salt = await bcrypt.genSalt(10);
        const hashdPassword = await bcrypt.hash(password,salt)
        const newUser =  new User({
            username,
            email,
            password: hashdPassword,
            img
        })
        await newUser.save()
    } catch (error) {
        console.log(error);
    }
}