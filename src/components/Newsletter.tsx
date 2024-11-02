"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
import { ViewContainer } from "./ui/view-container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { toast } from "sonner";
import { SiDiscord, SiTelegram } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email!",
  }),
});

const Newsletter = ({ className, ...props }: GeneralComponent) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const authToken = process.env.HASHNODE_AUTH_TOKEN!;
    setIsLoading(true);

    try {
      const response = await fetch("https://gql.hashnode.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        body: JSON.stringify({
          query: `
            mutation {
              subscribeToNewsletter(input: {
                publicationId: "61c2dc628614531beb60b0f5"
                email: "${value.email}"
              }) {
              status
              }
            }
          `,
        }),
      });
      if (response.status === 200)
        toast.success("Subscribed to the newsletter!", {
          description: "Please check your email for confirmation.",
        });
      else
        toast.error("Ohh no! Some error occured!", {
          description:
            "Please send me an email at contact@wemakedevs.org and we'll fix it asap.",
        });
    } catch (error) {
      toast.error("Ohh no! Some error occured!", {
        description:
          "Please send me an email at contact@wemakedevs.org and we'll fix it asap.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id='join'
      className={cn(
        className,
        "py-8 md:py-12 lg:py-16 before:w-full before:h-1/2 bg-[#172a3b] scroll-m-[100px]"
      )}
      {...props}
    >
      <ViewContainer className='space-y-10'>
        <h2 className='text-4xl md:text-5xl text-white text-center'>
          Join Our Community
        </h2>
        <div className='flex justify-between p-10 md:p-12 lg:p-16 shadow-xl bg-gray-50 rounded-[8px] flex-col md:flex-row gap-8 lg:gap-10'>
          <div className='grow'>
            <h2 className='text-2xl md:text-[28px] font-semibold'>
              Join the Newsletter
            </h2>
            <p className='font-medium text-gray-500 text-lg md:text-[20px] mt-2 md:mt-3'>
              Get the latest insights and updates straight to your inbox.
            </p>
          </div>
          <Form {...form}>
            <form className='grow' onSubmit={form.handleSubmit(onSubmit)}>
              <div className='flex gap-2 flex-col md:flex-row'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='grow'>
                      <FormControl>
                        <Input
                          placeholder='Enter your email'
                          {...field}
                          className='h-13'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' disabled={isLoading}>
                  Subscribe
                </Button>
              </div>
              <p className='text-sm md:text-base text-gray-500 font-medium mt-2'>
                Your privacy is important. We never share your email.
              </p>
            </form>
          </Form>
        </div>
        <div className='flex flex-col md:flex-row gap-10'>
          <Link
            href='https://discord.gg/wemakedevs'
            className='flex justify-between gap-10 items-center rounded-[10px] group bg-[#7289da] px-4 md:px-6 py-2 md:py-4 grow'
          >
            <div className='flex gap-4 items-center group-hover:translate-x-6 transition-transform'>
              <SiDiscord className='text-white' />
              <span className='text-base md:text-lg font-semibold text-white'>
                Discord Server
              </span>
            </div>
            <ArrowUpRight
              stroke='#fff'
              className='group-hover:-translate-x-6 transition-transform'
            />
          </Link>
          <Link
            href='https://discord.gg/wemakedevs'
            className='flex justify-between gap-10 items-center rounded-[10px] group bg-[#0088cc] px-4 md:px-6 py-2 md:py-4 grow'
          >
            <div className='flex gap-4 items-center group-hover:translate-x-6 transition-transform'>
              <SiTelegram className='text-white' />
              <span className='text-base md:text-lg font-semibold text-white'>
                Telegram Channel
              </span>
            </div>
            <ArrowUpRight
              stroke='#fff'
              className='group-hover:-translate-x-6 transition-transform'
            />
          </Link>
        </div>
      </ViewContainer>
    </section>
  );
};

export default Newsletter;
