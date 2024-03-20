import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";


import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>page

      <Button>
        Hi there
      </Button>
    </div>
  )
}

export default page