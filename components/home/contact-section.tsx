"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
})

export function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setTimeout(() => {
      setIsSuccess(true)
      form.reset()
    }, 1000)
  }

  return (
    <section id="contact" className="min-h-screen bg-white text-black flex items-center justify-center py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-end">
          <div>
            <h2 className="text-8xl md:text-9xl font-serif font-light tracking-tighter leading-[0.8]">
              Let's <br /> <span className="italic">Talk</span>
            </h2>
            <div className="mt-12 space-y-2">
              <p className="font-mono text-sm tracking-widest uppercase">Frisco, TX</p>
              <p className="font-mono text-sm tracking-widest uppercase">hello@jadeevents.com</p>
            </div>
          </div>

          <div>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-serif italic"
              >
                Message received. We'll be in touch.
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="YOUR EMAIL"
                            {...field}
                            className="border-0 border-b border-black/20 rounded-none px-0 py-6 text-2xl font-mono tracking-widest placeholder:text-black/20 focus-visible:ring-0 focus-visible:border-black bg-transparent transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="TELL US ABOUT YOUR VISION"
                            {...field}
                            className="min-h-[150px] border-0 border-b border-black/20 rounded-none px-0 py-6 text-2xl font-mono tracking-widest placeholder:text-black/20 focus-visible:ring-0 focus-visible:border-black bg-transparent resize-none transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-black text-white hover:bg-black/80 rounded-none h-16 text-sm tracking-[0.2em] uppercase">
                    Send Inquiry
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
