import React from 'react'
import Page from '../../../docs/app/page';
import { InputBox } from '@repo/ui/input-box';
import Admin from '@repo/ui/admin';



export default function page() {
  return (
    <div>

        hi for admin Page
        <Admin />
        <InputBox/>
    </div>
  )
}