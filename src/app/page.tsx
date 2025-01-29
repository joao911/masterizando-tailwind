import { SettingsTabs } from "./components/SettingsTabs";
import * as Input from "./components/Input";
import { Mail, UploadCloud, User } from "lucide-react";
import { label } from "framer-motion/client";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl ">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col ">
        <div className="flex justify-between items-center border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h1 className="text-lg font-medium text-zinc-900">Personal Info</h1>
            <span className="text-sm text-zinc-500">Update your photo and personal details here</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border text-zinc-700 border-zinc-300 hove4:bg-zinc-50">Cancel</button>
            <button type="submit" form="form" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm text-white bg-violet-600 hover:bg-violet-700">save</button>

          </div>


        </div>
        <form id="form" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">

          <div className="grid gap-3 grid-cols-form ">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Nome</label>
            <div className="grid gap-6 grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="João" />
              </Input.InputRoot>
              <Input.InputRoot>
                <Input.InputControl defaultValue="Paulo" />
              </Input.InputRoot>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email address</label>
            <div className="grid gap-6 ">
              <Input.InputRoot>
                <Input.InputPrefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.InputPrefix>
                <Input.InputControl id="email" defaultValue="joaopaulolacerda911@gmail.com" />
              </Input.InputRoot>

            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">This will be displayed on your profile</span>

            </label>
            <div className="flex items-start gap-5">
              <div className="flex justify-center items-center rounded-full h-16 w-16 bg-violet-50">
                <User className="h-8 w-8 text-violet-500" />
              </div>
              <label htmlFor="photo" className="group flex-1 cursor-pointer flex-col items-center justify-center pag-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500">
                Selecionar arquivo
                
                <div className="flex justify-center items-center ">
                  <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 flex items-center justify-center h-15 -w-15">
                  <UploadCloud className="h-5 -w-5 text-zinc-600 group-hover:text-violet-600" />
                </div>

                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs">
                    <span className="font-semibold text-violet-700 ">Click to upload</span> 
                    or drag and drop
                  </span>
                  <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400)</span>
                </div>

              </label>
              <input type="file" id="photo" className="sr-only" />

            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
            <div className="grid gap-6 ">
              <Input.InputRoot>

                <Input.InputControl id="role" defaultValue="Desenvolvedor front end" />
              </Input.InputRoot>

            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">Country</label>
            <div className=" ">


            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="zone" className="text-sm font-medium text-zinc-700">Time zone</label>
            <div className=" ">


            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="photo" className="text-sm font-medium text-zinc-700">Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">Write a short introduction</span>

            </label>
            <div className=" ">


            </div>
          </div>
          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700">Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">Share a few snippets of your work</span>

            </label>
            <div className="">


            </div>
          </div>
          <div className="flex justify-end items-center pt-5 gap-2">
            <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border text-zinc-700 border-zinc-300 hove4:bg-zinc-50">Cancel</button>
            <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm text-white bg-violet-600 hover:bg-violet-700">save</button>
          </div>
        </form>
      </div>

    </>
  );
}
