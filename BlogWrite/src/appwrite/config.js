import conf from '../conf/conf.js'
import { Client, Account, Databases, Storage, Query, ID } from 'appwrite'; 

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Appwrite Endpoint
            .setProject(conf.appwriteProjectId) // Project ID

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Document ID
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
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
            
        }
    }
    async deletePost(){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deletePost error", error);
            throw error;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite serive :: getPost error", error);
            throw error;
            
        }
    }
    async getPosts(queries = [Query.equal('status', "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                100,
                0
            );
        } catch (error) {
            console.log("Appwrite serive :: getPosts error", error);
            return false;
        }

    }

    // file upload services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), // Unique ID for the file
                file
            );
        } catch (error) {
            console.log("Appwrite serive :: uploadFile error", error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID // File ID to delete
            )
        } catch (error) {
            console.log("Appwrite serive :: deleteFile error", error);
            return false;
            
        }
    }

    getFilePreview(){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
    }

    const 
}

const service = new Service();

export default service;