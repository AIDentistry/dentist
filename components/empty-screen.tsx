import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-[#FDF9FF] p-8">
        <h1 className="text-lg font-semibold text-black">
          Hi, Welcome. I am your Dentist AI Assistant
        </h1>
        <p className="leading-normal text-muted-foreground text-black">
          This assistant is trained to be an expert in dental symptos checking.
          It will assist you with your oral hygiene routine, understanding
          dental care, and even help you manage dental concerns. **None of the
          advice given here replaces professional dental advice.**
        </p>
      </div>
    </div>
  )
}
