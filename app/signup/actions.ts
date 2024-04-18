'use server'

import { signIn } from '@/auth'
import { ResultCode, getStringFromBuffer } from '@/lib/utils'
import { z } from 'zod'
import { kv } from '@vercel/kv'

import { AuthError } from 'next-auth'



interface Result {
  type: string
  resultCode: ResultCode
}


