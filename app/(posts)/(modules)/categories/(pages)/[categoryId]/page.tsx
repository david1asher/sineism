import { categoriesService } from "@/app/(posts)/(modules)/categories/lib/services/CategoriesService"
import { notFound } from "next/navigation"
import { PostFeedItem } from "@/app/(posts)/components/PostsFeed/PostFeedItem"

type PageProps = {
    params: {
        categoryId: string
    }
}

export default async function Page(props: PageProps) {
    const category = await categoriesService.getCategory(
        Number(props.params.categoryId),
        true
    )

    if (!category) {
        return notFound()
    }

    return (
        <>
            {category.posts?.map((post) => (
                <PostFeedItem
                    post={post}
                    key={post.id}
                />
            ))}
        </>
    )
}