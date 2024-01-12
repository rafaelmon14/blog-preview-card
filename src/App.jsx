import img from './assets/images/illustration-article.svg'
import imgProfile from './assets/images/image-avatar.webp'

function App() {
  return (
    <main className="font-Figtree mt-10 size-full ">
      <div className="rounded-2xl border-solid border-[1px] border-black shadow-3xl shadow-black h-[500px] w-[327px] mx-auto p-6 bg-white">
        <img className="rounded-xl mx-auto" src={img} alt="Article illustration" />
        <p className="font-bold text-center bg-Yellow rounded w-[80px] h-7 mt-6 pt-[3px] text-[14px]">Learning</p>
        <p className="text-[13px] mt-4">Published 21 Dec 2023</p>
        <h2 className="mt-4 font-extrabold text-lg hover:text-Yellow cursor-pointer">HTML & CSS foundations</h2>
        <p className="text-Grey text-[14px] mt-4">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="flex items-center mt-6">
          <img className="w-9" src={imgProfile} alt="Profile image" />
          <p className="font-bold m-3 text-sm">Greg Hooper</p>
        </div>
      </div>
    </main>
  )
}

export default App
