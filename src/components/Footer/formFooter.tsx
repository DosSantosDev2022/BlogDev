'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { z } from 'zod'
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
    <form onSubmit={handleSubmit(onSubimit)} className="flex gap-2 w-full">
      <div className="flex flex-col gap-1 w-full">
        <input
          className="w-full rounded-md p-2 border-0 bg-slate-50"
          type="email"
          placeholder="Enter your email"
          {...register('email')}
        />
        {errors && (
          <span className="text-red-500">{errors.email?.message}</span>
        )}
      </div>

      <button className="border-0 bg-slate-50 text-slate-900 p-2 rounded-md h-10 hover:scale-105 transition-all duration-700">
        Inscrever
      </button>
    </form>
  )
}
