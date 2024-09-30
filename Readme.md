
# useState e useEffect no React

## useState

O hook `useState` é uma parte fundamental dos componentes funcionais do React. Ele permite adicionar estado a um componente sem a necessidade de usar classes.

### Sintaxe:
```js
const [estado, setEstado] = useState(valorInicial);
```

### Explicação:
- `estado`: Este é o valor atual do estado.
- `setEstado`: Esta função é usada para atualizar o estado.
- `valorInicial`: Este é o valor inicial do estado.

Cada vez que você chama `setEstado`, o componente é re-renderizado com o estado atualizado. O valor da variável `estado` é preservado entre renderizações.

### Exemplo:
```js
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique em mim
      </button>
    </div>
  );
}
```

Neste exemplo, o hook `useState` inicializa `contador` com `0`. Cada vez que o botão é clicado, a função `setContador` é chamada para incrementar o estado `contador` em 1, fazendo o componente ser re-renderizado e exibindo o valor atualizado.

## useEffect

O hook `useEffect` permite executar efeitos colaterais em componentes funcionais. Efeitos colaterais podem ser coisas como buscar dados, alterar o DOM manualmente, configurar assinaturas, etc.

### Sintaxe:
```js
useEffect(() => {
  // efeito
  return () => {
    // limpeza (opcional)
  };
}, [dependencias]);
```

### Explicação:
- O primeiro argumento é uma função que será executada após o componente ser renderizado. É aqui que o efeito colateral acontece.
- O segundo argumento é um array opcional de dependências. Se o array estiver vazio, o efeito será executado apenas uma vez, após a renderização inicial. Se você fornecer dependências, o efeito será executado sempre que uma delas mudar.

### Exemplo:
```js
import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(prevContador => prevContador + 1);
    }, 1000);

    // Limpeza ao desmontar o componente
    return () => clearInterval(intervalo);
  }, []);

  return <h1>{contador}</h1>;
}
```

Neste exemplo, o `useEffect` configura um intervalo que incrementa o contador a cada segundo. A função de limpeza, `clearInterval`, garante que o intervalo seja limpo quando o componente for desmontado.

## Conclusão

- `useState` permite gerenciar o estado em componentes funcionais.
- `useEffect` é usado para lidar com efeitos colaterais, como buscar dados ou interagir com APIs do navegador.

Ambos são hooks cruciais que substituem muitas funcionalidades anteriormente disponíveis apenas em componentes de classe, ajudando a tornar os componentes React mais simples e funcionais.