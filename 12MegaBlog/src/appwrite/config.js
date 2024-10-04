import conf from "../conf/conf";
import {Client,Databases,ID,Query,Storage} from 'appwrite';

class Service{
    client=new Client();
    databases;
    bucket;

    //account would be made when you call constructor
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite::: createPost::: Error", error);
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite:: updatePost:: Error", error);
            
        }
    }

    async deletePost(slug){
        try {
            //in delete you don't need to return just delete is succesfully

            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("appwrite:: deletePost:: Error", error);
            return false;
            
        }
    }
    
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite:: GetPost:: Error", error);
            return false;
        }
    }

    //give me all post which status is active
    async getAllPost(queries=[Query.equal('status',"active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

                //we can give pagination limit also
            )
        } catch (error) {
            console.log("Appwrite:: getAllPost:: Error", error);
            return false;
            
        }
    }

    //file upload service
    //when uploading a file you have to give the blog of the file. the actual file
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite :: UploadFile :: Error", error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite :: DeleteFile :: error", error);
            return false;
        }
    }
    
    //preview file supports for preview image
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service=new Service();
export default service;