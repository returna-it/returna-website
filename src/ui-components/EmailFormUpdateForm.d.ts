/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EmailForm } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmailFormUpdateFormInputValues = {
    email?: string;
};
export declare type EmailFormUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmailFormUpdateFormOverridesProps = {
    EmailFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmailFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmailFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    emailForm?: EmailForm;
    onSubmit?: (fields: EmailFormUpdateFormInputValues) => EmailFormUpdateFormInputValues;
    onSuccess?: (fields: EmailFormUpdateFormInputValues) => void;
    onError?: (fields: EmailFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmailFormUpdateFormInputValues) => EmailFormUpdateFormInputValues;
    onValidate?: EmailFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmailFormUpdateForm(props: EmailFormUpdateFormProps): React.ReactElement;
