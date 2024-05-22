'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { z } from 'zod'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import TextArea from '../ui/textArea'

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

const zodSchemaForm = z.object({
  name: z
    .string()
    .min(3, 'O nome é obrigatório')
    .min(10, 'Digite o nome completo'),
  email: z
    .string()
    .min(1, 'O email é obrigatório')
    .refine((value) => regexEmail.test(value), {
      message: 'Formado de email inválido',
    }),
  coments: z.string().min(1, 'Por favor deixe uma mensagem !'),
})

type FormInput = z.infer<typeof zodSchemaForm>

export function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(zodSchemaForm),
  })

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      toast.success('E-mail enviado com sucesso !', {
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
      toast.error('Erro ao enviar e-mail , tente novamente', {
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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" lg:w-[550px] w-full flex flex-col gap-5 mt-10"
      >
        <Input.Root className="p-2 border bg-white">
          <Input.Input
            className="text-blumine-500"
            type="text"
            placeholder="Digite seu nome"
            {...register('name')}
          />
        </Input.Root>

        {errors && (
          <span className="text-red-500 font-normal text-md">
            {errors.name?.message}
          </span>
        )}
        <Input.Root className="p-2 border bg-white">
          <Input.Input
            className="text-primary"
            type="email"
            placeholder="Digite seu e-mail"
            {...register('email')}
          />
        </Input.Root>
        {errors && (
          <span className="text-red-500 font-normal text-md">
            {errors.email?.message}
          </span>
        )}
        <TextArea
          className="p-2 border bg-white text-blumine-700"
          cols={30}
          {...register('coments')}
          placeholder="Deixe sua mensagem!"
        />
        {errors && (
          <span className="text-red-500 font-normal text-md">
            {errors.coments?.message}
          </span>
        )}
        <Button
          variant="primary"
          className=" w-full p-2 rounded-md text-lg font-bold "
        >
          Enviar
        </Button>
      </form>
    </>
  )
}
