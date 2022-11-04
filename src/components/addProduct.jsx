import UsePostProducts from '../hooks/useAddProducts'

export default function AddProducts () {
  const { formData, setFormData, addProduct } = UsePostProducts()

  return (
    <form className='h-screen grid place-items-center'>
      <div className='w-[90%] mt-4 sm:w-[80%] bg-white dark:bg-gray-800 rounded-md px-5 pb-5'>
        <p className='font-bold text-gray-900 dark:text-gray-400 capitalize pt-4 pb-4 text-3xl'>Add products form</p>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <label htmlFor='Product_Name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Product name</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, Product_Name: e.target.value })
              }} type='text' id='Product_Name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Beats 44' required=''
            />
          </div>
          <div>
            <label htmlFor='Product_Type' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Product Type</label>
            <select
              onChange={(e) => {
                setFormData({ ...formData, Product_Type: e.target.value })
              }} type='text' id='Product_Type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required=''
            > <option value=''>Headphones Type</option>
              <option>Headphone</option>
              <option>Wired Headphone</option>
              <option>Wireless Headphone</option>
            </select>
          </div>
          <div>
            <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Price</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, price: e.target.value })
              }} type='number' id='price' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='4,000' required=''
            />
          </div>
          <div>
            <label htmlFor='quantity' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>quantity</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, quantity: e.target.value })
              }} type='number' id='quantity' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='5' required=''
            />
          </div>
          <div>
            <label htmlFor='smallText' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Small Text</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, smallText: e.target.value })
              }} type='text' id='smallText' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Small text' required=''
            />
          </div>
          <div>
            <label htmlFor='midText' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Mid Text</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, midText: e.target.value })
              }} type='text' id='midText' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Mid text' required=''
            />
          </div>
        </div>
        <div className='mb-6'>
          <label htmlFor='largeText' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Large Text</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, largeText: e.target.value })
            }} type='text' id='largeText' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Large text' required=''
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='img' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Image</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, img: e.target.files[0] })
            }} type='file' id='img' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required=''
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Description</label>
          <textarea
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value })
            }} type='text' id='description' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='This is the best product ever' required=''
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
            addProduct(formData)
          }} type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >Save product
        </button>
      </div>
    </form>

  )
}
