/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmailFormCreateFormInputValues = {
    email?: string;
};
export declare type EmailFormCreateFormValidationValues = {
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmailFormCreateFormOverridesProps = {
    EmailFormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmailFormCreateFormProps = React.PropsWithChildren<{
    overrides?: EmailFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmailFormCreateFormInputValues) => EmailFormCreateFormInputValues;
    onSuccess?: (fields: EmailFormCreateFormInputValues) => void;
    onError?: (fields: EmailFormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmailFormCreateFormInputValues) => EmailFormCreateFormInputValues;
    onValidate?: EmailFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmailFormCreateForm(props: EmailFormCreateFormProps): React.ReactElement;
