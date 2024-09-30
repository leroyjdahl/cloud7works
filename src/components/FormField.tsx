import { Controller, useForm } from 'react-hook-form';
import {
    Button,
    Divider,
    Checkbox
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { countries, forms, genders, states } from '../data';

const FormComponent = () => {
    const [selectedForm, setSelectedForm] = useState<any>(null);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: selectedForm || {
            uniqueId: '',
            altId: '',
            givenName: '',
            lastName: '',
            gender: '',
            dob: '',
            address: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            telephone: '',
            email: '',
            sendLetter: false,
            letterDate: '',
            comments: '',
        }
    });
    const onSubmit = async (e: any) => {
        try {
            console.log(e);
        } catch (e) {
        }
    };

    const handleReset = () => {
        reset();
        setSelectedForm(null);
    };

    const handleFormSelect = (form: any) => {
        setValue("uniqueId", selectedForm.uniqueId, { shouldTouch: true });
        setValue("altId", selectedForm.altId, { shouldTouch: true });
        setValue("givenName", selectedForm.givenName, { shouldTouch: true });
        setValue("lastName", selectedForm.lastName, { shouldTouch: true });
        setValue("gender", selectedForm.gender, { shouldTouch: true });
        setValue("dob", form.dob ? new Date(form.dob).toISOString().split('T')[0] : '', { shouldTouch: true });
        setValue("address", selectedForm.address, { shouldTouch: true });
        setValue("street", selectedForm.street, { shouldTouch: true });
        setValue("city", selectedForm.city, { shouldTouch: true });
        setValue("state", selectedForm.state, { shouldTouch: true });
        setValue("zip", selectedForm.zip, { shouldTouch: true });
        setValue("country", selectedForm.country, { shouldTouch: true });
        setValue("telephone", selectedForm.telephone, { shouldTouch: true });
        setValue("email", selectedForm.email, { shouldTouch: true });
    };

    return (
        <div>
            <div>
                <div className="flex justify-between items-center my-2">
                    <h1 className="text-2xl font-bold">Donec Lorem Magna</h1>
                    <Link
                        to="https://cloud7works.com/"
                        className="text-blue-500 underline"
                    >
                        Test link
                    </Link>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center items-center my-10">
                    <label htmlFor="search" className="">LABEL</label>
                    <select
                        id='search'
                        autoComplete='on'
                        aria-label="Search a form"
                        className="max-w-xl w-full text-black bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onChange={event => { setSelectedForm(forms.find(f => f.value === event.target.value)) }}
                    >
                        {forms.map((form) => (
                            <option key={form.value} value={form.value}>
                                {form.label}
                            </option>
                        ))}
                    </select>
                    <Button
                        aria-label={'Search'}
                        radius="full"
                        isDisabled={!selectedForm || selectedForm === ''}
                        className="w-[150px] text-white bg-black disabled:bg-gray-500"
                        onPress={() => handleFormSelect(selectedForm)}
                    >
                        Submit
                    </Button>
                </div>

                <Divider />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
                {/* ABOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:mr-12">
                        <h2 className="text-xl font-bold">ABOUT</h2>
                        <div className="grid grid-cols-6 gap-4 items-center">
                            <label htmlFor="uniqueId" className="col-span-2">Unique ID</label>
                            <input
                                id='uniqueId'
                                aria-label={'Unique ID'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('uniqueId', { required: 'Unique ID is required' })}
                            />
                            {errors.uniqueId && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.uniqueId.message)}
                                </div>
                            )}

                            <label htmlFor='altId' className="col-span-2">ALT ID</label>
                            <input
                                id='altId'
                                aria-label={'ALT ID'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('altId', { required: 'ALT ID is required' })}
                            />
                            {errors.altId && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.altId.message)}
                                </div>
                            )}

                            <label htmlFor='givenName' className="col-span-2">Given Name</label>
                            <input
                                id='givenName'
                                aria-label={'Given Name'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('givenName', {
                                    required: 'Given Name is required',
                                })}
                            />
                            {errors.givenName && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.givenName.message)}
                                </div>
                            )}

                            <label htmlFor="lastName" className="col-span-2">Last Name</label>
                            <input
                                id='lastName'
                                aria-label={'Last Name'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('lastName', { required: 'Last Name is required' })}
                            />
                            {errors.lastName && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.lastName.message)}
                                </div>
                            )}

                            <label htmlFor='gender' className="col-span-2">Gender</label>
                            <select
                                id='gender'
                                aria-label={'Gender'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('gender', { required: "Gender is required" })}
                            >
                                {genders.map((gender => (
                                    <option key={gender.value} value={gender.label}>
                                        {gender.label}
                                    </option>
                                )))
                                }
                            </select>
                            {errors.gender && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.gender.message)}
                                </div>
                            )}
                            <label htmlFor='dob' className="col-span-2">DOB</label>
                            <div className="relative col-span-4">
                                <input
                                    id='dob'
                                    aria-label={'Date of Birth'}
                                    type='date'
                                    className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    {...register('dob')}
                                />
                            </div>
                            {errors.dob && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.dob.message)}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ADDRESS */}
                    <div className="md:ml-12">
                        <h2 className="text-xl font-bold">ADDRESS</h2>
                        <div className="grid grid-cols-6 gap-4 items-center">
                            <label htmlFor='address' className="col-span-2">Address</label>
                            <input
                                id='address'
                                aria-label={'Address'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('address', { required: 'Address is required' })}
                            />
                            {errors.address && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.address.message)}
                                </div>
                            )}

                            <label htmlFor='street' className="col-span-2">Street</label>
                            <input
                                id='street'
                                aria-label={'Street'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('street', { required: 'Street is required' })}
                            />
                            {errors.street && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.street.message)}
                                </div>
                            )}

                            <label htmlFor='city' className="col-span-2">City</label>
                            <input
                                id='city'
                                aria-label={'City'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('city', { required: 'City is required' })}
                            />
                            {errors.city && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.city.message)}
                                </div>
                            )}

                            <label htmlFor='state' className="col-span-2">State</label>
                            <select
                                id='state'
                                aria-label={'State'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('state', { required: 'State is required' })}
                            >
                                {states.map((state) => (
                                    <option key={state.abbreviation} value={state.abbreviation}>
                                        {state.name}
                                    </option>
                                ))}

                            </select>
                            {errors.state && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.state.message)}
                                </div>
                            )}

                            <label htmlFor='zip' className="col-span-2">ZIP</label>
                            <input
                                id='zip'
                                aria-label={'Zip code'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="number"
                                {...register('zip', { required: 'ZIP is required' })}
                            />
                            {errors.zip && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.zip.message)}
                                </div>
                            )}

                            <label htmlFor='country' className="col-span-2">Country</label>
                            <select
                                id='country'
                                aria-label={'Country'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                {...register('country', { required: 'Country is required' })}
                            >
                                {countries.map((country) => (
                                    <option key={country.abbreviation} value={country.abbreviation}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                            {errors.country && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.country.message)}
                                </div>
                            )}
                        </div>
                        {/* CONTACT */}
                        <div className="grid grid-cols-6 gap-4 mt-6 items-center">
                            <h2 className="col-span-6 text-xl font-bold">CONTACT</h2>

                            <label htmlFor='tel' className="col-span-2">Telephone</label>
                            <input
                                id='tel'
                                aria-label={'Telephone'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="tel"
                                {...register('telephone', {
                                    required: 'Telephone is required',
                                })}
                            />
                            {errors.telephone && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.telephone.message)}
                                </div>
                            )}

                            <label htmlFor='email' className="col-span-2">Email</label>
                            <input
                                id='email'
                                aria-label={'Email'}
                                className="col-span-4 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.email.message)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* LETTER */}
                <div>
                    <h2 className="text-xl font-bold mt-12">LETTER</h2>
                    <Divider />
                    <div className="flex justify-between items-center mt-6">
                        <Checkbox
                            id='sendLetter'
                            aria-label={'Send Letter'}
                            className="gap-2"
                            {...register('sendLetter')}
                        >
                            SEND A LETTER
                        </Checkbox>
                        <div className="flex items-center gap-4">
                            <label htmlFor='letterDate' className="">DATE</label>
                            <div className="relative col-span-4">
                                <input
                                    id='letterDate'
                                    aria-label={'Date of Birth'}
                                    type='date'
                                    className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    {...register('letterDate')}
                                />
                            </div>
                            {errors.letterDate && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.letterDate.message)}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col mt-6 md:flex-row">
                        <label htmlFor='comments' className="mr-4">COMMENTS</label>
                        <textarea
                            id='comments'
                            aria-label={'Comments'}
                            className="col-span-5 w-full bg-white border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            {...register('comments')}
                        />
                        {errors.comments && (
                            <div className="text-red-500 col-span-6">
                                {String(errors.comments.message)}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex gap-4 mx-10">
                    <Button
                        aria-label={'Submit'}
                        radius="full"
                        className="w-[150px] text-white bg-black mt-6"
                        type="submit"
                    >
                        Submit
                    </Button>
                    <Button
                        aria-label={'Reset'}
                        className="bg-transparent text-blue-500 underline mt-6"
                        onPress={handleReset}
                    >
                        Reset Changes
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
