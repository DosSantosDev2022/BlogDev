import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

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
    formState: { errors },
  } = useForm<FormInput>({ resolver: zodResolver(zodFormSchema) })

  const onSubimit: SubmitHandler<FormInput> = (data) => {
    alert('Inscrito com sucesso')
    console.log(data)
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

      <button className="border-0 bg-slate-50 text-slate-900 p-2 rounded-md h-10 hover:scale-105 transition-all">
        Inscrever
      </button>
    </form>
  )
}
