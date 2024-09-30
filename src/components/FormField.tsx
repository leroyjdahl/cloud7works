import { useForm } from 'react-hook-form';
import {
    Input,
    Button,
    Textarea,
    Divider,
    Checkbox,
    Autocomplete,
    AutocompleteItem,
    DatePicker,
    DateValue,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { countries, forms, genders, states } from '../data';

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,

        setValue,
        reset,

    } = useForm({
        mode: "onChange",
        defaultValues: {
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
    const [selectedForm, setSelectedForm] = useState<any>(null);
    const onSubmit = async (e: any) => {
        try {
            console.log('Form submitteddd:', e.target.data);
            e.preventDefault();
        } catch (e) {
        }
    };

    const handleReset = () => {
        reset();
        setSelectedForm(null);
    };

    const handleFormSelect = (form: any) => {
        // setSelectedForm(form);
        console.log('Selected form:', selectedForm);
        // reset(selectedForm)
        setValue("uniqueId", selectedForm.uniqueId, { shouldTouch: true });
        setValue("altId", selectedForm.altId, { shouldTouch: true });
        setValue("givenName", selectedForm.givenName, { shouldTouch: true });
        setValue("lastName", selectedForm.lastName, { shouldTouch: true });
        setValue("gender", selectedForm.gender, { shouldTouch: true });
        setValue("dob", selectedForm.dob, { shouldTouch: true });
        setValue("address", selectedForm.address, { shouldTouch: true });
        setValue("street", selectedForm.street, { shouldTouch: true });
        setValue("city", selectedForm.city, { shouldTouch: true });
        setValue("state", selectedForm.state, { shouldTouch: true });
        setValue("zip", selectedForm.zip, { shouldTouch: true });
        setValue("country", selectedForm.country, { shouldTouch: true });
        setValue("telephone", selectedForm.telephone, { shouldTouch: true });
        setValue("email", selectedForm.email, { shouldTouch: true });
        const state = getValues('state');
        console.log('State:', state);
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
                    <Autocomplete
                        id='search'
                        autoComplete='on'
                        aria-label="Search a form"
                        placeholder="Search a form"
                        className="max-w-xl text-black"
                        radius="sm"
                        defaultItems={forms}
                        onSelectionChange={item => setSelectedForm(forms.find(f => f.value === item))}
                        onClear={() => setSelectedForm(null)}
                    >
                        {item => (
                            <AutocompleteItem key={item.value} className="text-black">
                                {item.label}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
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
                            <Input
                                id='uniqueId'
                                aria-label={'Unique ID'}
                                radius="sm"
                                className="col-span-4"
                                {...register('uniqueId', { required: 'Unique ID is required' })}
                            />
                            {errors.uniqueId && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.uniqueId.message)}
                                </div>
                            )}

                            <label htmlFor='altId' className="col-span-2">ALT ID</label>
                            <Input
                                id='altId'
                                aria-label={'ALT ID'}
                                radius="sm"
                                className="col-span-4"
                                {...register('altId', { required: 'ALT ID is required' })}
                            />
                            {errors.altId && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.altId.message)}
                                </div>
                            )}

                            <label htmlFor='givenName' className="col-span-2">Given Name</label>
                            <Input
                                id='givenName'
                                aria-label={'Given Name'}
                                radius="sm"
                                className="col-span-4"
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
                            <Input
                                id='lastName'
                                aria-label={'Last Name'}
                                radius="sm"
                                className="col-span-4"
                                {...register('lastName', { required: 'Last Name is required' })}
                            />
                            {errors.lastName && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.lastName.message)}
                                </div>
                            )}

                            <label htmlFor='gender' className="col-span-2">Gender</label>
                            <Autocomplete
                                id='gender'
                                aria-label={'Gender'}
                                radius="sm"
                                className="col-span-4"
                                defaultItems={genders}
                                {...register('gender', { required: "Gender is required" })}
                            >
                                {item => (
                                    <AutocompleteItem key={item.value} className="text-black">
                                        {item.label}
                                    </AutocompleteItem>
                                )}
                            </Autocomplete>
                            {errors.gender && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.gender.message)}
                                </div>
                            )}

                            <label htmlFor='dob' className="col-span-2">DOB</label>
                            <DatePicker
                                id='dob'
                                aria-label={'Date of Birth'}
                                radius="sm"
                                className="w-36 text-black "
                                showMonthAndYearPickers
                                {...register('dob')}
                                onChange={(value: DateValue) => setValue('dob', String(value))}
                            />
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
                            <Input
                                id='address'
                                aria-label={'Address'}
                                radius="sm"
                                className="col-span-4"
                                {...register('address', { required: 'Address is required' })}
                            />
                            {errors.address && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.address.message)}
                                </div>
                            )}

                            <label htmlFor='street' className="col-span-2">Street</label>
                            <Input
                                id='street'
                                aria-label={'Street'}
                                radius="sm"
                                className="col-span-4"
                                {...register('street', { required: 'Street is required' })}
                            />
                            {errors.street && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.street.message)}
                                </div>
                            )}

                            <label htmlFor='city' className="col-span-2">City</label>
                            <Input
                                id='city'
                                aria-label={'City'}
                                radius="sm"
                                className="col-span-4"
                                {...register('city', { required: 'City is required' })}
                            />
                            {errors.city && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.city.message)}
                                </div>
                            )}

                            <label htmlFor='state' className="col-span-2">State</label>
                            <Autocomplete
                                id='state'
                                aria-label={'State'}
                                radius="sm"
                                className="col-span-4"
                                defaultItems={states}
                                {...register('state', { required: 'State is required' })}
                            >
                                {item => (
                                    <AutocompleteItem key={item.abbreviation} className="text-black">
                                        {item.name}
                                    </AutocompleteItem>
                                )}
                            </Autocomplete>
                            {errors.state && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.state.message)}
                                </div>
                            )}

                            <label htmlFor='zip' className="col-span-2">ZIP</label>
                            <Input
                                id='zip'
                                aria-label={'Zip code'}
                                radius="sm"
                                className="col-span-4"
                                type="number"
                                {...register('zip', { required: 'ZIP is required' })}
                            />
                            {errors.zip && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.zip.message)}
                                </div>
                            )}

                            <label htmlFor='country' className="col-span-2">Country</label>
                            <Autocomplete
                                id='country'
                                aria-label={'Country'}
                                radius="sm"
                                className="col-span-4"
                                defaultItems={countries}
                                {...register('country', { required: 'Country is required' })}
                            >
                                {item => (
                                    <AutocompleteItem key={item.abbreviation} className="text-black">
                                        {item.name}
                                    </AutocompleteItem>
                                )}
                            </Autocomplete>
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
                            <Input
                                id='tel'
                                aria-label={'Telephone'}
                                radius="sm"
                                className="col-span-4"
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
                            <Input
                                id='email'
                                aria-label={'Email'}
                                radius="sm"
                                className="col-span-4"
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
                            <DatePicker
                                id='letterDate'
                                aria-label={'Letter Date'}
                                radius="sm"
                                className="w-36 text-black "
                                showMonthAndYearPickers
                                {...register('letterDate')}
                                onChange={(value: DateValue) => setValue('letterDate', String(value))}
                            />
                            {errors.letterDate && (
                                <div className="text-red-500 col-span-6">
                                    {String(errors.letterDate.message)}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col mt-6 md:flex-row">
                        <label htmlFor='comments' className="mr-4">COMMENTS</label>
                        <Textarea
                            id='comments'
                            aria-label={'Comments'}
                            radius="sm"
                            className="col-span-5"
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
                    // onPress={() => handleSubmit(onSubmit)}
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
                    <Button onPress={() => {
                        const formData = {
                            uniqueId: getValues("uniqueId"),
                            altId: getValues("altId"),
                            givenName: getValues("givenName"),
                            lastName: getValues("lastName"),
                            gender: getValues("gender"),
                            dob: getValues("dob"),
                            address: getValues("address"),
                            street: getValues("street"),
                            city: getValues("city"),
                            state: getValues("state"),
                            zip: getValues("zip"),
                            country: getValues("country"),
                            telephone: getValues("telephone"),
                            email: getValues("email")
                        };

                        console.log('Form Data:', formData);
                    }}>
                        Get Form Data
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
