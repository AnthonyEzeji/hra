import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import HeroImage from '../assets/blog images/HeroHealthCare.jpg';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'
import {
  Link
} from "react-router-dom";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AiOutlineMedicineBox } from 'react-icons/ai';
import {BsBoxArrowInRight, BsFileText} from 'react-icons/bs'
import { useMsal,useIsAuthenticated } from '@azure/msal-react'
import { loginRequest } from '../authConfig';
import callMsGraph from '../graph'
import { Avatar } from '@mui/material';
import { useState } from 'react';
import HRALogo from '../assets/hra logo white.png'
const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Patient Safety And Risk Management',
    href: 'http://test.com',
    description: 'Patient Safety And Risk Management.',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Risk Transfer', href: '#', description: "Risk Transfer.", icon: ShieldCheckIcon },
  {
    name: 'Claims And Litigation Services',
    href: 'http://test.com',
    description: "Claims And Litigation Services.",
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    href: 'http://test.com',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { instance } = useMsal();
  let isAuthenticated = useIsAuthenticated()
  const handleLogin = () => {
    /* instance.loginPopup(loginRequest).catch(e => {
         console.log(e);
     }); */
     instance.loginRedirect(loginRequest).catch(e => {
       console.log(e);
   });
 }
 const handleLogout = () => {
  /* instance.logoutPopup({
       postLogoutRedirectUri: "/",
       mainWindowRedirectUri: "/"
   });*/
  instance.logoutRedirect({
    postLogoutRedirectUri: "/",
  });
}
 let imgs=["https://www.healthcareriskadvisors.com/siteassets/images/13225_sbu-logos_hra_red-blk_300x73.png","https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"]
const [showLogout, setShowLogout] = useState(false)
  return (
    <div className="relative bg-slate-50">
      <Popover className="relative bg-slate-800 shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 bg-slate-800">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10  text-white"
                  src={HRALogo}
                  alt=""
                />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-300  border-[1px] border-slate-400">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 lg:flex absolute left-[30%]">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'group inline-flex items-center rounded-md bg-slate-800 border-none text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-white '
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-white',
                          'ml-2 h-5 w-5 group-hover:text-white'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {features.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-slate-50"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-slate-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-slate-800">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-slate-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-slate-900 hover:bg-slate-100"
                                >
                                  <item.icon className="h-6 w-6 flex-shrink-0 text-slate-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                     </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'group inline-flex items-center rounded-md bg-slate-800 border-none text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-white '
                      )}
                    >
                      <span>Who We Serve</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-white',
                          'ml-2 h-5 w-5 group-hover:text-white'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                           
                              <a
                                
                                href='/solutions/hospitals/'
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-slate-50"
                              >
                              <BuildingOffice2Icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true"/>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-slate-900">Hospitals</p>
                                  <p className="mt-1 text-sm text-slate-800">Comprehensive insurance and risk management advisory services for hospitals and healthcare organizations.


</p>
                                </div>
                              </a>
                              <a
                                
                                href='/solutions/ny-physicians/'
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-slate-50"
                              >
                              <AiOutlineMedicineBox className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true"/>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-slate-900">New York Physicians</p>
                                  <p className="mt-1 text-sm text-slate-800">As part of The Doctors Company, we provide New York physicians and affiliated healthcare providers with a portfolio of flexible coverage options to meet your MPL needs.





</p>
                                </div>
                              </a>
                            
                          </div>
                         
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'group inline-flex items-center rounded-md bg-slate-800 border-none text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:text-white '
                      )}
                    >
                      <span>Insights</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-white',
                          'ml-2 h-5 w-5 group-hover:text-slate-800'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                       
                              <a
                                key=''
                                href='/blog'
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-slate-50"
                              >
                            
                             <BsFileText className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true"/>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-slate-900">Blogs</p>
                                  <p className="mt-1 text-sm text-slate-800">Read blogs and insights.</p>
                                </div>
                              </a>
                            
                          </div>
                          <div className="bg-slate-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-base font-medium text-slate-800">Recent Posts</h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li key={item.id} className="truncate text-base">
                                    <a href={item.href} className="font-medium text-slate-900 hover:text-slate-700">
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        'group inline-flex items-center rounded-md bg-slate-800 text-base font-medium hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-white' : 'text-white',
                          'ml-2 h-5 w-5 group-hover:text-slate-800'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-slate-50"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-slate-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-slate-800">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-slate-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-base font-medium text-slate-800">Recent Posts</h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li key={item.id} className="truncate text-base">
                                    <a href={item.href} className="font-medium text-slate-900 hover:text-slate-700">
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
           {!isAuthenticated?<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to="/dashboard" className="whitespace-nowrap text-base font-medium
             text-white hover:text-slate-900" onClick={handleLogin}>
                Sign in
              </Link>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div>:<div  onClick={()=>setShowLogout(!showLogout)} className='hover:bg-zinc-400 hidden md:flex items-center relative bg-zinc-200 p-2 rounded-sm w-fit'>{showLogout&&<div className = 'rounded-md absolute left-0 top-20 z-20 bg-zinc-200 p-4 flex flex-col justify-center'><p className = 'border-b-[1px] border-gray-400 pb-2 mb-2'>{instance.getActiveAccount().username}</p><Link className='bg-slate-700 text-center p-2 rounded-md font-semibold text-white justify-center flex  flex-row  items-center' to ='/dashboard'><p className ='px-2'>Dashboard</p><BsBoxArrowInRight className=''/></Link><button onClick={()=>handleLogout()} className = 'p-2 bg-indigo-600 text-white font-semibold border-[1px] rounded-md mt-2 border-indigo-600 hover:bg-transparent hover:text-indigo-600'>Logout</button></div>}<Avatar  ></Avatar><p className ='text-slate-700 font-semibold px-2 w-fit'>{instance.getActiveAccount().name}</p><ChevronDownIcon /></div>}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-slate-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={imgs[0]}
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-slate-50"
                      >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-slate-900">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" className="text-base font-medium text-slate-900 hover:text-slate-700">
                    Pricing
                  </a>

                  <a href="#" className="text-base font-medium text-slate-900 hover:text-slate-700">
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-slate-900 hover:text-slate-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-slate-800">
                    Existing customer?
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
       
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">
              <span className="block xl:inline">Creating Partnerships to </span>{' '}
              <span className="block text-indigo-600 xl:inline">Advance, Protect and Reward Superior Healthcare</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-slate-800 sm:text-xl md:mt-5 md:max-w-3xl">
              Healthcare Risk Advisors partners with healthcare organizations to identify and solve their unique challenges in services for self-insurance programs, risk transfer, risk management, and claims and litigation.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-slate-50 md:py-4 md:px-10 md:text-lg"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"

            src={HeroImage}alt=""
          />
        </div> 
      </main>
    </div>
  )
}
