import { draftMode } from "next/headers";
import { groq } from "next-sanity"
// import BlogList from "@/components/blog/BlogList";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
}

export const revalidate = 60
const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->,
  }
`

export default async function BlogRoot() {
    const { isEnabled } = draftMode()
    const posts: Post[] = [] //await client.fetch(query)
    
    if (isEnabled) {
      return (
        // <PreviewSuspense 
        //   fallback={
        //     <div role='status'>
        //       <p className='text-center text-lg animate-pulse text-[#97DAEE]'>
        //         Loading Prev Data ...
        //       </p>
        //     </div>
        //   }
        // >
        //   <PreviewBlogList query={query}/>
        // </PreviewSuspense>
        <Suspense>
          <div className="w-full sm:w-4/5 h-fit min-h-screen ml-0 sm:ml-[20%]">
            <h1>This Feature is Disabled. Go Back with exit-draft</h1>
          </div>
        </Suspense>
      )
    }else{
      // return <BlogList posts={posts}/>
    }
  }
  