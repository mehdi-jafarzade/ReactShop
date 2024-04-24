function CheckoutWizard({ activeStep = 0 }) {



    const titles = ['ورود کاربر', 'سبد خرید', 'روش پرداخت', 'صدورفاکتور']
  
    return (
  
      <div className='mb-5 mt-8 sm:mt-24 flex flex-wrap lalezar'>
        {titles.map((item, index) => (
          <div
            className={`flex-1 border-b-2 text-center
            ${
              index <= activeStep
                ? 'border-blue-600 text-blue-600'
                : 'border-gray-400 text-gray-400'
            }
            `}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
  
    )
  }
  
  
  export default CheckoutWizard