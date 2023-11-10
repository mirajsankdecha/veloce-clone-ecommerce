import Header from "@/Components/HomePage/Header";
import MainSection from "@/Components/HomePage/MainSection";

const page = () => {
  return (
    <>
      <div className='min-h-screen w-auto max-w-[--max-width] m-auto  shadow-[0_0_5em_#00000033] '>
        <Header />
        <div className='h-16'></div>
        <MainSection />
        <div className='h-16'></div>
      </div>
    </>
  )
}

export default page;