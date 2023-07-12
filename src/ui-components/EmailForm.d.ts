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
export declare type EmailFormInputValues = {
    Field0?: string;
    email?: string;
};
export declare type EmailFormValidationValues = {
    Field0?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmailFormOverridesProps = {
    EmailFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmailFormProps = React.PropsWithChildren<{
    overrides?: EmailFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmailFormInputValues) => EmailFormInputValues;
    onSuccess?: (fields: EmailFormInputValues) => void;
    onError?: (fields: EmailFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmailFormInputValues) => EmailFormInputValues;
    onValidate?: EmailFormValidationValues;
} & React.CSSProperties>;
export default function EmailForm(props: EmailFormProps): React.ReactElement;
