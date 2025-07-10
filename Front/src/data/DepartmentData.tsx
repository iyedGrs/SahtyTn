import React from "react";

export interface Department {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const departments: Department[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="-15 -10 511.999 511.999"
        xmlSpace="preserve"
      >
        <g transform="matrix(0.7199999999999996,0,0,0.7199999999999996,71.67985900878904,71.67986114501974)">
          <path
            d="M353.001 344.115c-3.945-3.865-10.276-3.8-14.142.144l-.284.29c-3.865 3.945-3.8 10.276.145 14.142a9.966 9.966 0 0 0 6.998 2.857 9.976 9.976 0 0 0 7.144-3.001l.284-.29c3.865-3.945 3.8-10.276-.145-14.142zM460.574 239.276H434v-26.574c0-5.523-4.477-10-10-10s-10 4.477-10 10v26.574h-26.574c-5.523 0-10 4.477-10 10s4.477 10 10 10H414v26.574c0 5.523 4.477 10 10 10s10-4.477 10-10v-26.574h26.574c5.523 0 10-4.477 10-10s-4.477-10-10-10z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></path>
          <path
            d="M456.694 167.577c-9.34-69.03-67.048-120.678-135.545-120.678-34.577 0-66.922 12.889-92.149 36.514-25.228-23.625-57.573-36.514-92.149-36.514C61.391 46.899 0 109.752 0 187.009c0 15.264 4.453 32.373 13.312 51.259H10c-5.523 0-10 4.477-10 10s4.477 10 10 10h13.962c18.677 31.62 48.213 67.577 88.487 107.623 54.58 54.271 109.924 96.73 110.477 97.153 1.792 1.371 3.933 2.056 6.074 2.056s4.281-.685 6.074-2.056c.422-.323 42.75-32.781 89.658-77.007 4.019-3.789 4.205-10.118.416-14.136-3.788-4.018-10.117-4.205-14.136-.416-35.774 33.729-68.801 60.472-82.011 70.92-15.698-12.42-59.4-47.873-102.593-90.838-34.58-34.399-61.052-65.747-78.949-93.299h89.526a10 10 0 0 0 9.612-7.242l17.472-60.902 48.384 155.018a10 10 0 0 0 19.091 0l26.795-85.873h44.644c5.523 0 10-4.477 10-10s-4.477-10-10-10h-51.999a10 10 0 0 0-9.546 7.021l-19.442 62.305-48.786-156.306a9.98 9.98 0 0 0-9.662-7.02 10.001 10.001 0 0 0-9.497 7.242l-24.603 85.758H35.624C25.287 218.753 20 201.552 20 187.009c0-66.229 52.419-120.11 116.851-120.11 32.384 0 62.5 13.312 84.799 37.482a10.001 10.001 0 0 0 14.7 0c22.299-24.17 52.415-37.482 84.799-37.482 55.707 0 103.068 40.174 114.325 95.125a88.504 88.504 0 0 0-11.475-.748c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88c.001-36.976-22.924-68.694-55.305-81.699zM424 317.276c-37.495 0-68-30.505-68-68s30.505-68 68-68 68 30.505 68 68-30.505 68-68 68z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></path>
        </g>
      </svg>
    ),
    title: "Cardiology",
    description:
      "Our Cardiology department specializes in the diagnosis and treatment of heart-related conditions. Our expert team is equipped with the latest technology to manage a wide range of cardiovascular diseases, from hypertension and heart failure to complex interventional procedures. We are dedicated to providing comprehensive care, ensuring that each patient receives personalized treatment for optimal heart health.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="112"
        height="112"
        x="0"
        y="0"
        color="white"
        viewBox="-90 60 612 412"
        xmlSpace="preserve"
      >
        <g transform="matrix(0.71,0,0,0.71,74.23999944686912,74.24000000000001)">
          <path
            d="M32 120a24.027 24.027 0 0 1 24-24h24v16H56a8 8 0 0 0-8 8v336a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8v-20h-16v12H64v-68.686l50.343 50.343A8 8 0 0 0 120 432h152v-16H128v-56a8 8 0 0 0-8-8H64V128h16a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8h16v32h16v-40a8 8 0 0 0-8-8h-24V96h24a24.027 24.027 0 0 1 24 24v48h16v-48a40.045 40.045 0 0 0-40-40h-36.686l-13.657-13.657A8 8 0 0 0 224 64h-24a32 32 0 0 0-64 0h-24a8 8 0 0 0-5.657 2.343L92.686 80H56a40.045 40.045 0 0 0-40 40v32h16zm80 284.686L75.314 368H112zM115.314 80H144a8 8 0 0 0 8-8v-8a16 16 0 0 1 32 0v8a8 8 0 0 0 8 8h28.686L240 99.313V120H96V99.313z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></path>
          <path
            d="M304 456a24.027 24.027 0 0 1-24 24H56a24.027 24.027 0 0 1-24-24V168H16v288a40.045 40.045 0 0 0 40 40h224a40.045 40.045 0 0 0 40-40v-16h-16zM112 200v-16h16v-16h-16v-16H96v16H80v16h16v16zM144 152h112v16H144zM144 184h72v16h-72zM112 216h96v16h-96z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></path>
          <path
            d="M80 216h16v16H80zM112 248h96v16h-96zM112 280h120v16H112zM80 280h16v16H80zM112 312h144v16H112zM144 344h112v16H144zM144 376h112v16H144z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></path>
          <path
            d="M472 24a8 8 0 0 0-8-8h-16a16 16 0 0 0 0 32h16a8 8 0 0 0 8-8 8.009 8.009 0 0 1 8 8v120a64 64 0 0 1-128 0V48a8.009 8.009 0 0 1 8-8 8 8 0 0 0 8 8h16a16 16 0 0 0 0-32h-16a8 8 0 0 0-8 8 24.028 24.028 0 0 0-24 24v120a80.11 80.11 0 0 0 72 79.6V364a59.965 59.965 0 0 1-88 53.043V296h-16v108.735A59.765 59.765 0 0 1 288 364v-76.581a56 56 0 1 0-16 0V364a76 76 0 0 0 152 0V247.6a80.11 80.11 0 0 0 72-79.6V48a24.028 24.028 0 0 0-24-24zM272 232a8 8 0 1 1 8 8 8.009 8.009 0 0 1-8-8zm-32 0a40 40 0 1 1 48 39.2v-16.576a24 24 0 1 0-16 0V271.2a40.067 40.067 0 0 1-32-39.2z"
            fill="#ffffff"
            opacity="1"
            data-original="#000000"
          ></path>
        </g>
      </svg>
    ),
    title: "Diagnosis",
    description:
      "The Diagnosis department offers state-of-the-art diagnostic services to accurately identify and understand a wide range of medical conditions. With advanced imaging, laboratory, and screening technologies, our specialists work to provide timely and precise diagnoses. We are dedicated to guiding patients on the best path to recovery through thorough and accurate assessments.",
  },
];

export default departments;
