'use server'

import prisma from "@/lib/db"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { revalidatePath } from "next/cache"

export async function createPost(formData: FormData) {

    try {
        
        await prisma.post.create({
            data: {
                title: formData.get('title') as string,
                slug: (formData.get('title') as string).replace(/\s+/g, '-').toLowerCase(),
                content: formData.get('content') as string,
                author: {
                    connect: {
                    email: 'john@gmail.com'
                }
            }
        }
    })
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError) {
            if(error.code === 'P2002') {
                console.log('Unique constraint failed on the field, a new user cannot be created with this email')
            }
        }
    }
    // console.log(data)

    revalidatePath('/posts')

}

export async function updatePost(formData: FormData, id: string) {
    // console.log(data)
    await prisma.post.update({
        where: {
            id
        },
        data: {
            title: formData.get('title') as string,
            slug: (formData.get('title') as string).replace(/\s+/g, '-').toLowerCase(),
            content: formData.get('content') as string,
        }
    })
}

export async function deletePost(id: string) {
    await prisma.post.delete({
        where: {
            id
        }
    })
}