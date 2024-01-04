import { addPost, deletePost } from "@/lib/actions"

const serverAction = () => {
  return (
    <div>
        <form action={addPost}>
            <input type="text" placeholder="title" name="title"/>
            <input type="text" placeholder="desc" name="desc"/>
            <input type="text" placeholder="slug" name="slug"/>
            <input type="text" placeholder="userId" name="userId"/>
            <button >Add User</button>
        </form>

        <form action={deletePost}>
        <input type="text" placeholder="PostId" name="id" />
        <button>Delete</button>
        </form> 


    </div>
  )
}

export default serverAction