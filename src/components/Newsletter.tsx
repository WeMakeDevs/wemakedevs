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
      id='newsletter'
      className={cn(
        className,
        "py-10 md:py-16 lg:py-20 before:w-full before:h-1/2 bg-[#172a3b]"
      )}
      {...props}
    >
      <ViewContainer className='flex justify-between p-10 md:p-12 lg:p-16 shadow-xl bg-gray-50 rounded-[8px] flex-col md:flex-row gap-8 lg:gap-10'>
        <div className='grow'>
          <h2 className='text-2xl md:text-[28px] font-semibold'>
            Join the newsletter
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
      </ViewContainer>
    </section>
  );
};

export default Newsletter;
