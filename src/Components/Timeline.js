import React from "react";

function Timeline() {
  return (
    <div>
      <div className="text-5xl text-lred container hel mt-12 font-bold">
        Timeline
      </div>
      <section className="flex flex-row container mx-auto hel mt-8">
        <div className="w-80">
          <ul>
            <li className="relative flex items-baseline gap-6 pb-5">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">18-8-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores incidunt blanditiis dignissimos, enim earum mollitia.
                </p>
              </div>
            </li>
            <li className="relative flex items-baseline gap-6 pb-5">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">18-8-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </li>
            <li className="relative flex items-baseline gap-6 pb-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">18-8-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est?
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-80">
          <ul>
            <li className="relative flex items-baseline gap-6 pb-5">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">18-8-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores incidunt blanditiis dignissimos, enim earum mollitia.
                </p>
              </div>
            </li>
            <li className="relative flex items-baseline gap-6 pb-5">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">18-8-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </li>
            <li className="relative flex items-baseline gap-6 pb-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">18-8-2022</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est?
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
