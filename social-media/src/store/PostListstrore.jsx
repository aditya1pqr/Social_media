import {  createContext, useReducer } from "react";

 export const PostList = createContext({
    postlist : [],
    addpost : ()=>{},
    deletepost : ()=>{}

})

const postListReducer = (currpost, action) =>{
     let newItems = currpost;

     if(action.type === "Add_post")
     {
        newItems = [action.payload, ...currpost]
     }
    if(action.type === "Delete_Post")
    {
        newItems= currpost.filter((post) => post.id !== action.payload.PostId);
    }
    return newItems;
}

const PostListProvider = ({children}) => {
    const [postlist, dispacher] = useReducer(postListReducer, DEFAULT_POST_LIST);
     const addpost =(userId, postTitle, postBody, reactions, tags)=>{
       
        dispacher({ type: "Add_post",
            payload: {
              id: Date.now(),
              title: postTitle,
              body: postBody,
              reactions: reactions,
              userId: userId,
              tags: tags,
            }
           
           })

     }

     const deletepost = (PostId)=>{
        dispacher({
            type :"Delete_Post",
            payload : {
                PostId
            }
        })

     }

    return (
        <PostList.Provider value={{postlist, addpost, deletepost}}>
        {children}
        </PostList.Provider>
    )
}

const DEFAULT_POST_LIST = [
    {
      id: "1",
      title: "Going to Mumbai",
      body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
      reactions: 2,
      userId: "user-9",
      tags: ["vacation", "Mumbai", "Enjoying"],
    },
    {
      id: "2",
      title: "Paas ho bhai",
      body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
      reactions: 15,
      userId: "user-12",
      tags: ["Graduating", "Unbelievable"],
    },
  ];

export default PostListProvider;