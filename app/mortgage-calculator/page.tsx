'use client';
import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Footer from '@/components/Footer';

type PaymentBreakdown = {
  propertyTax: number;
  insurance: number;
  hoa: number;
  utilities: number;
};

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(207600);
  const [downPayment, setDownPayment] = useState(41520);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState('462016');
  const [breakdown, setBreakdown] = useState<PaymentBreakdown>({
    propertyTax: 265,
    insurance: 132,
    hoa: 132,
    utilities: 100
  });

  const calculateMonthlyPrincipalAndInterest = (): number => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return Math.round(monthlyPayment);
  };

  const principalAndInterest = calculateMonthlyPrincipalAndInterest();
  const totalMonthlyPayment = principalAndInterest + 
    breakdown.propertyTax + 
    breakdown.insurance + 
    breakdown.hoa + 
    breakdown.utilities;

  // Update down payment amount when percentage changes
  useEffect(() => {
    const newDownPayment = (homePrice * downPaymentPercent) / 100;
    setDownPayment(Math.round(newDownPayment));
  }, [homePrice, downPaymentPercent]);

  return (
    <div className="w-full mx-auto  font-sans montserrat ">
    <div className='p-6 md:p-20 bg-[#F0F7F1]'>
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Mortgage calculator</h1>
      <p className="text-gray-600 mb-8 md:w-1/2 w-full">
        Our mortgage calculator includes key factors like homeowners association fees, property taxes, and
        private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
      </p>

      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-6">
          <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-center'>
                <div>
                        <label className="font-semibold">Home price</label>
                        <div className="py-4">
                            <Input 
                                type="text"
                                value={`$${homePrice.toLocaleString()}`}
                                onChange={(e) => {
                                const value = parseInt(e.target.value.replace(/\D/g, ''));
                                if (!isNaN(value)) setHomePrice(value);
                                }}
                                className="text-3xl md:text-5xl font-bold w-[95%]  md:w-[80%] py-6 md:py-10 bg-white"
                            />
                        </div>
                </div>
                <div>
                    <h2 className=" font-semibold">Monthly payment</h2>
                    <div className="text-3xl md:text-5xl font-bold md:w-[80%] py-6 md:py-10">
                    ${Math.round(totalMonthlyPayment).toLocaleString()}/mo
                    </div>
                </div>
                <a href='#' className='bg-emerald-700 hover:bg-emerald-900 font-bold px-6 py-4 rounded-md text-white text-center items-end hidden md:block'>
                    Get pre-appproved
                </a>
          </div>
          

          <Slider
            defaultValue={[homePrice]}
            min={50000}
            max={3000000}
            step={1000}
            onValueChange={(value) => setHomePrice(value[0])}
            className="w-full"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium">ZIP code</label>
              <Input 
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="mt-1 text-lg px-3 py-6 font-semibold bg-white border-gray-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Down payment</label>
              <div className="flex gap-2">
                <Input 
                  value={`$ ${downPayment.toLocaleString()}`}
                  onChange={(e) => {
                    const value = parseInt(e.target.value.replace(/\D/g, ''));
                    if (!isNaN(value)) {
                      setDownPayment(value);
                      setDownPaymentPercent(Math.round((value / homePrice) * 100));
                    }
                  }}
                  className="mt-1 text-lg px-3 py-6 w-[70%] font-semibold bg-white border-gray-400"
                />
                <Input 
                  value={`${downPaymentPercent}%`}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value)) {
                      setDownPaymentPercent(value);
                      setDownPayment(Math.round((homePrice * value) / 100));
                    }
                  }}
                  className="mt-1 text-lg px-1 md:px-3 py-6 font-semibold w-[30%] bg-white border-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Interest rate</label>
              <Input 
                value={`${interestRate}`}
                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                className="mt-1 text-lg px-3 py-6 font-semibold bg-white border-gray-400"
                type="number"
                step="0.1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Length of loan</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md shadow-sm 
                          focus:border-blue-500 focus:ring-blue-500 bg-white
                          py-3 px-3 border-[1px] font-semibold text-gray-900e border-gray-400"
              >
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={30}>30 years</option>
              </select>
            </div>
          </div>
        </div>
        </div>
    </div>

    <div className='p-2 md:py-20'>
        <div className="p-6 bg-white w-screen">
          <div className="space-y-6 w-full grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 className="text-2xl font-bold p-4">Monthly payment breakdown</h2>
                <div className="text-5xl font-bold mb-6 ">
                ${Math.round(totalMonthlyPayment).toLocaleString()}/mo
                </div>

                <div className="relative h-16  bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="absolute h-full bg-emerald-600 rounded-full" 
                    style={{
                    width: `${(principalAndInterest / totalMonthlyPayment) * 100}%`
                    }}
                />
                <div 
                    className="absolute h-full bg-violet-500 rounded-full" 
                    style={{
                    left: `${(principalAndInterest / totalMonthlyPayment) * 100}%`,
                    width: `${(breakdown.propertyTax / totalMonthlyPayment) * 100}%`
                    }}
                />
                <div 
                    className="absolute h-full bg-violet-400 rounded-full" 
                    style={{
                    left: `${((principalAndInterest + breakdown.propertyTax) / totalMonthlyPayment) * 100}%`,
                    width: `${(breakdown.insurance / totalMonthlyPayment) * 100}%`
                    }}
                />
                <div 
                    className="absolute h-full bg-amber-400 rounded-full" 
                    style={{
                    left: `${((principalAndInterest + breakdown.propertyTax + breakdown.insurance) / totalMonthlyPayment) * 100}%`,
                    width: `${(breakdown.hoa / totalMonthlyPayment) * 100}%`
                    }}
                />
                <div 
                    className="absolute h-full bg-red-400 rounded-full" 
                    style={{
                    left: `${((principalAndInterest + breakdown.propertyTax + breakdown.insurance + breakdown.hoa) / totalMonthlyPayment) * 100}%`,
                    width: `${(breakdown.utilities / totalMonthlyPayment) * 100}%`
                    }}
                />
                </div>
            </div>
            {/* br */}
            <div className="space-y-3 px-4 md:px-16">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-600" />
                  <span>Principal & interest</span>
                </div>
                <span className="font-bold text-center">${principalAndInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-violet-500" />
                  <span>Property taxes</span>
                </div>
                <Input 
                  value={breakdown.propertyTax}
                  onChange={(e) => setBreakdown(prev => ({
                    ...prev,
                    propertyTax: parseInt(e.target.value) || 0
                  }))}
                  className="w-24"
                  type="number"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-violet-400" />
                  <span>Homeowners insurance</span>
                </div>
                <Input 
                  value={breakdown.insurance}
                  onChange={(e) => setBreakdown(prev => ({
                    ...prev,
                    insurance: parseInt(e.target.value) || 0
                  }))}
                  className="w-24"
                  type="number"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <span>HOA fees</span>
                </div>
                <Input 
                  value={breakdown.hoa}
                  onChange={(e) => setBreakdown(prev => ({
                    ...prev,
                    hoa: parseInt(e.target.value) || 0
                  }))}
                  className="w-24"
                  type="number"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span>Utilities</span>
                </div>
                <Input 
                  value={breakdown.utilities}
                  onChange={(e) => setBreakdown(prev => ({
                    ...prev,
                    utilities: parseInt(e.target.value) || 0
                  }))}
                  className="w-24"
                  type="number"
                />
              </div>
              <button className='bg-gray-300 text-black font-medium py-4 px-6 rounded-lg'>Copy estimate link</button>
            </div>
            
          </div>
        </div>
      </div>

                  <hr></hr>
    <div className='px-10'>

      <div>
        <p className='text-2xl font-semibold py-8 px-3'>How does a mortgage calculator help me?</p>
        <p className='text-lg pb-8 px-3'>When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
      </div>
      <hr></hr>
      <p className='text-2xl font-semibold left-0 py-8 px-3'>How to calculate monthly mortgage payments?</p>
      <div className='flex flex-col items-center'>
        
        <p className='text-lg pb-8 px-3'>Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.</p>
        <p className='text-lg pb-8 px-3'>Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>

        <p className='text-lg pb-4 px-3'>Formula for calculating your debt-to-income (DTI) ratio:</p>
        <Image
          className="p-4 "
          src="/heloc-formula.webp"
          alt="heloc formula"
          width={1000}
          height={500}/>

        <p className='text-lg pb-4 px-3'>Here’s an example of what calculating your DTI might look like:</p>
        <Image
          className="p-4"
          src="/dti-formula.jpg"
          alt="heloc formula"
          width={1000}
          height={500}/>

        <p className='text-lg pb-8 px-3'>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>

      </div>
      <hr></hr>
      <p className='text-2xl font-semibold left-0 py-8 px-3'>How to calculate monthly mortgage payments?</p>
      <p className='text-lg pb-8 px-3'>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
      <p className='text-xl font-semibold left-0 py-8 px-3'>Formula for calculating monthly mortgage payments</p>

      <div className='flex flex-col items-center'>

        <p className='text-lg pb-4 px-3'>The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
        <Image
          className="p-4 "
          src="/monthly.jpg"
          alt="heloc formula"
          width={1000}
          height={500}/>

        <p className='text-lg pb-4 px-3 whitespace-break-spaces'>Where:

            M is monthly mortgage payments

            P is the principal loan amount (the amount you borrow)

            r is the monthly interest rate
            (annual interest rate divided by 12 and expressed as a decimal)
            For example:
            if the annual interest rate is 5%,
            the monthly rate would be 0.05/12 = .00417, or .417%

            n is the total number of payments in months
            For example:
            for a 30-year loan, n = 30×12 = 360 months

            Here’s a simple example:</p>
        <Image
          className="p-4"
          src="/monthlyexample.jpg"
          alt="heloc formula"
          width={1000}
          height={500}/>

        <p className='text-lg pb-8 px-3'>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>

      </div>


      <hr></hr>
      <p className='text-2xl font-semibold left-0 py-8 px-3'>How is Better's mortgage calculator different?</p>
      <p className='text-xl font-semibold left-0 py-8 px-3'>This mortgage calculator shows your payments with taxes and insurance</p>

      <p className='text-lg pb-8 px-3'>The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.</p>
      <p className='text-lg pb-8 px-3'>Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.</p>
      <p className='text-lg pb-8 px-3'>Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>

      <p className='text-xl font-semibold left-0 py-8 px-3'>This mortgage calculator shows your mortgage costs with PMI</p>

      <p className='text-lg pb-8 px-3'>PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.</p>
      <p className='text-lg pb-8 px-3'>PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.</p>

      <p className='text-xl font-semibold left-0 py-8 px-3'>This mortgage calculator includes HOA fees</p>

      <p className='text-lg pb-8 px-3'>Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.</p>
      <p className='text-lg pb-8 px-3'>Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.</p>

      <hr></hr>
      </div>

      <Footer/>
    </div>
  );
};

export default MortgageCalculator;