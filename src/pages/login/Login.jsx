import React, { useState } from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Input } from "@components/Input/Input";
import Button from "@components/Button";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";

const FORM_DATA = {
    email: "",
    password: ""
}

export function Login() {
    const { formState: { errors }, control, handleSubmit } = useForm({
        defaultValues: {
            ...FORM_DATA
        },
        mode: "onChange"
    });
    useDocumentTitle("User Login | Sabka Bazaar");

    const onSubmit = (data) => {};

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginDescription}>
                <h2 className={styles.heading} data-testid="login-title">Login</h2>
                <p className={styles.description} data-testid="login-description">Get Access to your Orders, Wishlist and Recommendations</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
                <Input
                    control={control}
                    label="Email"
                    name="email"
                    type="text"
                    rules={{
                        required: "Email Address is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    }}
                    aria-label="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-required="true"
                />
                <Input
                    control={control}
                    label="Password"
                    name="password"
                    type="text"
                    aria-label="password"
                    rules={{ required: "Password is required" }}
                    aria-invalid={errors.password ? "true" : "false"}
                    aria-required="true"
                />
                <div className={styles.buttonWrapper}>
                    <Button data-testid="login-submit">Login</Button>
                </div>
            </form>
        </div>
    )
}