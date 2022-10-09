// import { throttling } from "utils";

// const onScrollAction = (
//   setTransparentBg,
//   observedComponent,
//   window,
//   componentRef
// ) => {
//   const height =
//     observedComponent.getBoundingClientRect().y +
//     window.pageYOffset -
//     componentRef.offsetHeight;
//   return () => {
//     const tmpPosition = observedComponent.getBoundingClientRect();
//     const tmpTransparent =
//       100 -
//       Number(((tmpPosition.y - componentRef.offsetHeight) / height).toFixed(2));
//     //height = tmpPosition.y;
//     /**если проскролим за наблюдаемый элемент, то tmpTransparent будет > 1
//      * чтобы не дергать setTransparentBg используем предыдущее значение
//      * если предюзначение === 1, то ничего не делаем
//      */
//     if (tmpTransparent < 100 && tmpPosition.top > 0) {
//       prevTransparent = tmpTransparent;
//       setTransparentBg(tmpTransparent);
//     } else if (prevTransparent != 100) {
//       setTransparentBg(100);
//     }
//   };
// };

// /**
//  *
//  * @param {*} transparentToComponent
//  * @param {*} setTransparentBg - функция установки нового значения прозрачности хедера
//  * @param {*} componentRef - ссылка на header
//  * @param {*} window - ссылка на объект window
//  * @returns {*} unsubscriber callback
//  */
// export const setTransperentByScroll = (
//   tmpTransparent,
//   setTransparentBg,
//   componentRef,
//   window
// ) => {
//   if (tmpTransparent > 500 && tmpPosition.top > 800) return;
//   setTransparentBg(100);
//   //TODO: чтобы хедер был темным к началу блока Х - componentRef.current.offsetHeight;
//   const onScrollCallback = throttling(
//     onScrollAction(
//       setTransparentBg,
//       window,
//       componentRef.current
//     ),
//     200
//   );
//   window.addEventListener("scroll", onScrollCallback);
//   return () => {
//     window.removeEventListener("scroll", onScrollCallback);
//   };
// };
