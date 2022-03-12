import Image from "next/image"

interface CardProps {
  title: string
  description: string
  image: string
}

export const Card = (props: CardProps) => {
  return (
    <div className="rounded-lg shadow-lg max-w-sm bg-gray-700">
          <Image className="rounded-lg" src={props.image} width="70%" height="70%" layout="responsive" alt="alt"/>
        <div className="p-6">
          <h5 className="prose dark:prose-invert text-xl prose-zinc mb-2 ">{props.title}</h5>
          <p className="prose dark:prose-invert prose-slate  mb-4">
            {props.description}
          </p>
        </div>
      </div>
  )
}