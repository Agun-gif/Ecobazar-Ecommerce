import React from 'react'

const CheckoutDetails = () => {
    return (
        <div>
            <div>
                <form action="" className="mt-10">
                    <section className="border-dotted border-2 border-gray-500  ">
                        <div className="p-3">
                            {/* <!-- user Selected top section --> */}
                            <div className="flex items-center">
                                <div>
                                    <input className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded" type="checkbox" id="id_user"
                                        onChange="toggleSelectAll(this)"/>
                                        <label  className="form-label ">Select All</label>
                                </div>
                                <div className="ml-4 mb-1">
                                    <input className="form-input w-full py-1 px-3 border border-gray-300 rounded-md" type="text"
                                        placeholder="Search a user" id="js-serach-btn"/>
                                </div>
                            </div>

                            {/* <!-- border --> */}
                            <div className="border border-indigo-100"></div>


                        </div>
                    </section>

                    {/* <!-- user Selected bottom section --> */}
                    <div className="flex justify-between mt-4">
                        <div className="flex">
                            <input className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1" type="checkbox" name=""value="76" id=""  />
                                <label className="ml-2 text-center" >Is Verified</label>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CheckoutDetails
