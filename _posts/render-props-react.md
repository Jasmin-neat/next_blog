---
title: "React Pattern: Render Props"
date: "2021-03-09"
author: "Alfin Surya"
excerpt: "Teknik berbagi kode untuk komponen"
# coverImage: "https://cdn-images-1.medium.com/max/1000/1*g_cxbFU5GHUzn43-FCnd_w.png"
---

Bagi kamu para react dev, ada yang sudah dengar ini? Iyap, **render props** adalah sebuah teknik di react dimana kita bisa **berbagi kode antar komponen** yang di passing melalui **props**. Props ini nantinya akan mengembalikan sebuah nilai berupa fungsi.

 Render props sendiri terdapat 2 jenis cara, ada yang melalui `props` ada pula melalui `children`.

```js
// By props
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>

// By children
<DataProvider>
  {data => <h1>Hello {data.target}</h1>}
/>
```

Teknik ini sebenernya saya gunakan biasanya untuk reusable component, dimana jika reusable component tersebut digunakan, komponen lain bisa mendapatkan value yang diinginkan tanpa harus memproses datanya di komponen lain. 

Contoh simplenya, pada case kali ini ingin mendapatkan data user status, setelah login

```js
// Reusable component
const CurrentPersonalAccount = () => {
    const { data, loading, error } = useQuery()
    return children(data?.currentPersonalAccount) || null
}

// Home.tsx
const Home = () => {
    return (
        <CurrentPersonalAccount>
            {(currentPersonalAccount) => JSON.stringify(currentPersonalAccount?.status)}
        </CurrentPersonalAccount>
    )
}
```

Pada kode diatas, terlihat komponen home tidak memproses data lagi untuk mendapatkan data user, tinggal import component `<CurrentPersonalAccount />`, selesai!. 

Namun render props memiliki sedikit kekurangan, yaitu terjadinya callback hell, jadi render props di dalam render props, hingga berulang2. Namun masalah ini bisa diselesaikan dengan beberapa cara (refactor), kalian bisa baca artikel ini utk lebih jelasnya [solve react render props callback hell](https://dmitripavlutin.com/solve-react-render-props-callback-hell/)

 Mungkin Secara tidak sadar, kalian sudah pernah menggunakan render props di beberapa library, contohnya seperti [react router dom](https://reactrouter.com/web/api/Route/render-func), dan library2 lain. Sekian dari saya, thanks!