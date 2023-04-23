//@ts-ignore
window.enableAMISDebug = true; //debug
window.addEventListener("load", () => {
  //@ts-ignore
  let newAmis = amisRequire(
    "amis/embed",
    {
      // amis schema
    },
    {
      // 这里是初始 props
    },
    // 注意是第四个参数
    {
      theme: "antd", //在这里更换主题
    }
  );
  /** amis */
  let amisJSON = {
    type: 'page',
    title: '表单页面',
    body: {
      type: 'form',
      mode: 'horizontal',
      api: '/saveForm',
      body: [
        {
          label: 'Name',
          type: 'input-text',
          name: 'name'
        },
        {
          label: 'Email',
          type: 'input-email',
          name: 'email'
        }
      ]
    }
  };

  let amisScoped = newAmis.embed("#root", amisJSON);
});
