"use server"

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

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