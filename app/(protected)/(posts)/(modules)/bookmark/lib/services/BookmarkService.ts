import "server-only"

import { IBookmark } from "@/app/(protected)/(posts)/(modules)/bookmark/lib/interfaces/IBookmark"
import prisma from "@/lib/prisma"

export const createBookmarkService = () => {
    const getBookmarkById = async (id: number): Promise<IBookmark | null> => {
        return prisma.bookmark.findUnique({
            where: { id },
        })
    }

    const getBookmarkByUserAndCategory = async (
        userId: number,
        categoryId: number
    ): Promise<IBookmark | null> => {
        return prisma.bookmark.findUnique({
            where: {
                userCategory: {
                    userId,
                    categoryId,
                },
            },
        })
    }

    const upsertBookmark = async (item: IBookmark): Promise<IBookmark> => {
        return prisma.bookmark.upsert({
            where: {
                userCategory: {
                    userId: item.userId,
                    categoryId: item.categoryId,
                },
            },
            update: item,
            create: item,
        })
    }

    const deleteBookmark = async (id: number): Promise<void> => {
        await prisma.bookmark.delete({
            where: { id },
        })
    }

    return {
        getBookmarkById,
        getBookmarkByUserAndCategory,
        upsertBookmark,
        deleteBookmark,
    }
}

export const bookmarkService = createBookmarkService()
