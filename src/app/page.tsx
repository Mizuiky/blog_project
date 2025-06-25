//isso é um componente, quando é page colocamos o nome page no final
//isso é nossa rota barra / cada rota é a combinacao do nome da pasta + arquivo page.tsx

import clsx from "clsx";

export default function HomePage() {
  return (
    <div
      className={clsx(
        "text-3xl",
        "font-bold",
        "text-blue-500",
        "hover:text-blue-100",
        "hover:bg-blue-500",
        "transition",
        "duration-200"
      )}
    >
      <h1> Ola de dentro do page.tsx</h1>
    </div>
  );
}
