import { commonApI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// add component Upload video store video in http://localhost:3000/videos
export const uploadRecipeAPI=async(recipe)=>{
    // send response to add component
    return await commonApI("POST",`${SERVER_URL}/allRecipe`,recipe)
}

// get Video api called  by view http://localhost:3000/videos
export const getAllRecipeAPI=async()=>{
    return await commonApI("GET",`${SERVER_URL}/allRecipe`,"")
}

// // store watch history by videoCard to http://localhost:3000/history
// export const saveHistory=async(videoDetails)=>{
//     return await commonApI("POST",`${SERVER_URL}/history`,videoDetails)
// }
// // get watch history by Watch to http://localhost:3000/history
// export const getHistoryAPI=async()=>{
//     return await commonApI("GET",`${SERVER_URL}/history`,"")
// }

// // Delete watch history from Watch by its Id to http://localhost:3000/history/id
// export const removeHistoryAPI=async(videoId)=>{
//     return await commonApI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
// }

// // Delete video history from videoCard by its Id to http://localhost:3000/videos
// export const removeVideoAPI=async(videoId)=>{
//     return await commonApI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
// }

// // Save category to category Compoenet in http://localhost:3000/videos
// export const addCategoryAPI=async(categoryDetails)=>{
//     return await commonApI("POST",`${SERVER_URL}/category`,categoryDetails)
// }

// // get category by category Component to http://localhost:3000/category
// export const getCategoryAPI=async()=>{
//     return await commonApI("GET",`${SERVER_URL}/category`,"")
// }

// // remove category api  http://localhost:3000/category/id
// export const removeCategoryAPI=async(categoryId)=>{
//     return await commonApI("DELETE",`${SERVER_URL}/category/${categoryId}`,{})
// }


// // Drag and drop
// // get single video api
// export const getVideoAPI=async(videoId)=>{
//     return await commonApI("GET",`${SERVER_URL}/videos/${videoId}`,"")
// }

// // updateCategory api
// export const updateCategoryAPI=async(categoryId,updateCategoryDetails)=>{
//     return await commonApI("PUT",`${SERVER_URL}/category/${categoryId}`,updateCategoryDetails)
// }

// // 
// // getSingleCategory api 
// export const getSingleCategoryAPI=async(categoryId)=>{
//     return await commonApI("GET",`${SERVER_URL}/category/${categoryId}`,"")
// }
