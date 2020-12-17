
**O "keyof" para termos acesso apenas as chaves do tipo informado.**

```typescript
type Extract<T, U> = T extends U ? T : never;
```

Ex:

```typescript
// Keyof pega as chaves do tipo Project e as chaves do tipo BaseProject.
type SharedKeys = Extract<keyof Project, keyof BaseProject>;
```

```typescript

```

```typescript

```
