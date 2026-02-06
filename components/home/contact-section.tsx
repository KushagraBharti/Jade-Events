"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
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
import { Reveal } from "@/components/ui/text-reveal"

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
})

function AnimatedInput({
  placeholder,
  delay,
  ...props
}: {
  placeholder: string
  delay: number
  [key: string]: unknown
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Input
        placeholder={placeholder}
        {...props}
        onFocus={(e) => {
          setIsFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          props.onBlur?.(e)
        }}
        className="border-0 border-b border-black/20 rounded-none px-0 py-6 text-2xl font-mono tracking-widest placeholder:text-black/20 focus-visible:ring-0 focus-visible:border-black bg-transparent transition-colors"
      />
      {/* Animated gold underline on focus */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-jade-gold to-jade-saffron"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  )
}

function AnimatedTextarea({
  placeholder,
  delay,
  ...props
}: {
  placeholder: string
  delay: number
  [key: string]: unknown
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Textarea
        placeholder={placeholder}
        {...props}
        onFocus={(e) => {
          setIsFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          props.onBlur?.(e)
        }}
        className="min-h-[150px] border-0 border-b border-black/20 rounded-none px-0 py-6 text-2xl font-mono tracking-widest placeholder:text-black/20 focus-visible:ring-0 focus-visible:border-black bg-transparent resize-none transition-colors"
      />
      {/* Animated gold underline on focus */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-jade-gold to-jade-saffron"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  )
}

function SuccessAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-start"
    >
      {/* Animated checkmark */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="text-jade-gold"
        >
          <motion.circle
            cx="30"
            cy="30"
            r="28"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.path
            d="M18 30 L26 38 L42 22"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-4xl font-serif italic"
      >
        Message received.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-2xl font-serif text-black/60 mt-2"
      >
        We'll be in touch.
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className="mt-8 h-[1px] bg-gradient-to-r from-jade-gold to-transparent"
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ delay: 1.2, duration: 0.6 }}
      />
    </motion.div>
  )
}

export function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    const phoneNumber = "1234567890"
    const text = `Hi Jade Events, I'm interested in your services.\n\nEmail: ${values.email}\nMessage: ${values.message}`
    const encodedText = encodeURIComponent(text)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`

    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
      setIsSuccess(true)
      setIsSubmitting(false)
      form.reset()
    }, 500)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-white text-black flex items-center justify-center py-24 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold accent in corner */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          background: "radial-gradient(circle at top right, rgba(212, 175, 55, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-8xl md:text-9xl font-serif font-light tracking-tighter leading-[0.8] overflow-hidden">
                <Reveal delay={0.2} direction="up">
                  <span className="block">Let's</span>
                </Reveal>
                <Reveal delay={0.4} direction="up">
                  <span className="block italic relative">
                    Talk
                    <motion.span
                      className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-jade-gold to-jade-saffron"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </span>
                </Reveal>
              </h2>
            </motion.div>

            <motion.div
              className="mt-12 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="font-mono text-sm tracking-widest uppercase text-black/60">
                Frisco, TX
              </p>
              <p className="font-mono text-sm tracking-widest uppercase">
                <a
                  href="mailto:hello@jadeevents.com"
                  className="relative inline-block group"
                >
                  hello@jadeevents.com
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-jade-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </p>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              className="mt-16 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="w-2 h-2 rotate-45 bg-jade-gold/50" />
              <div className="h-[1px] w-24 bg-gradient-to-r from-jade-gold/50 to-transparent" />
            </motion.div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <SuccessAnimation key="success" />
              ) : (
                <motion.div
                  key="form"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <AnimatedInput
                                placeholder="YOUR EMAIL"
                                delay={0.4}
                                {...field}
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
                              <AnimatedTextarea
                                placeholder="TELL US ABOUT YOUR VISION"
                                delay={0.6}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative w-full bg-black text-white rounded-none h-16 text-sm tracking-[0.2em] uppercase overflow-hidden group/btn"
                        >
                          <span className="relative z-10">
                            {isSubmitting ? "Sending..." : "Send Inquiry via WhatsApp"}
                          </span>
                          <span className="absolute inset-0 bg-jade-gold translate-x-[-101%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0" />
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
