import { UsersIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="h-56 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full py-12"
          src="./assets/pusheen_react.png"
          alt=""
        />
      </div>
      <div className="relative px-4 py-8 mx-auto max-w-7xl sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
              <UsersIcon className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Deliver what your customers want every time
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur
            sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur
            deserunt voluptatibus.
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="flex flex-wrap -mx-8 -mt-8">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Delivery</dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">24/7</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Pepperoni</dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">99.9%</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Calories</dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">100k+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}