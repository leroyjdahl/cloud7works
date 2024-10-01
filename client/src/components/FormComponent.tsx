import { useForm } from 'react-hook-form';
import { Button, Divider } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { FormInputs } from '../components/FormInputs';
import { FormSelect } from '../components/FormSelect';
import { FormActions } from '../components/FormActions';
import { fetchForms } from '../api/fetchForms';
import { formDefaultValues } from '../utils/formDefaults';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const API_URL = import.meta.env.VITE_API_URL;

const FormComponent = () => {
    const [selectedForm, setSelectedForm] = useState<any>(null);
    const [forms, setForms] = useState<any[]>([]);

    const { data: formData, loading, error } = useFetch(`${API_URL}/api/forms`);

    useEffect(() => {
        if (formData) {
            setForms(formData.data);
        }
    }, [formData]);


    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        mode: 'onChange',
        defaultValues: selectedForm || formDefaultValues,
    });



    const handleFormSelect = (form: any) => {
        Object.keys(form).forEach((key) => setValue(key, form[key], { shouldTouch: true }));
    };

    const onSubmit = (data: any) => {
        console.log(data);
        setForms(forms => [...forms, data]);
    };

    const handleReset = () => {
        reset();
        setSelectedForm(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
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
            <FormSelect forms={forms || []} setSelectedForm={setSelectedForm} handleFormSelect={handleFormSelect} selectedForm={selectedForm} />
            <Divider />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
                <FormInputs register={register} errors={errors} />
                <FormActions handleReset={handleReset} />
            </form>
        </div>
    );
};

export default FormComponent;