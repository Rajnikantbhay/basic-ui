import javaLogo from '../img/java.svg';
import japanLogo from '../img/japan.svg';
import frenchLogo from '../img/french.svg'
import koreanLogo from '../img/korean.svg'
import CLogo from '../img/c++.svg'
import chineseLogo from '../img/chinese.svg'

export default function Categories({src, name}) {
    const flagData = [
        
        {
        id: 1,
        name: 'Korean',
        imgLink: koreanLogo
    }, 
    {
        id: 2,
        name: 'Japanese',
        imgLink: japanLogo
    },  
    {
        id: 3,
        name: 'C++',
        imgLink: CLogo
    },  
    {   id:4,
        name: 'Java',
        imgLink: javaLogo
    },   
    {   id:5,
        name: 'Chinese',
        imgLink: chineseLogo
    },   
    {   id:6,
        name: 'French',
        imgLink: frenchLogo
    }, 

]
  return (
    <section className="py-12 px-8 overflow-x-auto" >
    <h2 className="text-3xl font-bold mb-4 text-black">Top Languages</h2>
    <div className="card-container rounded-md">
        {flagData.map((data) => (
            <div className="card card-compact min-w-[8rem] w-40 bg-base-100 shadow-md rounded-lg hover:shadow-2xl" key={data.id}>
                <figure className='pt-8 my-auto'><img src={data.imgLink} alt={data.name} className='w-16' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                </div>
            </div>
        ))}
    </div>
</section>



  )
}
