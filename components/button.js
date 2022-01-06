import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Button = ({ children, href }) => {

    return <>
        <button class="btn btn-blue">
            {children}
        </button>

        <style>
        .btn {
            @apply font-bold py-2 px-4 rounded;
        }
        .btn-blue {
            @apply bg-blue-500 text-white;
        }
        .btn-blue:hover {
            @apply bg-blue-700;
        }
        </style>
    </>
}

export default Button
