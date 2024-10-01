import { Button } from "@nextui-org/react";

interface FormActionsProps {
    handleReset: any;
}

export const FormActions = ({ handleReset }: FormActionsProps) => (
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
);