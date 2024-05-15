'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { z } from 'zod'
import { Input } from '../ui/input'
import { MdEmail } from 'react-icons/md'

import { Button } from '../ui/button'
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

const zodFormSchema = z.object({
  email: z.string().refine((value) => regexEmail.test(value), {
    message: 'Formato de email inválido',
  }),
})

type FormInput = z.infer<typeof zodFormSchema>

export function FormFooter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({ resolver: zodResolver(zodFormSchema) })

  const onSubimit: SubmitHandler<FormInput> = async (data) => {
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      toast.success('E-mail cadastrado com sucesso !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else {
      toast.error('Erro ao cadastrar, tente novamente !', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubimit)}
      className="flex flex-col lg:flex-row gap-2 w-full"
    >
      <div className="flex flex-col gap-1 w-full">
        <Input.Root>
          <Input.Icon>
            <MdEmail size={18} className="text-slate-400" />
          </Input.Icon>
          <Input.Input
            {...register('email')}
            type="email"
            id="search"
            required
            placeholder="Digite seu melhor e-mail"
          />
        </Input.Root>
        {errors && (
          <span className="text-red-500">{errors.email?.message}</span>
        )}
      </div>

      <Button className="w-full  h-10 " variant={'outline'}>
        Inscrever
      </Button>
    </form>
  )
}
