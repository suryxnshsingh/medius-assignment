import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black section">
      <div className="m-auto px-6 py-6 md:px-10 lg:px-16 xl:px-20 2xl:px-40 ">
        <svg role="img" className="icon icon-LogoBetter2021" width="85px" height="35px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Better</title><path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="#017848"></path></svg>
          <title>Better</title>
          <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414Z" fill="#017848"/>

        <div className="mt-6 flex flex-col gap-y-8 md:flex-row md:gap-16">
          <div className="flex-shrink flex-grow basis-1/6">
            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
              Better is a family of companies serving all your homeownership needs.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="mt-4">
                <a href="/mortgage/">
                  <img 
                    alt="better mortgage homepage" 
                    loading="lazy" 
                    width="150" 
                    height="23" 
                    src="https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg"
                  />
                </a>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                  We can't wait to say "Welcome home." Apply 100% online, with expert customer support.
                </p>
              </li>
              <li className="mt-4">
                <a href="/mortgage/">
                  <img 
                    alt="better mortgage homepage" 
                    loading="lazy" 
                    width="150" 
                    height="23" 
                    src="https://media.better.com/better-com/1660240096238/better-real-estate-logo.svg"
                  />
                </a>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
                </p>
              </li>
              <li className="mt-4">
                <a href="/mortgage/">
                  <img 
                    alt="better mortgage homepage" 
                    loading="lazy" 
                    width="150" 
                    height="23" 
                    src="https://media.better.com/better-com/1660240096238/better-cover-logo.svg"
                  />
                </a>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                Shop, bundle, and save on insurance coverage for home, auto, life, and more.
                </p>
              </li>
              <li className="mt-4">
                <a href="/mortgage/">
                  <img 
                    alt="better mortgage homepage" 
                    loading="lazy" 
                    width="150" 
                    height="23" 
                    src="https://media.better.com/better-com/1660240096238/better-inspect-logo.svg"
                  />
                </a>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
                </p>
              </li>
              <li className="mt-4">
                <a href="/mortgage/">
                  <img 
                    alt="better mortgage homepage" 
                    loading="lazy" 
                    width="250" 
                    height="23" 
                    src="https://media.better.com/better-com/1660240096238/better-settlement-services-logo.svg"
                  />
                </a>
                <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                Get transparent rates when you shop for title insurance all in one convenient place.
                </p>
              </li>
            </ul>
          </div>

          <div className="flex-shrink flex-grow basis-0">
            <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
              Resources
            </h4>
            <ul className="mt-2 space-y-4 md:mt-6">
              <li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Home affordability calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Mortgage calculator
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Free mortgage calculator
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Mortgage calculator with taxes
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Rent vs Buy
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  HELOC payment calculator
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  HELOC vs cash-out refinance calculator
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Buy a home
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Sell a home
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                Get home inspection
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-shrink flex-grow basis-0">
            <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
              Company
            </h4>
            <ul className="mt-2 space-y-4 md:mt-6">
              <li>
                <a href="/about-us" className="hover:gradient-effect hover:underline block py-1 text-link">
                  About Us
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Career
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Media
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Partner with us
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Learning center
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  FAQ
                </a>
              </li><li>
                <a href="#" className="hover:gradient-effect hover:underline block py-1 text-link">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-shrink flex-grow basis-0">
            <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
              Contact Us
            </h4>
            <ul className="mt-2 space-y-4 md:mt-6">
              <li>
                <a href="mailto:hello@better.com">hello@better.com</a>
              </li>
              <li>
                <a href="phoneto:1234567890">123-456-7890</a>
              </li>
              <li>
                <a>Glossary</a>
              </li>

              <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
              Legal
            </h4>
              <li>
                <a>NMLS Consumer Access</a>
              </li>
              <li>
                <a>Privacy policy</a>
              </li>
              <li>
                <a>Terms of use</a>
              </li>
              <li>
                <a>Disclosure and licensing</a>
              </li>
              <li>
                <a>Affiliate business</a>
              </li>
              <li>
                <a>Browser Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
        

        <div className="my-12 flex gap-x-4 md:mt-60 ">
          <div>
            <a 
              aria-label="Facebook" 
              href="https://www.facebook.com/better/" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <Facebook className="text-[#313131]" />
            </a>
          </div>
          <div>
            <a 
              aria-label="Instagram" 
              href="https://www.instagram.com/betterdotcom/" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <Instagram className="text-[#313131]" />
            </a>
          </div>
          <div>
            <a 
              aria-label="Linkedin" 
              href="https://www.linkedin.com/company/betterdotcom/" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <Linkedin className="text-[#313131]" />
            </a>
          </div>
        </div>

        <p className="font-normal leading-body m-0 py-4 text-left text-textPrimary text-xs">
        1.Better Mortgage's One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.
        </p>
        <p className="font-normal leading-body m-0 py-4 text-left text-textPrimary text-xs">
        3.Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.
        </p>

        <hr/>

        <div className="mt-12 space-y-4">
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
            © 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs'>
          Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs'>
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs underline'>
          BNew York State Housing and Anti-Discrimination Notice
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs underline'>
          New York Standard Operating Procedures
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs underline'>
          Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs '>
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs '>
          Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs '>
          Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs '>
          Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs '>
          Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
          </p>
          <p className='font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs '>
          Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;