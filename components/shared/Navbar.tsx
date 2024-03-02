import NavButton from '@/components/ui/NavButton';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-blue-900 p-5 text-white ">
        <div className="flex justify-between">
            <Image
              src='/logo.png'
              alt='logo'
              width={150}
              height={100}
              bg-left-top
            />
            {/* can be replaced by logo */}
            <ul className="flex content-center self-center">
                <NavButton
                  className="mx-5"
                  text= "New Employee"
                  />
                <NavButton
                  className="mx-5"
                  text= "Assign Designation"
                  />
                <NavButton
                  className="mx-5"
                  text= "New Designation"
                  />
                <NavButton
                  className="mx-5"
                  text= "New Department"
                  />

            </ul>
        </div>

    </div>
  )
}

export default Navbar