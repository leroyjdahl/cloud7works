import { Button } from '@nextui-org/react';

interface FormSelectProps {
    forms: any[];
    setSelectedForm: any;
    selectedForm: any;
    handleFormSelect: any;
}

export const FormSelect = ({ forms, setSelectedForm, selectedForm, handleFormSelect }: FormSelectProps) => (
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
);